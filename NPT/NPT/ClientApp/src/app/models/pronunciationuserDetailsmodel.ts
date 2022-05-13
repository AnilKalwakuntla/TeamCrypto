export interface pronunciationUserDetailRequestModel
{
    loggedinId:string,
};

export interface pronunciationUserDetailResponseModel
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
    lastUpdatedDate:Date
};