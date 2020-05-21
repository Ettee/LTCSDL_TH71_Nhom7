using LTCSDL.Common.BLL;
using LTCSDL.Common.Rsp;
using LTCSDLBTL.Common.Req;
using LTCSDLBTL.DAL;
using LTCSDLBTL.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LTCSDLBTL.BLL
{
    public class ProductSvc : GenericSvc<ProductRep, Products>
    {
        #region --Override --
        public override SingleRsp Read(int id)
        {
            var res = new SingleRsp();

            var m = _rep.Read(id);
            res.Data = m;

            return res;
        }
        #endregion
        public object SearchProduct(string kw, int page, int size)
        {
            var pro = All.Where(x => x.ProductName.Contains(kw));

            var offset = (page - 1) * size;
            var total = pro.Count();
            int totalPages = (total % size) == 0 ? (total / size) : (int)(total / size + 1);
            var data = pro.OrderBy(x => x.ProductName).Skip(offset).Take(size).ToList();

            var res = new
            {
                Data = data,
                TotalRecord = total,
                TotalPages = totalPages,
                Page = page,
                Size = size
            };
            return res;
        }
        public SingleRsp CreateProduct(ProductReq pro)
        {
            var res = new SingleRsp();
            Products products = new Products();

            products.ProductId = pro.ProductId;
            products.ProductName = pro.ProductName;
            products.CategoryId = pro.CategoryId;
            products.Price = pro.Price;
            products.ProductImg = pro.ProductImg;

            res = _rep.CreateProduct(products);
            res.Data = products;
            return res;
        }
        public SingleRsp UpdateProduct(ProductReq pro)
        {
            var res = new SingleRsp();
            Products products = new Products();

            products.ProductId = pro.ProductId;
            products.ProductName = pro.ProductName;
            products.CategoryId = pro.CategoryId;
            products.Price = pro.Price;
            products.ProductImg = pro.ProductImg;

            res = _rep.UpdateProduct(products);
            res.Data = products;
            return res;
        }
        
    }
}
