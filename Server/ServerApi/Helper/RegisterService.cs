using Domain.Models.ProjectContext;
using Domain.Repository.Interfaces;
using Domain.Repository.Service;

namespace Server.Helper;

public static class ServiceDIHelper
{
    public static IServiceCollection RegisterService(this IServiceCollection services)
    {
        services.AddScoped<IProjectService, ProjectService>();
        services.AddScoped<IProjectTaskService, IProjectTaskService>();
        return services;
    }
}