using System.ComponentModel.DataAnnotations;
using Domain.Models.Enums;
using Domain.Models.Identity;
using Domain.Models.ProjectContext;

namespace Domain.Models.ApplicationContext;

public class ProjectTask: BaseModel
{
    [Key]
    public Guid Id { get; set; }
    public string Name { get; set; }
    public DateTime Created { get; set; }
    public ApplicationUser Reporter { get; set; }
    public ApplicationUser Assignee { get; set; }
    public decimal Tracking { get; set; } // minutes
    public WorkFlow WorkFlow { get; set; }
    public Project Project { get; set; }
}