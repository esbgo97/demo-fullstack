using Microsoft.Extensions.DependencyInjection;
using Repositories.Implementations;
using Repositories.Interfaces;

namespace Repositories
{
    public static class RepositoriesStartup
    {
        public static void ConfigureRepositories(this IServiceCollection services)
        {
            services.AddScoped<IAppUserRepository, AppUserRepository>();
        }
    }
}