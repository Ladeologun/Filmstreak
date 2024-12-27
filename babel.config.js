module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    env: {
        production: {
            plugins: ['react-native-paper/babel', 'transform-remove-console']
        },
    },
    plugins: [
        [
          "module-resolver",
          {
            root: ["./src/"],
            extensions: [
              ".ios.js",
              ".android.js",
              ".js",
              ".ts",
              ".tsx",
              ".json",
            ],
            alias: {
              "~components": "./src/components",
              "~apiclient": "./src/apiclient",
              "~drawables":"./src/assets/drawables",
              "~styles":"./src/styles",
              "~utils":"./src/utils",
              "~utils/*":"./src/utils/*",
              "~movies":"./src/features/movies",
              "~navigation":"./src/navigation",
              "~navigation/*":"./src/navigation/*"
            }
          }
      ],
    
    ]  
  };
}