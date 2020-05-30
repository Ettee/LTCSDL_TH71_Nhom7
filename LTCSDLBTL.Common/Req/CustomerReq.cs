using System;
using System.Collections.Generic;
using System.Text;

namespace LTCSDLBTL.Common.Req
{
    public class CustomerReq
    {
        public int CustomerId { get; set; }
        public string CompanyName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
    }
}
