import { Icons } from "@assets/index";
import { BtnComponent } from "@shared/components/button";
import { View } from "tamagui";

export const TabsComponent = ({ tab, handle }: TabsComponentProps) => (
  <View
    fd="row"
    mb="$6"
    jc="space-between"
  >
    <BtnComponent
      width="50%"
      tabs={tab === "personal" ? "activated" : "disabled"}
      icon={Icons.UserWhite}
      onPress={() => handle("personal")}
    >
      Pessoal
    </BtnComponent>
    <BtnComponent
      width="50%"
      tabs={tab === "general" ? "activated" : "disabled"}
      icon={Icons.UserWhite}
      onPress={() => handle("general")}
    >
      Geral
    </BtnComponent>
  </View>
);
