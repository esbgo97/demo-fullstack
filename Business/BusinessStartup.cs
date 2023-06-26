using Business.Implementations;
using Business.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace Business
{
    public static class BusinessStartup
    {
        public static void ConfigureBusiness(this IServiceCollection services)
        {
            services.AddTransient<IAppUserBusiness, AppUserBusiness>();
        }
    }
}