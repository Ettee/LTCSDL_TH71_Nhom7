using System;
using System.Collections.Generic;
using System.Text;

namespace LTCSDLBTL.Common.Req
{
    public class OrderReq
    {
        public int OrderId { get; set; }
        public int? CustomerId { get; set; }
        public DateTime? OrderDate { get; set; }
    }
}
