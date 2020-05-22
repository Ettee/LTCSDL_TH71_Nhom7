using LTCSDL.Common.DAL;
using LTCSDL.Common.Rsp;
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
    public class ProductRep : GenericRep<QLBHContext, Products>
    {
        #region --Override--
        public override Products Read(int id)
        {
            var res = All.FirstOrDefault(p => p.ProductId == id);
            return res;
        }

        public int Remove(int id)
        {
            var m = All.First(i => i.ProductId == id);
            m = base.Delete(m);
            return m.ProductId;
        }
        #endregion

        #region -- Methods --
        public SingleRsp CreateProduct(Products pro)
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
                        var t = context.Products.Add(pro);
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
        public SingleRsp UpdateProduct(Products pro)
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
                        var t = context.Products.Update(pro);
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

        public List<Object> GetProductsByCategoriesID(int cateID)
        {
            List<Object> res = new List<object>();
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
                cmd.CommandText = "GetProductsByCategoriesID";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id", cateID);
                da.SelectCommand = cmd;
                da.Fill(ds);
                if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        var x = new
                        {
                            ProductID =row["ProductID"],
                            CategoryID =row["CategoryID"],
                            ProductName = row["ProductName"],
                            Price = row["Price"],
                            ProductImg =row["ProductImg"] 
                        };
                        res.Add(x);
                    }
                }
            }
            catch (Exception ex)
            {
                res = null;
            }
            return res;
        }
        public List<Object> GetProductByID(int productID)
        {
            List<Object> res = new List<Object>();
            var cnn = (SqlConnection)Context.Database.GetDbConnection();
            if(cnn.State== ConnectionState.Closed)
            {
                cnn.Open();
            }
            try
            {
                SqlDataAdapter da = new SqlDataAdapter();
                DataSet ds = new DataSet();
                var cmd = cnn.CreateCommand();
                cmd.CommandText = "GetProductByID";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id", productID);
                da.SelectCommand = cmd;
                da.Fill(ds);
                if(ds.Tables.Count>0 && ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        var x = new
                        {
                            ProductID = row["ProductID"],
                            CategoryID = row["CategoryID"],
                            ProductName = row["ProductName"],
                            Price = row["Price"],
                            ProductImg = row["ProductImg"]
                        };
                        res.Add(x);
                    }
                }

            }
            catch (Exception ex)
            {
                res = null;
            }
            return res;
        }
        #endregion
    }
}
