import { Icons } from "@assets/index";
import { TextComponent } from "@shared/components/text/text";
import { View, XStack } from "tamagui";

export const LogoComponent = () => (
  <>
    <View
      jc="center"
      ai="center"
    >
      <Icons.logoPowerkr />
      <XStack
        fd="row"
        mt="$5"
        space="$5"
      >
        <Icons.logoIbgl />
        <Icons.logRrules />
      </XStack>
    </View>

    <View
      mt="$17"
      mb="$5"
      pl="$5"
    >
      <TextComponent
        pin="title"
        fontSize={30}
      >
        Bem-vindo de volta!
      </TextComponent>
      <TextComponent pin="subText">
        Preparado para mais uma jornada?
      </TextComponent>
    </View>
  </>
);
