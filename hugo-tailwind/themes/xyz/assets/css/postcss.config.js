const themeDir = __dirname + '/../../';

/* module.exports = {
  plugins: {
    tailwindcss: {themeDir + 'assets/css/tailwind.config.js'},
    autoprefixer: {},
  },
} */

module.exports = {    
    plugins: [   
        require('postcss-import')({ path: [themeDir] }), 
        require('tailwindcss')(themeDir + 'assets/css/tailwind.config.js'),
        require('autoprefixer')({ path: [themeDir] }),
    ]
}