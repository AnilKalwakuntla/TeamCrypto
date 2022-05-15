using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using NPT.Model.RequestModel;
using NPT.Model.ResponseModel;

namespace NPT.DataAccess.Interfaces
{
    public interface IPronunciationRepository
    {
        Task<UserPronunciationDetailsResponseModel> GetUserPronunciationDetails(UserPronunciationDetailsRequestModel request);

        Task<SaveCustomPronunciationResponseModel> SaveCustomPronunciation(SaveCustomPronunciationRequestModel request);

        Task<DeleteCustomPronunciationResponseModel> DeleteCustomPronunciation(DeleteCustomPronunciationRequestModel request);
    }
}
