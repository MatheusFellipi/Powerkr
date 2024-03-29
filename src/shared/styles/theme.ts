import { DarkTheme as Dark } from "@react-navigation/native";

export const DarkTheme = {
  ...Dark,
  colors: {
    ...Dark.colors,
    primary: "#fff",
    background: "#121926",
    card: "#202939",
    text: "#CDD5DF",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)"
  }
};
