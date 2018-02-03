import {environment} from '../src/environments/environment.local';
import * as request from 'request';

export class UtilE2E {

  constructor() {}

  removeUser(username) {
     request.del(environment.API.REMOVE_USER + '?username=' + username, (err, res) => {
      return err || res;
    });
  }
}
