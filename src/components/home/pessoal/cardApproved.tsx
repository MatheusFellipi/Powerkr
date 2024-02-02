import { Icons } from "@assets/index";
import { TextComponent } from "@shared/components/textComponent";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Card, View } from "tamagui";

export const CardApprovedComponent = ({
  title,
  priority,
  date
}: ApprovedProps) => {
  const replaceTitle = (text: string) => {
    let replaceText = "";
    if (text.length > 80) replaceText = text.slice(1, 40) + "...";
    return replaceText;
  };

  return (
    <Card
      bg="#202939"
      jc="space-evenly"
      minWidth={240}
      maxWidth={340}
      borderRadius={24}
      mr="$5"
      mt="$5"
      mb="$5"
      accessible={true}
      accessibilityLabel="cartão de compromisso homologado"
      aria-label="cartão de compromisso homologado"
    >
      <Card.Header>
        <TextComponent
          pin="title"
          accessible={true}
          accessibilityLabel={title}
        >
          {replaceTitle(title)}
        </TextComponent>
      </Card.Header>
      <Card.Footer
        p="$3"
        fd="row"
        jc="space-between"
        ai="center"
      >
        <Icons.CommitteesYellow />
        <View
          fd="row"
          ai="center"
        >
          <Icons.Calender />
          <TextComponent
            ml="$1"
            pin="description"
            accessible={true}
            accessibilityLabel={format(new Date(date), "dd MMMM yyyy", {
              locale: ptBR
            })}
            fontSize={12}
          >
            {format(new Date(date), "dd MMM", { locale: ptBR })}
          </TextComponent>
        </View>
        <View
          fd="row"
          ai="center"
          jc="space-between"
          pl="$2"
          pr="$2"
          borderRadius={50}
          bg={"#fff"}
          w={60}
          h={23}
        >
          <Icons.ArrowUpGreen />
          <TextComponent
            color={"#1D8935"}
            accessible={true}
            accessibilityLabel={priority}
          >
            {priority}
          </TextComponent>
        </View>
      </Card.Footer>
    </Card>
  );
};
