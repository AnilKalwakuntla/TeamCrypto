export interface searchRequestModel
{
    searchtxt:string,
    lanId:string
};

export interface searchResponseModel
{
    loggedinId:string,
    employeeId:string,
    firstname:string,
    lastname:string,
    fullname:string,
    emailAddress:string,
    phone:string,
    managername:string,
    isAdmin:boolean,
    iscustomPronunciationAvailable:boolean,
    lastUpdatedDate:Date,
    isoverrideStandardPronunciation:boolean,
    
    //CustomPronunciation:BinaryType[]
};