const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const { NODE_ENV } = process.env;

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
  },
  mode: NODE_ENV || 'development',
  entry: {
    index: path.resolve(__dirname, 'src/index.tsx'),
    activation: path.resolve(__dirname, 'src/components/Activation/Activation/index.ts'),
    // partnership: path.resolve(__dirname, 'src/components/Partnership/index.ts'),
    // 'program-video': path.resolve(__dirname, 'src/components/ProgramVideo/index.ts'),
    // 'partner-have': path.resolve(__dirname, 'src/components/PartnerHave/index.ts'),
    // questions: path.resolve(__dirname, 'src/components/Questions/index.ts'),
    // footer: path.resolve(__dirname, 'src/components/Footer/index.ts'),
    // earn: path.resolve(__dirname, 'src/components/EarnAndAdvantages/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
            },
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: './src/styles/resources/index.scss',
            },
          },
        ],
      },
      // {
      //   test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.webp$/],
      //   type: 'asset/resource',
      // },
      {

        test: /\.(jpe?g|png|webp)$/i,
        use: [
          {
            loader: 'responsive-loader',
            options: {
              adapter: require('responsive-loader/sharp'),
              sizes: [320, 640, 960, 1200, 1800, 2400],
              placeholder: true,
              placeholderSize: 20
            },
          },
        ],
        type: 'javascript/auto',
      }
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.svg')
    }),
  ],
  devServer: {
    port: 3000,
    open: false,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
};
