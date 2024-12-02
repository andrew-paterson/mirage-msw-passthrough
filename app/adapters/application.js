import { inject as service } from '@ember/service';
import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class Application extends JSONAPIAdapter {
  get host() {
    return 'http://localhost:4203';
  }

  get namespace() {
    return 'api';
  }
}
