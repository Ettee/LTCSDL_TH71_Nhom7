using LTCSDL.Common.BLL;
using LTCSDL.Common.Rsp;
using LTCSDLBTL.Common.Req;
using LTCSDLBTL.DAL;
using LTCSDLBTL.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace LTCSDLBTL.BLL
{
    public class CategoriesSvc : GenericSvc<CategoriesRep, Categorise>
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
        public SingleRsp CreateCategories(CategoriesReq cate)
        {
            var res = new SingleRsp();
            Categorise category = new Categorise();
            category.CategoryId = cate.CategoryId;
            category.CategoryName = cate.CategoryName;
            category.CateImg = cate.CateImg;
            

            res = _rep.CreateCategories(category);
            res.Data = category;
            return res;
        }
        public SingleRsp UpdateCategories(CategoriesReq cate)
        {
            var res = new SingleRsp();
            Categorise category = new Categorise();

            category.CategoryId = cate.CategoryId;
            category.CategoryName = cate.CategoryName;
            category.CateImg = cate.CateImg;

            res = _rep.UpdateCategories(category);
            res.Data = category;
            return res;
        }
    }
}
