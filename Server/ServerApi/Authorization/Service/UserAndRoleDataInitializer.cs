using Domain.Models.Identity;
using Microsoft.AspNetCore.Identity;

namespace Server.Authorization.Service;

public class UserAndRoleDataInitializer
{
    public static Task SeedData(IServiceScope scope) =>  SeedData(
        scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>(),
        scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>());


    public static async Task SeedData(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
    {
        await SeedRolesSync(roleManager);
        await SeedUsersSync(userManager);
    }

    private static async Task SeedUsersSync(UserManager<ApplicationUser> userManager)
    {
        if (userManager.FindByEmailAsync("test@test").Result == null)
        {
            var user = new ApplicationUser();
            user.UserName = "test@test";
            user.Email = "test@test.com";
            user.FirstName = "Test";
            user.LastName = "Test";

            var result = userManager.CreateAsync(user, "P@ssw0rd1!").Result;

            if (result.Succeeded)
            {
                await userManager.AddToRoleAsync(user, Roles.Admin);
            }
        }
    }

    private static async Task SeedRolesSync(RoleManager<IdentityRole> roleManager)
    {
        if (!await roleManager.RoleExistsAsync(Roles.Admin))
            await roleManager.CreateAsync(new IdentityRole(Roles.Admin));
        if (!await roleManager.RoleExistsAsync(Roles.Customer))
            await roleManager.CreateAsync(new IdentityRole(Roles.Customer));
        if (!await roleManager.RoleExistsAsync(Roles.Developer))
            await roleManager.CreateAsync(new IdentityRole(Roles.Developer));
        if (!await roleManager.RoleExistsAsync(Roles.ProjectManager))
            await roleManager.CreateAsync(new IdentityRole(Roles.ProjectManager));
    }
    private static async Task SeedRolesClaimsSync(RoleManager<IdentityRole> roleManager)
    {
        if (!await roleManager.RoleExistsAsync(Roles.Admin))
            await roleManager.CreateAsync(new IdentityRole(Roles.Admin));
        if (!await roleManager.RoleExistsAsync(Roles.Customer))
            await roleManager.CreateAsync(new IdentityRole(Roles.Customer));
        if (!await roleManager.RoleExistsAsync(Roles.Developer))
            await roleManager.CreateAsync(new IdentityRole(Roles.Developer));
        if (!await roleManager.RoleExistsAsync(Roles.ProjectManager))
            await roleManager.CreateAsync(new IdentityRole(Roles.ProjectManager));
    }
}