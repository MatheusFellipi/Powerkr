import { TextComponent } from "@shared/components/textComponent";
import { Avatar, Card, View } from "tamagui";

export const CardProfileComponent = ({
  name,
  company,
  urlImg
}: CardProfileProps) => (
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
        src={urlImg}
        alt={name}
      />
      <Avatar.Fallback backgroundColor="$blue2Dark" />
    </Avatar>
    <View>
      <TextComponent
        accessible={true}
        accessibilityLabel={name}
        pin="title"
      >
        {name}
      </TextComponent>
      <TextComponent
        accessible={true}
        accessibilityLabel={company}
        pin="description"
      >
        {company}
      </TextComponent>
    </View>
  </Card>
);
