import { Icons } from "@assets/index";
import { BtnComponent } from "@shared/components/button";
import { YStack } from "tamagui";

export const Footer = () => {
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
        onPress={() => console.log("sair")}
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
