var path = require('path')
var webpack = require('webpack')
var precss = require('precss')
var autoprefixer = require('autoprefixer')

module.exports = {
  entry: './src/index.cjsx',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'unordered-editor'
  },
  resolve: {
    extensions: ['', '.js', '.cjsx', '.coffee']
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css?modules&importLoaders=1&localIdentName=[path]-[name]-[local]!postcss'},
      {test: /\.cjsx$/, loaders: ['coffee', 'cjsx']},
      {test: /\.coffee$/, loaders: ['coffee']}
    ]
  },
  externals: {
    react: 'React',
    'unordered-editor-vim': 'UnorderedEditorVim',
    'unordered-editor-buffer': 'UnorderedEditorBuffer'
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    // new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"production"'}})
  ],
  postcss: [
    autoprefixer({
      browsers: ['> 4%', 'last 4 versions']
    }),
    precss,
  ]
}
