using Microsoft.AspNetCore.Identity;

namespace Server.Authorization.Service;

public class AuthSevice
{
    private readonly RoleManager<IdentityRole> _roleManager;

    public AuthSevice(RoleManager<IdentityRole> roleManager)
    {
        _roleManager = roleManager;
    }


}