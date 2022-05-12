using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NPT.Model.RequestModel;
using NPT.Model.ResponseModel;

namespace NPT.Controllers
{

    [ApiController]
    public class PronunicationController : ControllerBase
    {


        [Route("api/pronunciation/GetStandardPronunciation/v1")]
        [HttpPost]
        public CustomPronunciationResponseModel GetStandardPronunciation([FromBody] string name)
        {
            CustomPronunciationResponseModel response = new CustomPronunciationResponseModel();
            response.EmpId = "test";
            return response;
        }
    }

}
