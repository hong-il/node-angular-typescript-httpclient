import { Injectable } from '@angular/core';
import {
  HttpClient, HttpEvent, HttpEventType, HttpProgressEvent,
  HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';

import { of } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';

@Injectable()
export class UploaderService {
  constructor(
    private http: HttpClient,
    private messenger: MessageService) {}

  upload(file: File) {
    if (!file) { return; }

    const req = new HttpRequest('POST', '/upload/file', file, {
      reportProgress: true
    });

    return this.http.request(req);
  }
}