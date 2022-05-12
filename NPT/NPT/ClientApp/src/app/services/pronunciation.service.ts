import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class Pronunciationservice {
    
    url:string='';
    constructor(private httpClient: HttpClient,@Inject('BASE_URL') baseUrl: string) {
        this.url=baseUrl;
    }

    GetStandardPronunciation(name:string) {
        
         this.url= this.url + 'api/pronunciation/GetStandardPronunciation/v1'
         console.log(this.url);
         console.log(name);
        return this.httpClient.post(this.url,name);
    }
}