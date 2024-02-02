import { render } from "@testing-library/react-native";
import { TamaguiProvider } from "tamagui";

import Profile from "../../src/app/(tabs)/profile";
import config from "../../tamagui.config";

describe("<Profile />", () => {
  it("renders correctly", () => {
    const tree = render(
      <TamaguiProvider config={config}>
        <Profile />
      </TamaguiProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
