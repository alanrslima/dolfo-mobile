type EnvProps = {
  EXPO_APP_ENV: "development" | "production";
};

export default Object.freeze({
  EXPO_APP_ENV: process.env.EXPO_PUBLIC_APP_ENV,
} as EnvProps);
