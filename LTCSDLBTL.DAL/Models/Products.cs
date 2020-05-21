using System;
using System.Collections.Generic;

namespace LTCSDLBTL.DAL.Models
{
    public partial class Products
    {
        public Products()
        {
            OrderDetails = new HashSet<OrderDetails>();
        }

        public int ProductId { get; set; }
        public int? CategoryId { get; set; }
        public string ProductName { get; set; }
        public double? Price { get; set; }
        public string ProductImg { get; set; }

        public virtual Categorise Category { get; set; }
        public virtual ICollection<OrderDetails> OrderDetails { get; set; }
    }
}
