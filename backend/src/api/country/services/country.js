"use strict";

/**
 * country service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::country.country");
