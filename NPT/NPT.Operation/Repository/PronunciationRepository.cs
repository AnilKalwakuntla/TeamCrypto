using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using NPT.Model.RequestModel;
using NPT.Model.ResponseModel;
using NPT.DataAccess.Interfaces;

namespace NPT.DataAccess.Repository
{
    public class PronunciationRepository: IPronunciationRepository
    {
        public async Task<UserPronunciationDetailsResponseModel> GetUserPronunciationDetails(UserPronunciationDetailsRequestModel request)
        {
            UserPronunciationDetailsResponseModel response = new UserPronunciationDetailsResponseModel();
            response.LoggedinId = "karthicknexus@wfhackathon2022.onmicrosoft.com";
            response.EmployeeId = "1918301";
            response.Firstname = "Karthick";
            response.Lastname = "R";
            response.Fullname = "Karthick R";
            response.Phone = "99-999999";
            response.EmailAddress = "karthicknexus@wfhackathon2022.onmicrosoft.com";
            response.Managername = "Soma Bhushan";
            response.IsAdmin = false;
            response.IsCustomPronunciationAvailable = false;
            return response;
        }
    }
}
