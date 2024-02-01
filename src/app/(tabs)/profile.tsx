import { ProfileComponent } from "@components/profile";
import { TextComponent } from "@shared/components/textComponent";
import { Avatar, View } from "tamagui";

export default function Profile() {
  return (
    <View
      pr="$4"
      pl="$4"
    >
      <View ai="center">
        <Avatar
          circular
          size="$15"
        >
          <Avatar.Image
            accessibilityLabel="Cam"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
          />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
        <TextComponent>Colaborador nome</TextComponent>
        <TextComponent pin="description">Departamento</TextComponent>
      </View>
      <ProfileComponent.Options.OptionText
        title="Nome"
        description="Nome Completo"
        handlePress={() => console.log("teste")}
      />
      <ProfileComponent.Options.OptionText
        title="E-mail"
        description="nome.sobrenome@gmail.com"
        handlePress={() => console.log("teste")}
      />
      <ProfileComponent.Options.OptionText
        description=""
        title="Alterar senha"
        handlePress={() => console.log("teste")}
      />
      <ProfileComponent.Options.OptionSwitch
        title="Notificações"
        handleSwitch={() => console.log("teste")}
      />
      <ProfileComponent.Options.OptionSwitch
        title="Modo Noturno"
        handleSwitch={() => console.log("teste")}
      />
    </View>
  );
}
