import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
export default class MoviesRoute extends Route {
  @service
  store;

  model() {
    // return this.store.findAll('movie');
    return fetch('http://localhost:4203/api/movies');
  }
}
