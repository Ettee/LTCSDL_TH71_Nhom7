using LTCSDL.Common.BLL;
using LTCSDL.Common.Rsp;
using LTCSDLBTL.DAL;
using LTCSDLBTL.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace LTCSDLBTL.BLL
{
    public class OrderDetailSvc : GenericSvc<OrderDetailRep, OrderDetails>
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
        public Object GetOrderDetailWithCustInfo(int orderID)
        {
            Object res = new Object();
            res = _rep.GetOrderDetailWithCustInfo(orderID);
            return res;
        }
    }
}
