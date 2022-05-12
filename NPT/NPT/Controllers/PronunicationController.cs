using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using NPT.Model.RequestModel;

namespace NPT.Controllers
{
    
    [ApiController]
    public class PronunicationController : ControllerBase
    {
    }

    

    [Route("api/pronunciation/authenticateuser/v1")]
    [HttpPost]
    public async Task<ActionResult> GetStandardPronunication([FromBody] CustomPronunciationRequestModel requestModel)
    {
       // return OkResult();
    }
}
