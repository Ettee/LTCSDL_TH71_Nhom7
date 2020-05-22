using LTCSDL.Common.DAL;
using LTCSDL.Common.Rsp;
using LTCSDLBTL.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LTCSDLBTL.DAL
{
    public class CategoriesRep : GenericRep<QLBHContext,Categorise>
    {
        #region --Override--
        public override Categorise Read(int id)
        {
            var res = All.FirstOrDefault(p => p.CategoryId == id);
            return res;
        }

        public int Remove(int id)
        {
            var m = All.First(i => i.CategoryId == id);
            m = base.Delete(m);
            return m.CategoryId;
        }
        #endregion
        #region -- Methods --
        public SingleRsp CreateCategories(Categorise cate)
        {
            var res = new SingleRsp();
            // using để dùng được transaction
            using (var context = new QLBHContext())
            {
                // dùng tran để nếu khi insert sai hoặc có vấn đề gì đó nó tự động pass chứ k insert dữ liệu
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var t = context.Categorise.Add(cate);
                        context.SaveChanges();
                        tran.Commit();
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        res.SetError(ex.StackTrace);
                    }
                }
            }
            return res;
        }
        public SingleRsp UpdateCategories(Categorise cate)
        {
            var res = new SingleRsp();
            // using để dùng được transaction
            using (var context = new QLBHContext())
            {
                // dùng tran để nếu khi insert sai hoặc có vấn đề gì đó nó tự động pass chứ k insert dữ liệu
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var t = context.Categorise.Update(cate);
                        context.SaveChanges();
                        tran.Commit();
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        res.SetError(ex.StackTrace);
                    }
                }
            }
            return res;
        }
        #endregion
    }
}
