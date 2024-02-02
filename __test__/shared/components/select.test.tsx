import { SelectComponent } from "@shared/components/select";
import { render } from "@testing-library/react-native";
import { TamaguiProvider } from "tamagui";

import config from "../../../tamagui.config";

describe("<App />", () => {
  it("renders correctly", () => {
    const tree = render(
      <TamaguiProvider config={config}>
        <SelectComponent />
      </TamaguiProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
