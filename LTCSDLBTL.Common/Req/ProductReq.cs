using System;
using System.Collections.Generic;
using System.Text;

namespace LTCSDLBTL.Common.Req
{
    public class ProductReq
    {
        public int ProductId { get; set; }
        public int? CategoryId { get; set; }
        public string ProductName { get; set; }
        public double? Price { get; set; }
        public string ProductImg { get; set; }
    }
}
