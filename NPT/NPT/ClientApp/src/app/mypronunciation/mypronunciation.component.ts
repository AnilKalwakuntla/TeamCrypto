import { Component, OnInit } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { Pronunciationservice } from 'src/app/services/pronunciation.service';
import { standardpronunciationRequestModel } from 'src/app/models/standardpronunciationmodel';
import { pronunciationUserDetailRequestModel, pronunciationUserDetailResponseModel, saveCustomPronunciationRequestModel, saveCustomPronunciationResponseModel } from 'src/app/models/pronunciationuserDetailsmodel'
declare var jQuery: any;

@Component({
  selector: 'app-mypronunciation',
  templateUrl: './mypronunciation.component.html',
  styleUrls: ['./mypronunciation.component.css']
})

export class MypronunciationComponent implements OnInit {
  private record: any;
  public recording: boolean = false;
  public url: any;
  public error: any;
  public ismyInfoHidden: boolean = false;
  public ispronunciationHidden: boolean = false;
  public isstandardpronunciationHidden: boolean = false;
  public loggedinUserID: string;

  standardpronunciation: any;
  standardpronunciationrequest: standardpronunciationRequestModel;
  pronunciationUserDetailrequest: pronunciationUserDetailRequestModel;
  pronunciationUserDetailresponse: pronunciationUserDetailResponseModel;

  saveCustomPronunciationrequest: saveCustomPronunciationRequestModel;
  saveCustomPronunciationresponse: saveCustomPronunciationResponseModel;

  selectedcountry: string = "";
  selectedvoicespeed: string = "Slow";
  txtcomments: string = '';
  OverrideStandardPronunciation: boolean = true;

  constructor(private domSanitizer: DomSanitizer, private pronunciationservice: Pronunciationservice) { }

  ngOnInit() {

    this.loggedinUserID = sessionStorage.getItem('loggedUser');
    //this.loggedinUserID = "karthicknexus@wfhackathon2022.onmicrosoft.com";
    this.initvariables();
    this.getProunciationUserDetails();
  }
  initvariables() {
    this.pronunciationUserDetailresponse =
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
      lastUpdatedDate: null
    }
    this.saveCustomPronunciationrequest =
    {
      loggedinId: '',
      employeeId: '',
      overrideStandardPronunciation: null,
      customPronunciationVoiceAsBase64: '',
      isupdate: null,
      comments: ''

    }
    this.saveCustomPronunciationresponse =
    {
      success: null,
      customPronunciation: '',
      overrideStandardPronunciation: null,
      comments: '',

    }
  }
  public onOverrideStandardPronunciationoptChanged(val: boolean) {
    this.OverrideStandardPronunciation = val;
  }

  getProunciationUserDetails() {

    this.pronunciationUserDetailrequest = {
      loggedinId: this.loggedinUserID
    }
    this.pronunciationservice.GetProunciationUserDetails(this.pronunciationUserDetailrequest).subscribe(res => {
      console.log(res);
      this.pronunciationUserDetailresponse = res;
    });
  }
  getStandardPronunciation() {
    this.standardpronunciationrequest =
    {
      employeeID: this.pronunciationUserDetailresponse.employeeId,
      fullName: this.pronunciationUserDetailresponse.fullname,
      country: this.selectedcountry,
      voicespeed: this.selectedvoicespeed
    }
    console.log(this.standardpronunciationrequest);
    this.standardpronunciation = this.pronunciationservice.GetStandardPronunciation(this.standardpronunciationrequest);
  }

  saveProunciationUserDetails() {
    /* AssignValues */

    this.saveCustomPronunciationrequest.loggedinId = this.loggedinUserID;
    this.saveCustomPronunciationrequest.employeeId = this.pronunciationUserDetailresponse.employeeId;
    this.saveCustomPronunciationrequest.overrideStandardPronunciation = this.OverrideStandardPronunciation;
    this.saveCustomPronunciationrequest.isupdate = false;
    this.saveCustomPronunciationrequest.comments = this.txtcomments;

    console.log(this.saveCustomPronunciationrequest);
    this.pronunciationservice.SaveProunciationUserDetails(this.saveCustomPronunciationrequest).subscribe(res => {
      console.log(res);
      this.saveCustomPronunciationresponse = res;
      jQuery("#exampleModalCenter").modal.hide();
    });
  }


  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  initiateRecording() {
    this.url = '';
    this.recording = true;
    let mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
  /**
  * Will be called automatically.
  */
  successCallback(stream: any) {
    var options = {
      mimeType: "audio/wav",
      numberOfAudioChannels: 1
    };
    //Start Actuall Recording
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }
  /**
  * Stop recording.
  */
  stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
  }
  /**
  * processRecording Do what ever you want with blob
  * @param  {any} blob Blog
  */
  processRecording(blob: any) {
    this.url = URL.createObjectURL(blob);
    this.convertBlobtobyte(blob);
  }

  convertBlobtobyte(blob) {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      this.saveCustomPronunciationrequest.customPronunciationVoiceAsBase64 = reader.result.toString();
    };
  }
  /**
  * Process Error.
  */
  errorCallback(error: any) {
    this.error = 'Can not play audio in your browser';
  }
}
