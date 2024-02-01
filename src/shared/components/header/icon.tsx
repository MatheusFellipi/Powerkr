import { SvgProps } from "react-native-svg";
import { View } from "tamagui";

type Props = {
  Icon: React.FC<SvgProps>;
  rightIcon?: boolean;
};

export function Icon({ Icon, rightIcon = false }: Props) {
  return (
    <View
      position="absolute"
      {...(rightIcon ? { right: "$0" } : { left: "$0" })}
    >
      <Icon />
    </View>
  );
}
