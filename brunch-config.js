module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'js/vendor.js': /^(vendor)/,
        'js/app.js': /^app/
      },
      order: {
        before: [
          'vendor/js/jquery-3.2.1.min.js',
          'vendor/js/d3.v3.min.js',
          'vendor/js/d3-geo.v1.min.js',
          'vendor/js/d3.geo-projection.v2.min.js',
          'vendor/js/topojson.v0.min.js'
        ]
      }
    },
    stylesheets: {
      //joinTo: 'css/app.css',
      joinTo: {
        'css/app.css': /^app\/stylus\/app.styl/
      },
      order: {
        before: [
          'css/normalize.css'
        ]
      }
    }
  },

  plugins: {
    babel: {
      presets: ['es2015', 'es2016']
    },
    stylus: {
      includeCss: true
    },
    cleancss: {
      keepSpecialComments: 0,
      removeEmpty: true
    },
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions']),
        require('csswring')
      ]
    }
  }

};
