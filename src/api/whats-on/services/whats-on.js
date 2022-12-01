'use strict';

/**
 * whats-on service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::whats-on.whats-on');
