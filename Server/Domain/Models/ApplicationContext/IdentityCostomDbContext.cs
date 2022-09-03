using Domain.Models.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Domain.Models.ApplicationContext;

public class IdentityCostomDbContext: IdentityDbContext<ApplicationUser>
{
    public IdentityCostomDbContext(DbContextOptions<IdentityCostomDbContext> options) : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
    }
}