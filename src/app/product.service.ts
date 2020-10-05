import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { StringifyOptions } from 'querystring';
import {map } from 'rxjs/add/operator/'

@Injectable()
export class ProductService {

  private _albumUrl = '../assests/album.json';

  getAlbum(id: number) {
    let result: any;
    return this._http.get(id)
    .map((response: Response) => result = <any>response.json());
  }

  get(_albumUrl: string) {
    return this._albumUrl;
  }

  constructor(private _http: Http) { }


}
