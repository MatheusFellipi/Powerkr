import { Progress } from "@shared/components/progress";
import { render, screen } from "@testing-library/react-native";
import { TamaguiProvider } from "tamagui";

import config from "../../../tamagui.config";

describe("<App />", () => {
  it("renders correctly", () => {
    const tree = render(
      <TamaguiProvider config={config}>
        <Progress.Circular
          description="Test"
          value={1}
        />
      </TamaguiProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(screen.getByText("Test")).toBeDefined();
  });
});
