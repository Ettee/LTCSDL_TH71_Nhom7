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
    public class CategoriesController : ControllerBase
    {
        private readonly CategoriesSvc _svc;
        public CategoriesController()
        {
            _svc = new CategoriesSvc();
        }
        [HttpPost("get-all-categories")]
        public IActionResult getAllCategories()
        {
            var res = new SingleRsp();
            res.Data = _svc.All;
            return Ok(res);
        }
        [HttpPost("create-categories")]
        public IActionResult CreateCategories([FromBody]CategoriesReq req)
        {
            var res = _svc.CreateCategories(req);
            return Ok(res);
        }
        [HttpPost("update-categories")]
        public IActionResult UpdateCategories([FromBody]CategoriesReq req)
        {
            var res = _svc.UpdateCategories(req);
            return Ok(res);
        }
    }
}