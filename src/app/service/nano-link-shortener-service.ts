import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ShortenUrlResponse {
  shortUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class NanoLinkShortenerService {
  private httpClient = inject(HttpClient);
  private apiUrl = "http://localhost:8080/shorten"

  shortenUrl(url: string): Observable<ShortenUrlResponse>{
    console.log(url);
    const body = { originalURL: url }; 
    return this.httpClient.post<ShortenUrlResponse>( this.apiUrl , body);
  }
}
