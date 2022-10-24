const { Text, Integer, Relationship } = require('@keystonejs/fields');
const access = require('../access.control');

const Page = {
  fields: {
    name: { type: Text, isRequired: true, isUnique: true },
    layouts: { type: Relationship, ref: 'Layout', many: true },
    url: { type: Text },
    childrenPage: {
      type: Relationship,
      ref: 'Page',
      many: true,
    },
  },
  access: {
    read: true,
    update: access.userIsAdmin,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
  },
};

module.exports = Page;
