module.exports = {
  stories: ['../src/**/*.stories.mdx'],
  addons: ['@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    "./.storybook/design-addon/register.js", 
    '@storybook/addon-docs'],
};