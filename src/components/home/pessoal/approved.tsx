import { FlatList } from "react-native";
import { CardApprovedComponent } from "@components/home/pessoal/cardApproved";
import { TextComponent } from "@shared/components/textComponent";
import { View } from "tamagui";

const data = [
  {
    id: 1,
    title:
      "Compromisso Título Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius praesentium sit culpa a repellat neque voluptate nostrum odio tenetur fugit, officiis veritatis vero nulla et eum quisquam ipsam corporis",
    date: new Date(),
    priority: "High"
  },
  {
    id: 2,
    title:
      "Compromisso Título Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius praesentium sit culpa a repellat neque voluptate nostrum odio tenetur fugit, officiis veritatis vero nulla et eum quisquam ipsam corporis",
    date: new Date(),
    priority: "High"
  }
];

export const ApprovedComponent = () => (
  <View mt="$5">
    <TextComponent pin="description"> Compromissos homologados</TextComponent>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CardApprovedComponent
          date={item.date}
          priority={item.priority}
          title={item.title}
        />
      )}
    />
  </View>
);
