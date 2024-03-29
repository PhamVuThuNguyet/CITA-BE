const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { StaticApp } = require("@keystonejs/app-static");
const { DB_CONNECTION_ON_CLOUD, ENVIROMENT } = require('./config');
const express = require('express');
const listSchema = require('./schemas');
const initialiseData = require('./initial-data');

const PROJECT_NAME = 'CMS';

const adapterConfig = {
  mongoUri: DB_CONNECTION_ON_CLOUD,
};

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
  cookieSecret: process.env.COOKIE_SECRET,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    sameSite: 'strict',
  },
  static: ['public'],
});

listSchema.map(({ name, schema }) => keystone.createList(name, schema));

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
    }),
    new StaticApp({ path: '/public', src: 'public' }),
  ],
};
