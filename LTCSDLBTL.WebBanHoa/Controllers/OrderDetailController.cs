using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LTCSDLBTL.BLL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LTCSDLBTL.WebBanHoa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderDetailController : ControllerBase
    {
        private readonly OrderDetailSvc _svc;
        public OrderDetailController()
        {
            _svc = new OrderDetailSvc();
        }
        [HttpPost("get-order-detail-with-cust-info")]
        public IActionResult GetOrderDetailWithCustInfo(int orderID)
        {
            var res = _svc.GetOrderDetailWithCustInfo(orderID);
            return Ok(res);
        }
    }
}
