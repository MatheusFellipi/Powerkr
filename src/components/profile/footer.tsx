import { Icons } from "@assets/index";
import { BtnComponent } from "@shared/components/button";
import { useRouter } from "expo-router";
import { YStack } from "tamagui";

export const Footer = () => {
  const { push } = useRouter();
  return (
    <YStack space="$5">
      <BtnComponent
        onPress={() => console.log("ajuda")}
        icon={
          <Icons.CircleHelp
            height={20}
            width={20}
          />
        }
      >
        Ajuda
      </BtnComponent>
      <BtnComponent
        onPress={() => push("/")}
        icon={
          <Icons.Power
            height={20}
            width={20}
          />
        }
      >
        Sair
      </BtnComponent>
    </YStack>
  );
};
