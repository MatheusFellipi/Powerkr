import { Pressable } from "react-native";
import { Icons } from "@assets/index";
import {
  OptionSwitchType,
  OptionTextType
} from "@custom-types/components/profiles";
import { TextComponent } from "@shared/components/textComponent";
import { Switch, View } from "tamagui";

export const OptionText = ({
  handlePress,
  title,
  description
}: OptionTextType) => {
  return (
    <Pressable onPress={handlePress}>
      <View
        fd="row"
        ai="center"
        jc="space-between"
      >
        <TextComponent pin="subText">{title}</TextComponent>
        <View
          fd="row"
          ai="center"
        >
          <TextComponent
            pin="description"
            mr="$5"
          >
            {description}
          </TextComponent>
          <Icons.ArrowRight />
        </View>
      </View>
    </Pressable>
  );
};

export const OptionSwitch = ({ handleSwitch, title }: OptionSwitchType) => {
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
