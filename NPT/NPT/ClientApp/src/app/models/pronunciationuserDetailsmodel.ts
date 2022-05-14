export interface pronunciationUserDetailRequestModel {
    loggedinId: string,
};

export interface pronunciationUserDetailResponseModel {
    loggedinId: string,
    employeeId: string,
    firstname: string,
    lastname: string,
    fullname: string,
    emailAddress: string,
    phone: string,
    managername: string,
    isAdmin: boolean,
    iscustomPronunciationAvailable: boolean,
    lastUpdatedDate: Date
};

export interface saveCustomPronunciationRequestModel {
    loggedinId: string,
    employeeId: string,
    customPronunciation: string,
    overrideStandardPronunciation: boolean,
    comments: string,
    isupdate:boolean
}
export interface saveCustomPronunciationResponseModel {
    success: boolean,
    customPronunciation: string,
    overrideStandardPronunciation: boolean,
    comments: string
}