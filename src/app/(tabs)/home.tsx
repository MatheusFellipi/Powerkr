import { useEffect, useState } from "react";
import { Icons } from "@assets/index";
import { HomeComponent } from "@components/home/pessoal";
import SkeletonHomeComponent from "@components/home/pessoal/skeleton";
import { TabsComponent } from "@components/home/pessoal/tabs";
import { controllerHome } from "@services/home";
import { HeaderComponent } from "@shared/components/header";
import { SelectComponent } from "@shared/components/select";
import { TextComponent } from "@shared/components/textComponent";
import { ScrollView, View } from "tamagui";

export default function Home() {
  const [tabs, setTabs] = useState("personal");
  const [data, setData] = useState<HomeComponentProps>();
  const [loader, setLoader] = useState(true);

  const details = () => {
    controllerHome
      .details()
      .then((data) => setData(data))
      .catch((err) => console.error(err))
      .finally(() => setLoader(false));
  };

  const handleTabs = (value: string) => setTabs(value);

  useEffect(() => {
    details();
  }, []);

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
        <TabsComponent
          tab={tabs}
          handle={handleTabs}
        />
        {tabs === "personal" && (
          <View>
            {loader && <SkeletonHomeComponent />}
            {!loader && (
              <HomeComponent
                approved={data?.approved}
                metric={data?.metric}
              />
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
