import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { StringifyOptions } from 'querystring';
import 'rxjs/add/operator/map';
import { AnonymousSubject } from 'rxjs/Subject';

@Injectable()
export class ProductService {

  private _albumUrl = '../assests/album.json';

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response) => {return response.json()});

  }

  get(_albumUrl: string) {
    return _albumUrl;
  }

  constructor(private _http: Http) { }


}
