import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { NavigationScreens } from "@navigation/index";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "@shared/hook/font";
import { SplashScreen } from "expo-router";
import { TamaguiProvider } from "tamagui";

import { config } from "../../tamagui.config";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index"
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { errosFonts, loadedFonts } = useFonts();

  const colorScheme = useColorScheme();

  useEffect(() => {
    if (loadedFonts || errosFonts) {
      SplashScreen.hideAsync();
    }
  }, [loadedFonts, errosFonts]);

  if (!loadedFonts && !errosFonts) {
    return null;
  }

  return (
    <TamaguiProvider
      config={config}
      defaultTheme={colorScheme}
    >
      <ThemeProvider value={colorScheme === "light" ? DarkTheme : DefaultTheme}>
        <NavigationScreens />
      </ThemeProvider>
    </TamaguiProvider>
  );
}
