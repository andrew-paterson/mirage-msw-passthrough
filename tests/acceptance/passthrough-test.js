import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { createServer, Model } from 'miragejs';
import MSWInterceptor from 'mirage-msw';

module('Acceptance | bulletin', function (hooks) {
  setupApplicationTest(hooks);

  test('Visit bulletins', async function (assert) {
    let finalConfig = {
      urlPrefix: 'http://localhost:4203',
      namespace: 'api',
      logging: true,
      models: {
        movie: Model,
      },

      interceptor: new MSWInterceptor(),
      routes() {
        this.namespace = 'api';

        this.get('movies', (schema, request) => {
          return schema.movies.all();
        });
        this.passthrough('/test');
      },
    };

    const server = await createServer(finalConfig);
    await server.start();
    server.create('movie', { name: 'Inception', year: 2010 });
    await visit('/movies');
  });
});
