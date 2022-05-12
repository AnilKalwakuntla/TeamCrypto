using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NPT.Controllers
{
   
    [ApiController]
    public class LoginController : ControllerBase
    {
    }

    [Route("api/login/authenticateuser/v1")]
    [HttpPost]
    public async Task<ActionResult> LoginUser()
    {
        //return OkResult("true");
        var result = true;
        return result;
    }
}
