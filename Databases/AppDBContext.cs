using Microsoft.EntityFrameworkCore;
using Models.Entities;

namespace Databases
{
    public class AppDBContext : DbContext
    {
        public DbSet<AppUser> AppUsers;
    }
}
