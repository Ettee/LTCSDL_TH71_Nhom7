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
    public class OrderSvc : GenericSvc<OrderRep, Orders>
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
        public SingleRsp CreateOrderTest(OrderReq order)
        {
            var res = new SingleRsp();
            Orders orders = new Orders();

            orders.OrderId = order.OrderId;
            orders.CustomerId = order.CustomerId;
            orders.OrderDate = order.OrderDate;

            res = _rep.CreateOrderTest(orders);
            res.Data = orders;
            return res;
        }

    }
}
