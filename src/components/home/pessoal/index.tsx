import { ApprovedComponent } from "@components/home/pessoal/approved";
import { MetricComponent } from "@components/home/pessoal/metric";
import { CardProfileComponent } from "@components/home/pessoal/profile";
import { SelectComponent } from "@components/home/pessoal/select";
import { TextComponent } from "@shared/components/textComponent";
import { View } from "tamagui";

export const HomeComponent = () => {
  return (
    <>
      <View
        mt="$5"
        mb="$5"
        fd="row"
        jc="space-between"
        ai="center"
      >
        <TextComponent pin="title">Olá, [usuário]</TextComponent>
        <SelectComponent />
      </View>

      <CardProfileComponent
        name="Colaborador nome"
        company="Empresa"
        urlImg="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
      />
      <ApprovedComponent />
      <MetricComponent />
    </>
  );
};
