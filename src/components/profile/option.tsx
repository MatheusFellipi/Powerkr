import { Pressable } from "react-native";
import {
  OptionSwitchType,
  OptionTextType
} from "@custom-types/components/profiles";
import { Switch, Text, View } from "tamagui";

export const OptionComponent = () => {
  return (
    <View>
      <OptionText
        handlePress={function (): void {
          throw new Error("Function not implemented.");
        }}
        title={""}
        description={""}
      />

      <OptionSwitch
        handleSwitch={function (value: boolean): void {
          throw new Error("Function not implemented.");
        }}
        title={""}
      />
    </View>
  );
};

export const OptionText = ({
  handlePress,
  title,
  description
}: OptionTextType) => {
  return (
    <Pressable onPress={handlePress}>
      <View style={{}}>
        <Text color="$description">{title}</Text>
        <Text>{description}</Text>
      </View>
    </Pressable>
  );
};

export const OptionSwitch = ({ handleSwitch, title }: OptionSwitchType) => {
  return (
    <View>
      <Text>{title}</Text>
      <Switch
        size="$4"
        onCheckedChange={handleSwitch}
      >
        <Switch.Thumb animation="bouncy" />
      </Switch>
    </View>
  );
};
