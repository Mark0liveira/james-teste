import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, SkipSelf } from '@angular/core';
import { BaseService } from './base.service';

@Injectable()
export class EstablishmentService extends BaseService {

  serviceName = 'establishments';

  constructor(@SkipSelf() protected http: HttpClient) {
    super(http);
  }

  public get(querystring?: string): Observable<any> {
    let url = `${this.url}`;
    if (querystring && querystring.length > 0) {
        url = url + '?' + querystring;
    }

    return this.http.get<any>(url);
  }
}
