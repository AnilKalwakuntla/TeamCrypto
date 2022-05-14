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
            string strConnString = "Server=postgrescrypto.postgres.database.azure.com;Port=5432;User Id=cryptoadmin;Password=Admin$123;Database=postgres";
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

    }

}
