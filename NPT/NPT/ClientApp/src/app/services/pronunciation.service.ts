import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { standardpronunciationRequestModel } from 'src/app/models/standardpronunciationmodel';
import { pronunciationUserDetailRequestModel,pronunciationUserDetailResponseModel } from 'src/app/models/pronunciationuserDetailsmodel'

@Injectable()
export class Pronunciationservice {

    url: string = '';
    constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.url = baseUrl;
    }

    GetStandardPronunciation(param: standardpronunciationRequestModel) {
        var httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        let apiurl = this.url + 'api/pronunciation/GetStandardPronunciation/v1'
        console.log(apiurl);
        return this.httpClient.post<any>(apiurl, param, httpOptions).subscribe({
            next: data => {
                console.log(data);
            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }

    GetProunciationUserDetails(param:pronunciationUserDetailRequestModel):Observable<pronunciationUserDetailResponseModel>
    {
        var httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        let apiurl = this.url + 'api/pronunciation/GetUserPronunciationDetails/v1'
        console.log(apiurl);
        return this.httpClient.post<pronunciationUserDetailResponseModel>(apiurl, param, httpOptions);
    }
}
