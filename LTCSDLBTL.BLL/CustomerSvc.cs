using LTCSDL.Common.BLL;
using LTCSDL.Common.Rsp;
using LTCSDLBTL.DAL;
using LTCSDLBTL.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace LTCSDLBTL.BLL
{
    public class CustomerSvc : GenericSvc<CustomerRep, Customers>
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
    }
}
