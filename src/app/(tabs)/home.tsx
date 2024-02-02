import { Icons } from "@assets/index";
import { HomeComponent } from "@components/home/pessoal";
import { HeaderComponent } from "@shared/components/header";
import { ScrollView, View } from "tamagui";

export default function Home() {
  return (
    <ScrollView>
      <View
        pt="$10"
        pr="$4"
        pl="$4"
      >
        <HeaderComponent.Container>
          <HeaderComponent.Icon Icon={Icons.Menu} />
          <HeaderComponent.Text pin="title"></HeaderComponent.Text>
          <HeaderComponent.Icon
            Icon={Icons.Bell}
            rightIcon={true}
          />
        </HeaderComponent.Container>

        <HomeComponent />
      </View>
    </ScrollView>
  );
}
