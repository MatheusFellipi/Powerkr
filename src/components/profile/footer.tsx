import { Icons } from "@assets/index";
import { BtnComponent } from "@components/profile/btn";
import { YStack } from "tamagui";

export const Footer = () => {
  return (
    <YStack space="$5">
      <BtnComponent
        handlePress={() => console.log("ajuda")}
        icon={
          <Icons.CircleHelp
            height={20}
            width={20}
          />
        }
        text="Ajuda"
      />
      <BtnComponent
        handlePress={() => console.log("sair")}
        icon={
          <Icons.Power
            height={20}
            width={20}
          />
        }
        text="Sair"
      />
    </YStack>
  );
};
