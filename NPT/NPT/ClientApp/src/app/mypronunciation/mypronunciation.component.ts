import { Component, OnInit } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { Pronunciationservice } from 'src/app/services/pronunciation.service';
import { standardpronunciationRequestModel } from 'src/app/models/standardpronunciationmodel';
import { pronunciationUserDetailRequestModel, pronunciationUserDetailResponseModel } from 'src/app/models/pronunciationuserDetailsmodel'

@Component({
  selector: 'app-mypronunciation',
  templateUrl: './mypronunciation.component.html',
  styleUrls: ['./mypronunciation.component.css']
})
export class MypronunciationComponent implements OnInit {
  private record: any;
  public recording = false;
  public url: any;
  public error: any;

  public ismyInfoHidden: boolean = false;
  public ispronunciationHidden: boolean = false;

  standardpronunciation: any;
  _standardpronunciationRequestModel: standardpronunciationRequestModel;
  pronunciationUserDetailrequest: pronunciationUserDetailRequestModel;
  pronunciationUserDetailresponse: pronunciationUserDetailResponseModel;


  constructor(private domSanitizer: DomSanitizer, private pronunciationservice: Pronunciationservice) { }

  ngOnInit() {

    this._standardpronunciationRequestModel =
    {
      employeeID: '1123456',
      fullName: 'Anil Kumar Kalwakuntla'
    }
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
  }

  getProunciationUserDetails() {
    this.pronunciationUserDetailrequest = {
      loggedinId: 'karthicknexus@wfhackathon2022.onmicrosoft.com'
    }
    this.pronunciationservice.GetProunciationUserDetails(this.pronunciationUserDetailrequest).subscribe(res=> {
      this.pronunciationUserDetailresponse = res;
    });
  }
  getStandardPronunciation() {
    this.standardpronunciation = this.pronunciationservice.GetStandardPronunciation(this._standardpronunciationRequestModel);
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
  }
  /**
  * Process Error.
  */
  errorCallback(error: any) {
    this.error = 'Can not play audio in your browser';
  }
}
