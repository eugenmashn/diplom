using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.Authorization;

namespace Server.Controllers;
[Route("api/[controller]")]
[ApiController]
public class TestController : ControllerBase
{  
    [Authorize(Roles = Roles.Admin)]
    [HttpGet]
    public IActionResult GetIndex()
    {
        return Ok("HEllo");
    }
}