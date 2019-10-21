import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /** サインイン状態 */
  public signedIn: boolean;
  /** ユーザー情報 */
  public user: any;

  constructor(private amplifyService: AmplifyService) {
    this.amplifyService = amplifyService;
  
    this.amplifyService.authStateChange$
      .subscribe(authState => {
      this.signedIn = authState.state === 'signedIn';
      if (!authState.user) {
        this.user = null;
      } else {
        this.user = authState.user;
      }
      });
  }

}
