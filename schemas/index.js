const UserSchema = require('./User');
const ElementSchema = require('./Element');
const LayoutSchema = require('./Layout');
const PageSchema = require('./Page');

const listSchema = [
  { name: 'User', schema: UserSchema },
  { name: 'Element', schema: ElementSchema },
  { name: 'Layout', schema: LayoutSchema },
  { name: 'Page', schema: PageSchema },
];

module.exports = listSchema;
