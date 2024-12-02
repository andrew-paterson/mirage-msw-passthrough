import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';

import setupMirage from './setup-mirage';
import makeServer from 'ember-5-11-0-app/mirage/config';

import { createServer, Model } from 'miragejs';
import MSWInterceptor from 'mirage-msw';
module('Acceptance | bulletin', function (hooks) {
  setupApplicationTest(hooks);
  // setupMirage(hooks, { makeServer });

  test('Visit bulletins', async function (assert) {
    // const server = await createServer({
    //   models: {
    //     movie: Model,
    //   },
    //   interceptor: new MSWInterceptor(),
    //   routes() {
    //     this.namespace = 'api';

    //     this.get('/movies', () => {
    //       return {
    //         movies: [
    //           { id: 1, name: 'Inception', year: 2010 },
    //           { id: 2, name: 'Interstellar', year: 2014 },
    //           { id: 3, name: 'Dunkirk', year: 2017 },
    //         ],
    //       };
    //     });
    //   },
    // });
    const server = await makeServer();
    await server.start();
    console.log(server);
    server.create('movie', { name: 'Inception', year: 2010 });
    console.log('visit movies');
    await visit('/movies');
  });
});
