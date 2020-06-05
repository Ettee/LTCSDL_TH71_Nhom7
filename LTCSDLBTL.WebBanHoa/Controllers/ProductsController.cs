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
    public class ProductsController : ControllerBase
    {
        private readonly ProductSvc _svc;
        public ProductsController()
        {
            _svc = new ProductSvc();
        }
        [HttpPost("get-all-product")]
        public IActionResult getAllProduct()
        {
            var res = new SingleRsp();
            res.Data = _svc.All;
            return Ok(res);
        }
        [HttpPost("search-products")]
        public IActionResult SearchProducts([FromBody]SearchProductReq req)
        {
            var res = new SingleRsp();
            var pros = _svc.SearchProduct(req.Keyword, req.Page, req.Size);
            res.Data = pros;
            return Ok(res);
        }
        [HttpPost("create-product")]
        public IActionResult CreateProduct([FromBody]ProductReq req)
        {
            var res = _svc.CreateProduct(req);
            return Ok(res);
        }

        //hàm update này chỉ hoạt động khi nhập vào đầy đủ thông tin cho product đó ( bắt buộc phải đủ 4 thứ :productID,cateID,Price,ProductImg)
        [HttpPost("update-product")]
        public IActionResult UpdateProduct([FromBody]ProductReq req)
        {
            var res = _svc.UpdateProduct(req);
            return Ok(res);
        }

        [HttpPost("get-products-by-category-id")]
        public IActionResult GetProductsByCategoriesID(int id)
        {
            var res = new SingleRsp();
            res.Data = _svc.GetProductsByCategoriesID(id);
            return Ok(res);
        }
        [HttpPost("get-product-by-id")]
        public IActionResult GetProductByID(int id)
        {
            var res = new SingleRsp();
            res.Data = _svc.GetProductByID(id);
            return Ok(res);
        }
        [HttpPost("delete-product")]
        public IActionResult DeleteProduct(int id)
        {
            var res = new SingleRsp();
            res.Data = _svc.DeleteProduct(id);
            return Ok(res);
        }

    }
}