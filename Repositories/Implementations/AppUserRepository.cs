using Microsoft.EntityFrameworkCore;

using Databases;
using Utils.Pagination;
using Models.Entities;
using Repositories.Interfaces;

namespace Repositories.Implementations
{
    public class AppUserRepository : IAppUserRepository
    {
        private AppDBContext _context;
        public AppUserRepository(DbContext context)
        {
            _context = (AppDBContext)context;
        }
        public Task<int> Create(AppUser entity)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Delete(AppUser entity)
        {
            throw new NotImplementedException();
        }

        public Task<EntityPager<AppUser>> GetByFilters(AppUser entityFilter)
        {
            throw new NotImplementedException();
        }

        public Task<int> GetById(int entityId)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Update(AppUser entity)
        {
            throw new NotImplementedException();
        }
    }
}
