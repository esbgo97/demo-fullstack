using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Interfaces
{
    internal interface IServiceBusiness<T,M>
    {
        M Execute(T parameters);
    }
}
