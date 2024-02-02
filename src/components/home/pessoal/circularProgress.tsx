import { AnimatedCircularProgress } from "react-native-circular-progress";
import { TextComponent } from "@shared/components/textComponent";
import { View } from "tamagui";

type Props = {
  value: number;
  description: string;
};

export const CircularProgressComponent = ({
  description,
  value = 0
}: Props) => (
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

const Legend = ({ value, description }: Props) => (
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
