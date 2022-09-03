using Domain.Models.ApplicationIdentityContext;
using Domain.Models.ProjectContext;
using Domain.Repository.Interfaces;

namespace Domain.Repository.Service;

public class ProjectService: GenericRepository<Project>, IProjectService
{
    public ProjectService(ApllicationDbContext context) : base(context)
    {
    }
}