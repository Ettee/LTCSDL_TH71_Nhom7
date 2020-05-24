using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LTCSDL.Common.Rsp;
using LTCSDLBTL.BLL;
using LTCSDLBTL.Common.Req;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LTCSDLBTL.WebBanHoa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly OrderSvc _svc;
        public OrderController()
        {
            _svc = new OrderSvc();
        }
        [HttpPost("get-all-orders")]
        public IActionResult getAllOrders()
        {
            var res = new SingleRsp();
            res.Data = _svc.All;
            return Ok(res);
        }
        [HttpPost("create-order-test")]
        public IActionResult CreateOrderTest([FromBody]OrderReq req)
        {
            var res = _svc.CreateOrderTest(req);
            return Ok(res);
        }
    }
}