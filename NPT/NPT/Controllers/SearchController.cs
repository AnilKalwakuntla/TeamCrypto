using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NPT.DataAccess.Repository;
using NPT.Model.RequestModel;
namespace NPT.Controllers
{

    public class SearchController : ControllerBase
    {
        SearchRepository repo = new SearchRepository();


        [Route("api/search/SearchPronunciationDetails/v1")]
        [HttpPost]
        public async Task<ActionResult> SearchPronunciationDetails([FromBody] SearchRequestModel request)
        {
            try
            {
                return Ok(await repo.SearchPronunciationDetails(request));
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
