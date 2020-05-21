using System;
using System.Collections.Generic;

namespace LTCSDLBTL.DAL.Models
{
    public partial class Categorise
    {
        public Categorise()
        {
            Products = new HashSet<Products>();
        }

        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string CateImg { get; set; }

        public virtual ICollection<Products> Products { get; set; }
    }
}
