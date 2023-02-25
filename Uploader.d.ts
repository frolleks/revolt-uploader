export = Uploader;
declare class Uploader {
    constructor(client: any, forceReady?: boolean);
    client: any;
    ready: boolean;
    url: any;
    uploadFile(fileName: any, tag?: string): any;
    upload(file: any, fileName: any, tag?: string): any;
}
