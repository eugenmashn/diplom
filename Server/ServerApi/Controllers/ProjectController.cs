
using Domain.Models.ProjectContext;
using Domain.Repository.Interfaces;
using Microsoft.AspNetCore.Authorization;

namespace Server.Controllers;

public class ProjectController : BaseController<Project>
{  
    
    public ProjectController(IProjectService service) : base(service)
    {
    }
}