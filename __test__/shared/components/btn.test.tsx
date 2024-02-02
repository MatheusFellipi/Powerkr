import { BtnComponent } from "@shared/components/button";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { TamaguiProvider } from "tamagui";

import config from "../../../tamagui.config";

describe("<App />", () => {
  it("renders correctly", () => {
    const handleClick = jest.fn();
    const tree = render(
      <TamaguiProvider config={config}>
        <BtnComponent onPress={handleClick}>Test</BtnComponent>
      </TamaguiProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
    fireEvent.press(screen.getByText("Test"));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Test")).toBeDefined();
  });
});
