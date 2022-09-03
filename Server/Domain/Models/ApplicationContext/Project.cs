using System.ComponentModel.DataAnnotations;
using Domain.Models.ApplicationContext;
using Domain.Models.Identity;

namespace Domain.Models.ProjectContext;

public class Project: BaseModel
{
    [Key]
    public Guid Id { get; set; }
    public string Name { get; set; }
    public DateTime Created { get; set; }
    public ApplicationUser Owner { get; set; }
    public string Description { get; set; }
    public List<ProjectTask> Tasks { get; set; }
}