import { PluginCreator } from "postcss";

console.log("✅ postcss-all-purple.ts");

const plugin: PluginCreator<{}> = () => {
  return {
    postcssPlugin: "postcss-all-purple",
    Declaration(decl) {
      decl.value = "purple";
    },
  };
};

plugin.postcss = true;

export default plugin;
