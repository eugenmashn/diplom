using Domain.Models.ApplicationContext;
using Domain.Models.Identity;
using Domain.Models.ProjectContext;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Domain.Models.ApplicationIdentityContext;

public class ApllicationDbContext: IdentityDbContext<ApplicationUser>
{
    public DbSet<Project> Projects { get; set; }
    public DbSet<ProjectTask> ProjectTasks { get; set; }
    public ApllicationDbContext(DbContextOptions<ApllicationDbContext> options) : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
    }
}