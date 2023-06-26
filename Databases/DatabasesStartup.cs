using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Databases
{
    public static class DatabasesStartup
    {
        public static void ConfigureDatabases(this IServiceCollection services)
        {
            services.AddTransient<DbContext, AppDBContext>();
            services.AddDbContext<AppDBContext>();
        }
    }
}