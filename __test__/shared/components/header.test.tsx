import { HeaderComponent } from "@shared/components/header";
import { render } from "@testing-library/react-native";
import { TamaguiProvider } from "tamagui";

import config from "../../../tamagui.config";

describe("<App />", () => {
  it("renders correctly", () => {
    const tree = render(
      <TamaguiProvider config={config}>
        <HeaderComponent.Container>
          <HeaderComponent.Text pin="description">test</HeaderComponent.Text>
        </HeaderComponent.Container>
      </TamaguiProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
