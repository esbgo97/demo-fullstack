using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Utils.Pagination;

namespace Business.Interfaces
{
    internal interface IEntityBusiness<T>
    {
        Task<int> Create(T entity);
        Task<bool> Update(T entity);
        Task<bool> Delete(T entity);
        Task<int> GetById(int entityId);
        Task<EntityPager<T>> GetByFilters(T entityFilter);
    }
}
