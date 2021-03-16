import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url: string = 'https://ms-sapi-contact.herokuapp.com/send';

  constructor(private httpClient: HttpClient) { }

  sendMail(content) {
    return this.httpClient.post<any>(this.url, content);
  }
}
