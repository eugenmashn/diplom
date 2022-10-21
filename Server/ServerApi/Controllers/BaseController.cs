using Domain.Models.ProjectContext;
using Domain.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Server.Controllers;

public abstract class BaseController<TEntity>: ControllerBase where TEntity : BaseModel
{
    protected IGenericRepository<TEntity> _service;
    protected BaseController(IGenericRepository<TEntity> service)
    {
        _service = service;
    }

    [HttpGet("getAll")]
    virtual async public Task<ActionResult<List<TEntity>>> GetAll() 
        => await _service.Get().ToListAsync();

    [HttpGet("getById/{id:Guid}")]
    virtual async public Task<ActionResult<TEntity>> GetById(Guid id)
        => await _service.FindById(id);
    [HttpPut("update")]
    virtual async public Task<ActionResult<TEntity>> Update(TEntity entity)
    {
        var domain = _service.FindById(entity.Id);
        if(domain == null)
            return NotFound();
        await _service.Update(entity);
        return entity;
    }

    virtual internal Task<TEntity> toDomainModel(TEntity webModel)
    {
        return Task.FromResult(webModel);
    }

    [HttpPost("create")]
    virtual async public Task<ActionResult<TEntity>> Create(TEntity entity)
    {
        var domain = await _service.FindById(entity.Id);
        if (domain != null)
            return BadRequest();
        var newObject = await toDomainModel(entity);
        await _service.Create(newObject);
        return entity;
    }
    [HttpDelete("delete/{id}")]
    virtual async public Task<IActionResult> Delete(string id)
    {
        var domain = await _service.FindById(new Guid(id));
        if (domain == null)
            return NotFound();
        await _service.Remove(domain);
        return Ok();
    }
}