using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using NPT.Model.RequestModel;
using NPT.Model.ResponseModel;
using NPT.DataAccess.Interfaces;
using Npgsql;
using System.Data;

namespace NPT.DataAccess.Repository
{
    public class PronunciationRepository : IPronunciationRepository
    {
        public async Task<UserPronunciationDetailsResponseModel> GetUserPronunciationDetails(UserPronunciationDetailsRequestModel request)
        {
            string strConnString = "Server=postgrescrypto.postgres.database.azure.com;Database=postgres;Port=5432;User Id=cryptoadmin;Password=Admin$123;Ssl Mode=Allow;";
            UserPronunciationDetailsResponseModel response = new UserPronunciationDetailsResponseModel();

            NpgsqlConnection conn = new NpgsqlConnection(strConnString);

            DataSet actualData = new DataSet();

            try
            {
                conn.Open();
                NpgsqlCommand comm = new NpgsqlCommand();
                comm.Connection = conn;
                comm.CommandType = CommandType.Text;
                comm.CommandText = "SELECT * from \"Crypto\".getemployeedetailsbyemailid('" + request.loggedinId + "');";

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
                response.lanid = actualData.Tables[0].Rows[0]["elid"].ToString();
                if (!(actualData.Tables[0].Rows[0]["updated_date"] is DBNull))
                response.LastUpdatedDate = Convert.ToDateTime(actualData.Tables[0].Rows[0]["updated_date"]);
                response.Createdby = actualData.Tables[0].Rows[0]["createdby"].ToString();
                response.Comments = actualData.Tables[0].Rows[0]["createdby"].ToString();

                response.IsCustomPronunciationAvailable = (string.IsNullOrEmpty(Convert.ToString(actualData.Tables[0].Rows[0]["pronunciation"]))) ? false : true;
                if (response.IsCustomPronunciationAvailable)
                {
                    var buffers = (byte[])actualData.Tables[0].Rows[0]["pronunciation"];
                    response.CustomPronunciation = Encoding.UTF8.GetString(buffers);
                    response.OverrideStandardPronunciation = (Boolean)actualData.Tables[0].Rows[0]["overridestandardpronunciation"];
                }
              

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

        public async Task<SaveCustomPronunciationResponseModel> SaveCustomPronunciation(SaveCustomPronunciationRequestModel request)
        {
            SaveCustomPronunciationResponseModel response = new SaveCustomPronunciationResponseModel();


            //Convert 64 Base data to Byte array
            var content = request.CustomPronunciationVoiceAsBase64.Split(',').ToList<string>();

            //insert into DB


            string strConnString = "Server=postgrescrypto.postgres.database.azure.com;Database=postgres;Port=5432;User Id=cryptoadmin;Password=Admin$123;Ssl Mode=Allow;";


            NpgsqlConnection conn = new NpgsqlConnection(strConnString);

            

            try
            {
                string transType = string.Empty;


                conn.Open();
                NpgsqlCommand comm = new NpgsqlCommand();
                comm.Connection = conn;
                comm.CommandType = CommandType.Text;
                //comm.CommandText = "select * from \"Crypto\".employee_full_details where email_id = "+"'anilkalwakuntla@wfhackathon2022.onmicrosoft.com'"+"";
                //comm.CommandText = "SELECT \"Crypto\".emplfulldetail('" + request.loggedinId + "')";
                //comm.CommandText = "INSERT INTO \"Crypto\".name_pronunciation (fk_emplid, pronunciation, updated_date, is_delete) " +
                 //                   "VALUES('2022007','" + content[1] + "','2022-05-15', false)";
                //emplid, customvoice, isdel(for is delete flag), overridestnd (for overridestandardpronunciation flag), optout (),operation (INSERT/UPDATE/DELETE), createdbyparam), commentspara)

                if (request.Isupdate == false)
                {
                    transType = "INSERT";

                }
                else
                {
                    transType = "UPDTAE";
                }
               
                
                comm.CommandText = "CALL \"Crypto\".savecustompronunciation('" + request.EmployeeId + "','" + content[1] + "', 'false', '" + request.OverrideStandardPronunciation + "','false','" + transType + "', '" + request.EmployeeId + "','" + request.Comments + "' )";
                comm.ExecuteNonQuery();

            }
            catch (Exception ex)
            {

                throw ex;
            }
            finally
            {
                conn.Close();
            }

            response.Success = true;
            return response;
        }

        public async Task<DeleteCustomPronunciationResponseModel> DeleteCustomPronunciation(DeleteCustomPronunciationRequestModel request)
        {
            DeleteCustomPronunciationResponseModel response = new DeleteCustomPronunciationResponseModel();


            string strConnString = "Server=postgrescrypto.postgres.database.azure.com;Database=postgres;Port=5432;User Id=cryptoadmin;Password=Admin$123;Ssl Mode=Allow;";


            NpgsqlConnection conn = new NpgsqlConnection(strConnString);

            try
            {
                string transType = string.Empty;


                conn.Open();
                NpgsqlCommand comm = new NpgsqlCommand();
                comm.Connection = conn;
                comm.CommandType = CommandType.Text;

                //call "Crypto".savecustompronunciation('1818181','',true,true,false,'UPDATE','testcreateUPDTEdby','UPDATE test comments from user here to test the same in db for now here rathna testing sp');
                comm.CommandText = "CALL \"Crypto\".savecustompronunciation('" + request.LoggedinUserId + "','','','DELETE', '','' )";
                comm.ExecuteNonQuery();

            }
            catch (Exception ex)
            {

                throw ex;
            }
            finally
            {
                conn.Close();
            }


            //Delete DB CALL
            response.Success = true;
            return response;
        }
    }
}
