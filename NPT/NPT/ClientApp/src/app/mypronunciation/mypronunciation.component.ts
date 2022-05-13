import { Component, OnInit } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { Pronunciationservice } from 'src/app/services/pronunciation.service';
import { standardpronunciationRequestModel } from 'src/app/models/standardpronunciationmodel';

@Component({
  selector: 'app-mypronunciation',
  templateUrl: './mypronunciation.component.html',
  styleUrls: ['./mypronunciation.component.css']
})
export class MypronunciationComponent implements OnInit {
  private record: any;
  //Will use this flag for detect recording
  public recording = false;
  //Url of Blob
  public url: any;
  public error: any;
  standardpronunciation: any;
  _standardpronunciationRequestModel: standardpronunciationRequestModel;

  constructor(private domSanitizer: DomSanitizer, private pronunciationservice: Pronunciationservice) { }

  ngOnInit() {

    this._standardpronunciationRequestModel =
    {
      employeeID: '1123456',
      fullName: 'Karthick'
    }
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
