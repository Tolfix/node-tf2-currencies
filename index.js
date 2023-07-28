'use strict';

const currencies = require('./lib/currencies');
const toScrap = require('./lib/toScrap');
const toRefined = require('./lib/toRefined');
const toCurrencies = require('./lib/toCurrencies');

currencies.toScrap = toScrap;
currencies.toRefined = toRefined;
currencies.toCurrencies = toCurrencies;

module.exports = currencies;
