using System;
using System.Collections.Generic;
using System.Text;
using NPT.DataAccess.Interfaces;
using System.Threading.Tasks;
using NPT.Model.RequestModel;
using NPT.Model.ResponseModel;
using Npgsql;
using System.Data;

namespace NPT.DataAccess.Repository
{
    public class SearchRepository : ISearchRepository
    {
       public async Task<SearchResponseModel> SearchPronunciationDetails(SearchRequestModel request)
        {
            {
                string strConnString = "Server=postgrescrypto.postgres.database.azure.com;Database=postgres;Port=5432;User Id=cryptoadmin;Password=Admin$123;Ssl Mode=Allow;";
                SearchResponseModel response = new SearchResponseModel();

                NpgsqlConnection conn = new NpgsqlConnection(strConnString);

                DataSet actualData = new DataSet();

                try
                {
                    conn.Open();
                    NpgsqlCommand comm = new NpgsqlCommand();
                    comm.Connection = conn;
                    comm.CommandType = CommandType.Text;
                    //comm.CommandText = "select * from \"Crypto\".employee_full_details where email_id = "+"'anilkalwakuntla@wfhackathon2022.onmicrosoft.com'"+"";
                    //comm.CommandText = "SELECT \"Crypto\".emplfulldetail('" + request.loggedinId + "')";
                    comm.CommandText = "SELECT * from \"Crypto\".GetEmployeeDetailsByEmpID('" + request.Searchtxt + "');";

                    NpgsqlDataAdapter nda = new NpgsqlDataAdapter(comm);
                    nda.Fill(actualData);

                    response.LoggedinId = actualData.Tables[0].Rows[0]["email_id"].ToString();
                    response.EmployeeId = actualData.Tables[0].Rows[0]["emplid"].ToString();
                    response.Firstname = actualData.Tables[0].Rows[0]["first_name"].ToString();
                    response.Lastname = actualData.Tables[0].Rows[0]["last_name"].ToString();
                    response.Fullname = actualData.Tables[0].Rows[0]["full_name"].ToString();
                    response.Phone = actualData.Tables[0].Rows[0]["work_phone"].ToString();
                    response.EmailAddress = actualData.Tables[0].Rows[0]["email_id"].ToString();
                    response.Managername = actualData.Tables[0].Rows[0]["rep_to_mgr_name"].ToString();
                    response.IsAdmin = (Boolean)actualData.Tables[0].Rows[0]["isadmin"];
                    response.IsCustomPronunciationAvailable = false;
                    response.lanid = actualData.Tables[0].Rows[0]["elid"].ToString();
                    if (!(actualData.Tables[0].Rows[0]["updated_date"] is DBNull))
                        response.LastUpdatedDate = Convert.ToDateTime(actualData.Tables[0].Rows[0]["updated_date"]);
                    response.Createdby = actualData.Tables[0].Rows[0]["createdby"].ToString();
                    response.Comments = actualData.Tables[0].Rows[0]["createdby"].ToString();
                    response.IsCustomPronunciationAvailable = (string.IsNullOrEmpty(Convert.ToString(actualData.Tables[0].Rows[0]["pronunciation"]))) ? false : true;
                    comm.Dispose();


                    return response;
                }
                catch (Exception ex)
                {

                    throw ex;
                }
                finally
                {
                    conn.Close();
                }

            }
        }
    }
}
