import { environment } from '../../../environments/environment';
import { Injectable, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export abstract class BaseService {

  protected serviceName: string;

  constructor(@SkipSelf() protected http: HttpClient) {
  }

  protected get url(): string {
    return environment.apiEndpoint + this.serviceName;
  }

  public get(querystring?: string): Observable<any> {
    let url = `${this.url}`;
    if (querystring && querystring.length > 0) {
        url = url + '?' + querystring;
    }

    return this.http.get<any>(url);
  }
}
