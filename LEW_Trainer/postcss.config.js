module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-short')({}),
    require('postcss-inherit'),
    require('css-mqpacker'),
    require('autoprefixer'),
    require('postcss-font-magician')({}),
    require('cssnano')
  ]
}
