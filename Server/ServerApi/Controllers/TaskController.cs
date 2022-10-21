using Domain.Models.ApplicationContext;
using Domain.Repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.Authorization;

namespace Server.Controllers;
[Route("api/[controller]")]
[ApiController]
public class TaskController : BaseController<ProjectTask>
{  
    [Authorize(Roles = Roles.Admin)]
    [HttpGet]
    public IActionResult GetIndex()
    {
        return Ok("HEllo");
    }

    public TaskController(IProjectTaskService service) : base(service)
    {
    }
}