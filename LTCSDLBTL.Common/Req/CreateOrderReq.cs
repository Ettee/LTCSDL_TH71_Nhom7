using System;
using System.Collections.Generic;
using System.Text;

namespace LTCSDLBTL.Common.Req
{
    public class CreateOrderReq
    {
        public int productID { get; set; }
        public string CompanyName { get; set; }
        public string email { get; set; }
        public string address { get; set; }
        public int amount { get; set; }
        public string phone { get; set; }
        public DateTime orderDate { get; set; }
    }
}
