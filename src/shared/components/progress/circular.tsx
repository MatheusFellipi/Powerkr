import { AnimatedCircularProgress } from "react-native-circular-progress";
import { TextComponent } from "@shared/components/textComponent";
import { View } from "tamagui";

export const CircularProgressComponent = ({
  description,
  value = 0
}: ProgressCircularProps) => (
  <AnimatedCircularProgress
    size={134}
    width={10}
    backgroundWidth={10}
    fill={value}
    tintColor="#44CB4B"
    backgroundColor="#3d5875"
    arcSweepAngle={240}
    rotation={240}
    lineCap="round"
  >
    {() => (
      <Legend
        description={description}
        value={value}
      />
    )}
  </AnimatedCircularProgress>
);

const Legend = ({ value, description }: ProgressCircularProps) => (
  <View ai="center">
    <TextComponent>{value}</TextComponent>
    <TextComponent
      pin="description"
      textAlign="center"
    >
      {description}
    </TextComponent>
  </View>
);
