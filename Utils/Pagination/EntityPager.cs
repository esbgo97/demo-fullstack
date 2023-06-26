using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Utils.Pagination
{
    public class EntityPager<T>
    {
        public int Page { get; set; }
        public int Size { get; set; }
        public int Skip { get; set; }
        public int Total { get; set; }
        public List<T>? Items { get; set; }
    }
}
