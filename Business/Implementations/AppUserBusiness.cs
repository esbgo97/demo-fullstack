using Business.Interfaces;
using Models.Entities;
using Repositories.Interfaces;
using Utils.Pagination;

namespace Business.Implementations
{
    public class AppUserBusiness : IAppUserBusiness
    {
        private IAppUserRepository _repository;
        public AppUserBusiness(IAppUserRepository  repository)
        {
            _repository = repository;
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
