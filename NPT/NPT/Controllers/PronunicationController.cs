using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NPT.Model.RequestModel;
using NPT.Model.ResponseModel;
using Microsoft.CognitiveServices.Speech;
using System.IO;
using NPT.DataAccess.Interfaces;
using Npgsql;
using NPT.DataAccess.Repository;
using System.Data;
using System.Media;
using System.Text;

namespace NPT.Controllers
{

    [ApiController]
    public class PronunicationController : ControllerBase
    {
        static string YourSubscriptionKey = "7ef35f6306fa4d8c9f4effc70c5db688";
        static string YourServiceRegion = "eastus";
        public int Rate { get; set; }

        PronunciationRepository repo = new PronunciationRepository();

       

        static void PostgreSQLConnection()
        {
            string strConnString = "Server=postgrescrypto.postgres.database.azure.com;Port=5432;User Id=cryptoadmin;Password=Admin$123;Database=postgres;";
            try
            {
                NpgsqlConnection objpostgraceConn = new NpgsqlConnection(strConnString);
                objpostgraceConn.Open();
                string strpostgracecommand = "select * from employee_full_details";
                NpgsqlDataAdapter objDataAdapter = new NpgsqlDataAdapter(strpostgracecommand, objpostgraceConn);
                objpostgraceConn.Close();
            }
            catch (Exception ex)
            {
                throw ex;
                //System.Windows.Forms.MessageBox.Show(ex.Message, "Error Occured", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        [Route("api/pronunciation/GetStandardPronunciation/v1")]
        [HttpPost]
        public async Task<HttpResponse> GetStandardPronunciation ([FromBody] CustomPronunciationRequestModel requestModel)
        {
            var speechConfig = SpeechConfig.FromSubscription(YourSubscriptionKey, YourServiceRegion);
            var speechSynthesizer = new SpeechSynthesizer(speechConfig);
                       

            try
            {
                //speechConfig.SpeechSynthesisVoiceName = "en-US-JennyNeural";
                speechConfig.SpeechSynthesisVoiceName = requestModel.Country;
               

                using (speechSynthesizer = new SpeechSynthesizer(speechConfig))
                {
                   
                    var speechSynthesisResult = await speechSynthesizer.SpeakTextAsync(requestModel.FullName);
                    
                   // OutputSpeechSynthesisResult(speechSynthesisResult, requestModel.FullName);
                    
                }
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                speechSynthesizer.Dispose();
            }
            
            return null;

        }

        static void OutputSpeechSynthesisResult(SpeechSynthesisResult speechSynthesisResult, string text)
        {
            switch (speechSynthesisResult.Reason)
            {
                case ResultReason.SynthesizingAudioCompleted:
                    Console.WriteLine($"Speech synthesized for text: [{text}]");
                    break;
                case ResultReason.Canceled:
                    var cancellation = SpeechSynthesisCancellationDetails.FromResult(speechSynthesisResult);
                    Console.WriteLine($"CANCELED: Reason={cancellation.Reason}");

                    if (cancellation.Reason == CancellationReason.Error)
                    {
                        Console.WriteLine($"CANCELED: ErrorCode={cancellation.ErrorCode}");
                        Console.WriteLine($"CANCELED: ErrorDetails=[{cancellation.ErrorDetails}]");
                        Console.WriteLine($"CANCELED: Did you set the speech resource key and region values?");
                    }
                    break;
                default:
                    break;
            }
        }

        [Route("api/pronunciation/GetUserPronunciationDetails/v1")]
        [HttpPost]
        public async Task<ActionResult> GetUserPronunciationDetails([FromBody] UserPronunciationDetailsRequestModel request)
        {
            try
            {
                return Ok(await repo.GetUserPronunciationDetails(request));
            }
            catch(Exception)
            {
                throw;
            }
            
        }


        [Route("api/pronunciation/SaveCustomPronunciation/v1")]
        [HttpPost]
        public async Task<ActionResult> SaveCustomPronunciation([FromBody] SaveCustomPronunciationRequestModel request)
        {
            try
            {
                return Ok(await repo.SaveCustomPronunciation(request));
            }
            catch (Exception)
            {
                throw;
            }

        }


        [Route("api/pronunciation/GetPronunciation/v1")]
        [HttpPost]
        public async Task<CustomPronunciationResponseModel> GetPronunciation([FromBody] GetPronunciationRequestmodel request)
        {


            string strConnString = "Server=postgrescrypto.postgres.database.azure.com;Port=5432;User Id=cryptoadmin;Password=Admin$123;Database=postgres;Ssl Mode=Allow;";
            //Ssl Mode = Allow;
            CustomPronunciationResponseModel response = new CustomPronunciationResponseModel();

            NpgsqlConnection conn = new NpgsqlConnection(strConnString);

            DataSet actualData = new DataSet();

            try
            {
                if(conn.State!=ConnectionState.Open)
                {
                    conn.Open();
                }
                
                NpgsqlCommand comm = new NpgsqlCommand();
                comm.Connection = conn;
                comm.CommandType = CommandType.Text;
                //comm.CommandText = "select * from \"Crypto\".employee_full_details where email_id = "+"'anilkalwakuntla@wfhackathon2022.onmicrosoft.com'"+"";
                //comm.CommandText = "SELECT \"Crypto\".emplfulldetail('" + request.loggedinId + "')";
                //comm.CommandText = "SELECT * from \"Crypto\".get_employee_details('" + request.EmployeeId + "');";
                //comm.CommandText = "SELECT * from \"Crypto\".getcustompronunciationbyemplid('" + request.EmployeeId + "');";
                comm.CommandText = "SELECT * from \"Crypto\".getcustompronunciationbyemplid('" + request.EmployeeId + "');";
                

                NpgsqlDataAdapter nda = new NpgsqlDataAdapter(comm);
                nda.Fill(actualData);

                var buffers = (byte[])actualData.Tables[0].Rows[0]["pronunciation"];
                response.Custompronunciation = Encoding.UTF8.GetString(buffers);
                response.Success = true;


                //MemoryStream s1 = new MemoryStream(buffers);

                //System.Media.SoundPlayer myPlayer1 = new System.Media.SoundPlayer(s1);
                //myPlayer1.Stream.Position = 0;
                //myPlayer1.Stream = s1;
                //myPlayer1.Play();

                //System.IO.MemoryStream ms = new System.IO.MemoryStream(buffers);
                //SoundPlayer sp = new SoundPlayer(ms);
                //sp.Play();
                //System.Media.SoundPlayer myPlayer = new System.Media.SoundPlayer(soundLocation: @"C:\Users\Anil Kalwakuntla\OneDrive\Desktop\Wav_868kb.wav");
                //myPlayer.Play();


                //byte[] audioBuffer = (byte[])actualData.Tables[0].Rows[0]["pronunciation"];
                //using (MemoryStream ms = new MemoryStream(audioBuffer))
                //{

                //    SoundPlayer player = new System.Media.SoundPlayer(ms);
                //    player.Play();
                //}

                //using (MemoryStream s = new MemoryStream(buffers))
                //{

                //    if (s.CanSeek) s.Seek(0, System.IO.SeekOrigin.Begin);
                //    System.Media.SoundPlayer myPlayer = new System.Media.SoundPlayer(s);          

                //    //myPlayer.Stream.Position = 0;
                //    //myPlayer.Stream = null;    // Then we have to set stream to null 
                //    //myPlayer.Stream = s;  // And set it again, to force it to be loaded again... 
                //    myPlayer.Play();


                //}

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
            //try
            //{
            //    GetPronunciationResponseModel response = new GetPronunciationResponseModel();

            //    var speechConfig = SpeechConfig.FromSubscription(YourSubscriptionKey, YourServiceRegion);
            //    var speechSynthesizer = new SpeechSynthesizer(speechConfig);

            //         speechConfig.SpeechSynthesisVoiceName = "en-US-JennyNeural";
            //        //speechConfig.SpeechSynthesisVoiceName = request.Country;


            //        using (speechSynthesizer = new SpeechSynthesizer(speechConfig))
            //        {

            //            var speechSynthesisResult = await speechSynthesizer.SpeakTextAsync(request.FullName);

            //            // OutputSpeechSynthesisResult(speechSynthesisResult, requestModel.FullName);

            //        }

            //        //Custom Pronunciation





            //        /*

            //        fsfsf
            //        */




            //    //if(request!=null)
            //    //{
            //    //    if(request.IsCustomPronunciationAvailable && request.IsOverrideStandardPronunciation)
            //    //    {
            //    //        /* Retrieve Custom Pronunciation*/
            //    //    }
            //    //    else
            //    //    {
            //    //        /*Call Standard Pronunciation */

            //    //    }
            //    //}

            //    response.Success = true;
            //    return Ok(response);
            //}
            //catch (Exception)
            //{
            //    throw;
            //}

        }

        [Route("api/pronunciation/DeleteCustomPronunciation/v1")]
        [HttpPost]
        public async Task<ActionResult> DeleteCustomPronunciation([FromBody] DeleteCustomPronunciationRequestModel request)
        {
            try
            {
                return Ok(await repo.DeleteCustomPronunciation(request));
            }
            catch (Exception)
            {
                throw;
            }

        }

    }

}
