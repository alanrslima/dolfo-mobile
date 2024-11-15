import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { darkTheme, lightTheme } from "@/styles";
import { LogBox, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeProps } from "@/types";
import { PortalProvider } from "@gorhom/portal";
import { PetMemoryService } from "@/services/pets/pet-memory-service";
import { DependencyProvider } from "@/contexts/dependency-context";
import { PetsProvider } from "@/contexts/pets-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

LogBox.ignoreAllLogs();
console.log("LAYOUTT");
const petMemoryService = new PetMemoryService();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const windowDimensions = useWindowDimensions();
  const safeAreaInsets = useSafeAreaInsets();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const hydrateTheme = (theme: ThemeProps): ThemeProps => {
    return {
      ...theme,
      deviceDimensions: { ...windowDimensions, ...safeAreaInsets },
    };
  };

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StyledThemeProvider
        theme={
          colorScheme === "dark"
            ? hydrateTheme(darkTheme)
            : hydrateTheme(lightTheme)
        }
      >
        <DependencyProvider petService={petMemoryService}>
          <PetsProvider>
            <PortalProvider>
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" />

                <Stack.Screen name="+not-found" />
              </Stack>
            </PortalProvider>
          </PetsProvider>
        </DependencyProvider>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}
