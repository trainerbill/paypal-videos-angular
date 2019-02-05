import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, takeWhile, tap, concatMap, first, mergeMap, filter, take } from 'rxjs/operators';
import { Observable, Subject, of, from } from 'rxjs';

export interface IAccessToken {
  scope: string;
  nonce: string;
  access_token: string;
  token_type: string;
  app_id: string;
  expires_in: number;
  expiration: number;
}

@Injectable()
export class PaypalServerService implements OnInit {

  private endpoint = 'https://api.sandbox.paypal.com';
  // Before someone yells at me, this is SANDBOX CREDENTIALS and this will NEVER EVER be production.
  public client = 'ARkR7soWd2kUxFCNPHOmyb3IQhOwiL-wYhRmsRRD1SdslE0u-lCEps4LdN_KocpyEPgaWJXcsFuwd99M';
  private secret = 'ECSQrtNCk09UyKoHfSWuogfaQRmjbgVy9Mg7nc6JOI48z_dMfNonz-3Z3KFCLeX5qhFLGJ9e--DY59gV';
  private _accessToken: IAccessToken;
  public accessToken: Subject<IAccessToken>;

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.getAccessToken().subscribe();
  }

  getAccessToken() {
    /*
    if (!this.validateToken()) {
      this.http.post<IAccessToken>(`${this.endpoint}/v1/oauth2/token`, 'grant_type=client_credentials', {
        headers: new HttpHeaders({
          'Authorization': 'Basic ' + window.btoa(this.client + ':' + this.secret),
          'Accept': 'application/json',
          'Accept-Language': 'en_US',
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      })
      .subscribe( res => {
        this._accessToken = { ...res, expiration: Date.now() + res.expiration };
      });
    }
    return this._accessToken.access_token;
    */
    return from([
        of(this._accessToken),
        this.http.post<IAccessToken>(`${this.endpoint}/v1/oauth2/token`, 'grant_type=client_credentials', {
          headers: new HttpHeaders({
            'Authorization': 'Basic ' + window.btoa(this.client + ':' + this.secret),
            'Accept': 'application/json',
            'Accept-Language': 'en_US',
            'Content-Type': 'application/x-www-form-urlencoded'
          })
        })
        .pipe(
          tap( res => this.resToToken(res)),
        )
      ])
      .pipe(
        concatMap(res => res),
        filter( token => this.validateToken(token)),
        take(1)
      );

  }

  resToToken(res) {
    this._accessToken = { ...res, expiration: Date.now() + res.expiration };
    return this._accessToken;
  }

  getOrder(id: string) {
    return this.getAccessToken()
      .pipe(
        concatMap( token => {
          return this.http.get(`${this.endpoint}/v2/checkout/orders/${id}`, {
            headers: new HttpHeaders({
              'Authorization': `Bearer ${ token.access_token }`,
              'Content-Type': 'application/json',
            })
          });
        })
      );
  }

  validateToken(token: IAccessToken | any) {
    if (!token || Date.now() > token.expiration) {
      return false;
    }
    return true;
  }

  authorizeOrder(id: string) {
    return this.getAccessToken()
      .pipe(
        concatMap( token => {
          return this.http.post(`${this.endpoint}/v2/checkout/orders/${id}/authorize`, {}, {
            headers: new HttpHeaders({
              'Authorization': `Bearer ${ token.access_token }`,
              'Content-Type': 'application/json',
            })
          });
        })
      );
  }
}
