const { Text, Password, Checkbox } = require('@keystonejs/fields');
const access = require('../access.control');

const User = {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: {
      type: Checkbox,
      defaultValue: false,
      access: {
        read: access.userIsAdminOrOwner,
        update: access.userIsAdmin,
      },
    },
    password: {
      type: Password,
    },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdmin,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
};

module.exports = User;
