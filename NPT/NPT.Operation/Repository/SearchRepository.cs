using System;
using System.Collections.Generic;
using System.Text;
using NPT.DataAccess.Interfaces;
using System.Threading.Tasks;
using NPT.Model.RequestModel;
using NPT.Model.ResponseModel;


namespace NPT.DataAccess.Repository
{
    public class SearchRepository : ISearchRepository
    {
       public async Task<SearchResponseModel> SearchPronunciationDetails(SearchRequestModel request)
        {
            SearchResponseModel response = new SearchResponseModel();
            response.LoggedinId = "karthicknexus@wfhackathon2022.onmicrosoft.com";
            response.EmployeeId = "1918301";
            response.Firstname = "Karthick";
            response.Lastname = "R";
            response.Fullname = "Karthick R";
            response.Phone = "99-999999";
            response.EmailAddress = "karthicknexus@wfhackathon2022.onmicrosoft.com";
            response.Managername = "Soma Bhushan";
            response.IsCustomPronunciationAvailable = false;
            return response;
        }
    }
}
