using System;
using System.Collections.Generic;
using System.Text;

namespace NPT.Model.ResponseModel
{
    public class SearchResponseModel
    {
        public string LoggedinId { get; set; }
        public string EmployeeId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Fullname { get; set; }
        public string EmailAddress { get; set; }
        public string Phone { get; set; }
        public string Managername { get; set; }
        public bool IsCustomPronunciationAvailable { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public bool IsAdmin { get; set; }
        //public byte[] CustomPronunciation { get; set; }
    }
}
