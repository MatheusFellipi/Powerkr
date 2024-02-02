import { render } from "@testing-library/react-native";
import { TamaguiProvider } from "tamagui";

import Login from "../../src/app/index";
import config from "../../tamagui.config";

describe("<Login />", () => {
  it("renders correctly", () => {
    const tree = render(
      <TamaguiProvider config={config}>
        <Login />
      </TamaguiProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
