const { Text, Relationship, Integer } = require('@keystonejs/fields');
const access = require('../access.control');

const Layout = {
  fields: {
    name: { type: Text, isRequired: true, isUnique: true },
    elements: { type: Relationship, ref: 'Element', many: true },
    order: { type: Integer }
  },
  access: {
    read: true,
    update: access.userIsAdmin,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
};

module.exports = Layout;
