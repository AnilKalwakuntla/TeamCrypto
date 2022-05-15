import { Component, OnInit } from '@angular/core';
import { Searchservice } from 'src/app/services/search.servics';
import { Pronunciationservice } from 'src/app/services/pronunciation.service';
import { searchRequestModel, searchResponseModel } from 'src/app/models/searchmodel'
import { GlobalFunctions } from '../Global';
import { getpronunciationRequestModel, getpronunciationResponseModel } from 'src/app/models/getpronunciationmodel';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public issearchInfoHidden: boolean = false;
  public showSearchresult: boolean = false;
  constructor(private searchservice: Searchservice, private pronunciationservice: Pronunciationservice, private domSanitizer: DomSanitizer) { }
  searchrequest: searchRequestModel;
  searchresponse: searchResponseModel;
  public audioSource: any;
  getpronunciationrequest: getpronunciationRequestModel;
  getpronunciationresponse: getpronunciationResponseModel;

  public loggedinUserID: string;

  ngOnInit(): void {
    this.initvariables();
    this.loggedinUserID = sessionStorage.getItem('loggedUser');
  }

  search() {
    if (!GlobalFunctions.IsNullorEmpty(this.searchrequest.searchtxt)) {
      this.searchservice.SearchPronunciation(this.searchrequest).subscribe(res => {
        console.log(res);
        if (res != null && res != undefined) {
          this.searchresponse = res;
          this.showSearchresult = true;
        }
      });
    } else {
      alert('Please enter a Valid text to search !')
    }
  }
  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  listenPronunciation() {

    this.getpronunciationrequest = {
      loggedinuserId: this.loggedinUserID,
      employeeid: this.searchresponse.employeeId,
      iscustomPronunciationAvailable: this.searchresponse.iscustomPronunciationAvailable,
      isoverrideStandardPronunciation: this.searchresponse.isoverrideStandardPronunciation,
      fullName: this.searchresponse.fullname,
      country: '',
      voicespeed: ''
    }
    this.pronunciationservice.getPronunciation(this.getpronunciationrequest).subscribe(res => {

      if (res != null && res != undefined) {
        console.log(res);
        this.getpronunciationresponse = res;
        this.processRecording(this.getpronunciationresponse.custompronunciation);
      }
    });
    //this.processRecording();

  }
  
  processRecording(byte: any) {
   
    let binary = this.convertDataURIToBinary(byte);
    console.log(binary);
    let blob = new Blob([binary], { type: 'audio/wav' });
    let blobUrl = URL.createObjectURL(blob);
    this.audioSource = blobUrl;
    console.log(this.audioSource);
  }

  //Convert a base64 string into a binary Uint8 Array
  BASE64_MARKER = ';base64,';

  convertDataURIToBinary(dataURI:any) {
    // var base64Index = dataURI.indexOf(this.BASE64_MARKER) + this.BASE64_MARKER.length;
    // var base64 = dataURI.substring(base64Index);
    var raw = window.atob(dataURI);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }

  initvariables() {

    this.searchrequest =
    {
      searchtxt: '',
      lanId: ''
    }

    this.searchresponse =
    {
      loggedinId: '',
      employeeId: '',
      firstname: '',
      lastname: '',
      fullname: '',
      emailAddress: '',
      phone: '',
      managername: '',
      isAdmin: false,
      iscustomPronunciationAvailable: false,
      lastUpdatedDate: null,
      isoverrideStandardPronunciation: false
    }

    this.getpronunciationresponse = {
      success: false,
      custompronunciation: null
    }
  }

  
}
