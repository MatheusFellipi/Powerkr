import { useAuth } from "@context/auth.context";
import { TextComponent } from "@shared/components/text/text";
import { Avatar, Card, View } from "tamagui";

export const CardProfileComponent = () => {
  const { user } = useAuth();
  return (
    <Card
      fd="row"
      ai="center"
      bg="#202939"
      jc="space-evenly"
      accessible={true}
      accessibilityLabel="cartão simple do usuário"
      aria-label="cartão simple do usuário"
    >
      <Avatar
        circular
        size="$10"
        mt="$5"
        mb="$4"
      >
        <Avatar.Image
          src={user?.user?.urlImg}
          alt={user?.user?.name}
        />
        <Avatar.Fallback backgroundColor="$blue2Dark" />
      </Avatar>
      <View>
        <TextComponent
          accessible={true}
          accessibilityLabel={user?.user?.name}
          pin="title"
        >
          {user?.user?.name}
        </TextComponent>
        <TextComponent
          accessible={true}
          accessibilityLabel={user?.user?.company}
          pin="description"
        >
          {user?.user?.company}
        </TextComponent>
      </View>
    </Card>
  );
};
