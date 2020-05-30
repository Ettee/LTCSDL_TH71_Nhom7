using LTCSDL.Common.DAL;
using LTCSDLBTL.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LTCSDLBTL.DAL
{
    public class CustomerRep : GenericRep<QLBHContext, Customers>
    {
        #region --Override--
        public override Customers Read(int id)
        {
            var res = All.FirstOrDefault(p => p.CustomerId == id);
            return res;
        }

        public int Remove(int id)
        {
            var m = All.First(i => i.CustomerId == id);
            m = base.Delete(m);
            return m.CustomerId;
        }
        #endregion
    }
}
