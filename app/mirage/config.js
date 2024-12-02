import { createServer, Model } from 'miragejs';
import MSWInterceptor from 'mirage-msw';

export default async function (config) {
  // let { environment, trackRequests, inflector } = config;

  let finalConfig = {
    // environment,
    // trackRequests,
    // inflector,
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
    },
  };

  return await createServer(finalConfig);
}
