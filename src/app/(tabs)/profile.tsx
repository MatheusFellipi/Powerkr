import { useState } from "react";
import { Icons } from "@assets/index";
import { ProfileComponent } from "@components/profile";
import { HeaderComponent } from "@shared/components/header";
import { TextComponent } from "@shared/components/textComponent";
import { Avatar, View, YStack } from "tamagui";

export default function Profile() {
  const [theme, setTheme] = useState(true);
  const [notific, setNotific] = useState(true);

  return (
    <View
      pt="$10"
      pr="$4"
      pl="$4"
    >
      <HeaderComponent.Container>
        <HeaderComponent.Icon Icon={Icons.Menu} />
        <HeaderComponent.Text pin="title">Perfil</HeaderComponent.Text>
      </HeaderComponent.Container>
      <View
        ai="center"
        mb="$4"
      >
        <Avatar
          circular
          size="$15"
          mt="$5"
          mb="$4"
        >
          <Avatar.Image
            accessibilityLabel="Cam"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
          />
          <Avatar.Fallback backgroundColor="$blue2Dark" />
        </Avatar>
        <TextComponent pin="title">Colaborador nome</TextComponent>
        <TextComponent pin="description">Departamento</TextComponent>
      </View>
      <YStack space="$4.5">
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
          value={notific}
          handleSwitch={(value) => setNotific(value)}
        />
        <ProfileComponent.Options.OptionSwitch
          title="Modo Noturno"
          value={theme}
          handleSwitch={(value) => setTheme(value)}
        />
        <ProfileComponent.Footer />
      </YStack>
    </View>
  );
}
