using Domain.Models.ApplicationContext;
using Domain.Models.ApplicationIdentityContext;
using Domain.Models.ProjectContext;
using Domain.Repository.Interfaces;

namespace Domain.Repository.Service;

public class ProjectTaskService: GenericRepository<ProjectTask>, IProjectTaskService
{
    public ProjectTaskService(ApllicationDbContext context) : base(context)
    {
    }
}