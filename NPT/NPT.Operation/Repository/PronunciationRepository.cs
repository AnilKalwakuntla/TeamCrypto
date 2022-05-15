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
    public class PronunciationRepository: IPronunciationRepository
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
                    //comm.CommandText = "select * from \"Crypto\".employee_full_details where email_id = "+"'anilkalwakuntla@wfhackathon2022.onmicrosoft.com'"+"";
                    //comm.CommandText = "SELECT \"Crypto\".emplfulldetail('" + request.loggedinId + "')";
                    comm.CommandText = "SELECT * from \"Crypto\".get_employee_details('" + request.loggedinId + "');";                  

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
            byte[] customvoice = Convert.FromBase64String(content[1]);

            //insert into DB

            response.Success = true;
            return response;
        }
    }
}
