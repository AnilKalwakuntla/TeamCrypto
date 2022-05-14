using System;
using System.Collections.Generic;
using System.Text;

namespace NPT.Model.RequestModel
{
    public class SaveCustomPronunciationRequestModel
    {
        public string LoggedinId { get; set; }
        public string EmployeeId { get; set; }
        public byte[] CustomPronunciation { get; set; }
        public bool OverrideStandardPronunciation { get; set; }

        public bool Isupdate { get; set; }
        public string comments { get; set; }
    }
}
