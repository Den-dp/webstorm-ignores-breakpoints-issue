import { ConfigOptions } from "webpack-cli";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

console.log("✅ webpack.config.ts executed");

const config: ConfigOptions = {
  mode: "production",
  stats: "minimal",
  output: { clean: true },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};

export default config;
