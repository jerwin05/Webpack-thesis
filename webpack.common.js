module.exports = {
  entry: {
    index: "./src/js/index.js",
    'ol': "./src/openlayers/v6.4.3-dist/ol.js",
    'admin-profile': "./src/js/admin-profile.js",
    'admin-signup': "./src/js/admin-signup.js",
    'admin-login': "./src/js/admin-login.js",
    'index-style': "./src/js/index-style.js",
    'profile': "./src/js/profile.js",
    'map': "./src/js/map.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader:"html-loader",
          // options:{
          //   minimize:true,
          //   // name:'[name].[ext]'
          // }
        }]
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[fullhash].[ext]",
            outputPath: "images/",
            publicPath: "images/"
          }
        }
      }
    ]
  }
};