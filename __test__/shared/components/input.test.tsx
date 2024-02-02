import { InputComponent } from "@shared/components/input";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { TamaguiProvider } from "tamagui";

import config from "../../../tamagui.config";

describe("<App />", () => {
  it("renders correctly", () => {
    const tree = render(
      <TamaguiProvider config={config}>
        <InputComponent
          label="test"
          value="test"
        />
      </TamaguiProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
