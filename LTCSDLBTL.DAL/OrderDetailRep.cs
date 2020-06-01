using LTCSDL.Common.DAL;
using LTCSDLBTL.DAL.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace LTCSDLBTL.DAL
{
    public class OrderDetailRep : GenericRep<QLBHContext, OrderDetails>
    {
        #region --Override--
        public override OrderDetails Read(int id)
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
        public Object GetOrderDetailWithCustInfo(int orderID)
        {
            var res = new Object();
            var cnn = (SqlConnection)Context.Database.GetDbConnection();
            if (cnn.State == ConnectionState.Closed)
            {
                cnn.Open();
            }
            try
            {
                SqlDataAdapter da = new SqlDataAdapter();
                DataSet ds = new DataSet();
                var cmd = cnn.CreateCommand();
                cmd.CommandText = "getOrderDetailWithCustInfo";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@orderID", orderID);
              
                da.SelectCommand = cmd;
                da.Fill(ds);
                if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        var x = new
                        {
                            OrderID = row["OrderID"],
                            CompanyName = row["CompanyName"],
                            ProductName = row["ProductName"],
                            Amount = row["Amount"],
                            Price = row["Price"],
                            Address =row["Address"],
                            Email = row["Email"],
                            Phone = row["Phone"]
                        };
                        res=x;
                    }
                }
            }
            catch (Exception ex)
            {
                res = null;
            }
            return res;
        }

    }
}
