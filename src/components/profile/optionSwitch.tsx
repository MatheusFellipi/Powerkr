import { OptionSwitchPropsType } from "@custom-types/components/profiles";
import { TextComponent } from "@shared/components/textComponent";
import { Switch, View } from "tamagui";

export const OptionSwitch = ({
  handleSwitch,
  title
}: OptionSwitchPropsType) => {
  return (
    <View
      fd="row"
      alignItems="center"
      jc="space-between"
      mt
    >
      <TextComponent pin="subText">{title}</TextComponent>
      <Switch
        size="$4"
        onCheckedChange={handleSwitch}
      >
        <Switch.Thumb animation="bouncy" />
      </Switch>
    </View>
  );
};
