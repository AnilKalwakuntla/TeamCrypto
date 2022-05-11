export interface loginrequestmodel
{
    username:string,
    password:string
};

export interface loginresponsemodel
{
    empld:string;
    firstname:string;
    lastname:string;
    fullname:string;
    emailaddress:string;
    manager:string;
    isAdmin:boolean;
    isCustompronunciationavailable:boolean;
}