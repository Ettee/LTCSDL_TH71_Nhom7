using System;
using System.Collections.Generic;

namespace LTCSDLBTL.DAL.Models
{
    public partial class OrderDetails
    {
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int? Price { get; set; }
        public int? Amount { get; set; }
        public virtual Orders Order { get; set; }
        public virtual Products Product { get; set; }
    }
}
