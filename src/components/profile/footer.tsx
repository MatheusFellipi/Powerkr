import { Pressable } from "react-native";
import { OptionTextType } from "@custom-types/components/profiles";
import { Text, View } from "tamagui";

export const Footer = ({ handlePress, title, description }: OptionTextType) => {
  return (
    <Pressable onPress={handlePress}>
      <View style={{}}>
        <Text color="$description">{title}</Text>
        <Text>{description}</Text>
      </View>
    </Pressable>
  );
};
