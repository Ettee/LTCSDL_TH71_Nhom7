using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LTCSDL.Common.Rsp;
using LTCSDLBTL.BLL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LTCSDLBTL.WebBanHoa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly CustomerSvc _svc;
        public CustomerController()
        {
            _svc = new CustomerSvc();
        }
        [HttpPost("get-all-customers")]
        public IActionResult getAllCustomers()
        {
            var res = new SingleRsp();
            res.Data = _svc.All;
            return Ok(res);
        }



    }
}
