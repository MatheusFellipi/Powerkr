import { Switch } from "react-native";
import { OptionSwitchTypeProps } from "@custom-types/components/profiles";
import { TextComponent } from "@shared/components/text/text";
import { View } from "tamagui";

export const OptionSwitch = ({
  handleSwitch,
  value,
  title
}: OptionSwitchTypeProps) => {
  return (
    <View
      fd="row"
      alignItems="center"
      jc="space-between"
    >
      <TextComponent pin="subText">{title}</TextComponent>
      <Switch
        trackColor={{ false: "#767577", true: "#F7B519" }}
        ios_backgroundColor="#3e3e3e"
        thumbColor="#f4f3f4"
        onValueChange={handleSwitch}
        value={value}
      />
    </View>
  );
};
