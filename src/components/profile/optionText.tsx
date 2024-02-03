import { Pressable } from "react-native";
import { Icons } from "@assets/index";
import { OptionTextPropsType } from "@custom-types/components/profiles";
import { TextComponent } from "@shared/components/text/text";
import { View } from "tamagui";

export const OptionText = ({
  handlePress,
  title,
  description
}: OptionTextPropsType) => {
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
