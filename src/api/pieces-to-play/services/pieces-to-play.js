'use strict';

/**
 * pieces-to-play service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pieces-to-play.pieces-to-play');
