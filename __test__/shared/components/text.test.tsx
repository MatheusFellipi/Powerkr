import { TextComponent } from "@shared/components/text/text";
import { render, screen } from "@testing-library/react-native";
import { TamaguiProvider } from "tamagui";

import config from "../../../tamagui.config";

describe("<App />", () => {
  it("renders correctly", () => {
    const tree = render(
      <TamaguiProvider config={config}>
        <TextComponent pin="description">Test</TextComponent>
      </TamaguiProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(screen.getByText("Test")).toBeDefined();
  });
  it("renders correctly pin title", () => {
    const tree = render(
      <TamaguiProvider config={config}>
        <TextComponent pin="title">Test</TextComponent>
      </TamaguiProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(screen.getByText("Test")).toBeDefined();
  });
  it("renders correctly pin sub text", () => {
    const tree = render(
      <TamaguiProvider config={config}>
        <TextComponent pin="subText">Test</TextComponent>
      </TamaguiProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(screen.getByText("Test")).toBeDefined();
  });
});
