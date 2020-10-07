import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { StringifyOptions } from 'querystring';
import 'rxjs/add/operator/map';
import { AnonymousSubject } from 'rxjs/Subject';

import { Album } from './album';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }

}
