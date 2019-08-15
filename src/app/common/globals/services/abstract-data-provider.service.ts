import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbstractDataProviderService {
  private apiUrl: string = null;

  constructor(private constant: ConstantsService, private http: HttpClient) { }

  public get(params?: any, headers?: any): Observable<any> {
    return this.http.get(this.apiUrl, { params, headers, });
  }

  /**
   * Sets provider url with given url
   * @param url Public api url
   */

  public setApiUrl(url: string): void {
    this.apiUrl = this.constant.apiUrl + url;
    console.log(`api with path ${this.apiUrl} is connected`)
  }
}
