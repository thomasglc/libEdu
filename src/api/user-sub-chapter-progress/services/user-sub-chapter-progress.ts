/**
 * user-sub-chapter-progress service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::user-sub-chapter-progress.user-sub-chapter-progress', ({ strapi }) => ({

  async find(...args) {
    const query = args[0];

    query.filters = {
      ...query.filters,
      documentId: 'k18uo8kdc0ayqu1kx7vur6x5',
    };
    const { results, pagination } = await super.find(...args);

    // some custom logic
    results.forEach(result => {
      result.counter = 1;
      result.args = args;
      result.query = query;
    });

    return { results, pagination };
  },
}));
