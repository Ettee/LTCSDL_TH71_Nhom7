using LTCSDL.Common.DAL;
using LTCSDL.Common.Rsp;
using LTCSDLBTL.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LTCSDLBTL.DAL
{
    public class OrderRep : GenericRep<QLBHContext, Orders>
    {
        #region --Override--
        public override Orders Read(int id)
        {
            var res = All.FirstOrDefault(p => p.OrderId == id);
            return res;
        }

        public int Remove(int id)
        {
            var m = All.First(i => i.OrderId == id);
            m = base.Delete(m);
            return m.OrderId;
        }
        #endregion
        public SingleRsp CreateOrder(Orders order)
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
                        var t = context.Orders.Add(order);
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
    }
}
