const { Text, CalendarDay, File, Integer, Relationship } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const fileAdapter = require('./FileAdapter');
const access = require('../access.control');

const Element = {
  fields: {
    name: { type: Text, isRequired: true, isUnique: true },
    content: { type: Relationship, ref: 'Element', many: true },
    key: { type: Text },
    value: { type: Wysiwyg },
    url: { type: Text },
    from: { type: CalendarDay },
    to: { type: CalendarDay },
    image: {
      type: File,
      adapter: fileAdapter,
      hooks: {
        beforeChange: async ({ existingItem }) => {
          if (existingItem && existingItem.file) {
            await fileAdapter.delete(existingItem.file);
          }
        },
      },
    },
    order: { type: Integer }
  },
  hooks: {
    afterDelete: async ({ existingItem }) => {
      if (existingItem.file) {
        await fileAdapter.delete(existingItem.file);
      }
    },
  },
  access: {
    read: true,
    update: access.userIsAdmin,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
};

module.exports = Element;
