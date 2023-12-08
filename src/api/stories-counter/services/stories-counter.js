'use strict';

/**
 * stories-counter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stories-counter.stories-counter');
