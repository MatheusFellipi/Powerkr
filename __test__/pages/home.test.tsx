import { render } from "@testing-library/react-native";
import { TamaguiProvider } from "tamagui";

import Home from "../../src/app/index";
import config from "../../tamagui.config";

describe("<Home />", () => {
  it("renders correctly", () => {
    const tree = render(
      <TamaguiProvider config={config}>
        <Home />
      </TamaguiProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
