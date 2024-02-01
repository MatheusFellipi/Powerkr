process.env.TAMAGUI_TARGET = "native";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "transform-inline-environment-variables",
        {
          include: ["TAMAGUI_TARGET", "EXPO_ROUTER_APP_ROOT"]
        }
      ],
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./assets",
            "@services": "./src/services",
            "@navigation": "./src/navigation",
            "@components": "./src/components",
            "@utils": "./src/utils",
            "@constant": "./src/constant",
            "@context": "./src/context",
            "@hook": "./src/hook",
            "@shared": "./src/shared",
            "@custom-types": "./src/types"
          }
        }
      ],
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true
        }
      ],
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel")
    ]
  };
};
