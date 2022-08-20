module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
      [
        "module-resolver",
        {
          root: ["./src", "./"],
          extensions: [
            ".ios.js",
            ".android.js",
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".json",
          ],
          alias: {
            "@assets": "./assets",
            "@components": "./src/components",
            "@contexts": "./src/contexts",
            "@navigation": "./src/infrastructure/navigation",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@theme": "./src/infrastructure/theme",
            "@types": "./src/types",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
