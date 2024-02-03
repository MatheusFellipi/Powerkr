import { FlatList } from "react-native";
import { CardApprovedComponent } from "@components/home/pessoal/cardApproved";
import { TextComponent } from "@shared/components/text/text";
import { View } from "tamagui";

export const ApprovedComponent = ({ data }: { data: ApprovedProps[] }) => (
  <View mt="$5">
    <TextComponent
      pin="description"
      accessible={true}
      accessibilityLabel="Compromisso homologado."
    >
      Compromissos homologados
    </TextComponent>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CardApprovedComponent
          id={item.id}
          date={item.date}
          priority={item.priority}
          title={item.title}
        />
      )}
    />
  </View>
);
