export class GlobalFunctions {
    public static IsNullorEmpty(input: string) {
        return input===undefined || input===null || input.match(/^ *$/) !==null;
    }

    public static processRecording(byte: any) {
   
        let binary = this.convertDataURIToBinary(byte);
        //console.log(binary);
        let blob = new Blob([binary], { type: 'audio/wav' });
        let blobUrl = URL.createObjectURL(blob);
        return  blobUrl;
      }
    
    
      public static convertDataURIToBinary(dataURI:any) {  
        var raw = window.atob(dataURI);
        var rawLength = raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawLength));
    
        for (let i = 0; i < rawLength; i++) {
          array[i] = raw.charCodeAt(i);
        }
        return array;
      }
    
}