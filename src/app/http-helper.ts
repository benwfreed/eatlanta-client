import { Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export function getOptions(): RequestOptions {
  const options = new RequestOptions({withCredentials: true});
  return options;
}

export function extractData(res: Response) {
  console.log(res);
  const body = res.json();
  console.log(body);
  // isUsernameAvailable returns a boolean,
  // so we have to take care not to return
  // an empty {} instead of 'false'
  if (typeof body === 'boolean') {
    return body;
  }
  return body || {};
}

export function handleError(error: Response) {
  console.log(error);
  let message: string;
  const body = error.json();
  message = body.message ||
    (`${error.status || 'unknown status'}
              - ${error.statusText || 'unknown message'}`);
  console.log(message);
  const result = {error: true, message: message};
  return Observable.of(result);
}
