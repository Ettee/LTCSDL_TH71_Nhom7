using System;
using System.Collections.Generic;

namespace LTCSDLBTL.DAL.Models
{
    public partial class Customers
    {
        public Customers()
        {
            OrderDetails = new HashSet<OrderDetails>();
            Orders = new HashSet<Orders>();
        }

        public int CustomerId { get; set; }
        public string CompanyName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }

        public virtual ICollection<OrderDetails> OrderDetails { get; set; }
        public virtual ICollection<Orders> Orders { get; set; }
    }
}
