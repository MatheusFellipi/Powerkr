import { ReactNode } from "react";
import { View } from "tamagui";

type Props = {
  children: ReactNode;
};

export function Container({ children }: Props) {
  return (
    <View
      fd="row"
      justifyContent="center"
      position="relative"
    >
      {children}
    </View>
  );
}
