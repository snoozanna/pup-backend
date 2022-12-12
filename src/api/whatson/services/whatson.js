'use strict';

/**
 * whatson service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::whatson.whatson');
