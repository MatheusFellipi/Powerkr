import { Progress } from "@shared/components/progress";
import { TextComponent } from "@shared/components/text/text";
import { Card, View } from "tamagui";

export const MetricComponent = ({ data }: { data: MetricProps[] }) => (
  <View>
    <TextComponent pin="description">Métricas</TextComponent>
    <View
      mt="$5"
      fw="wrap"
      fd="row"
      jc="space-between"
    >
      {data?.map((item) => (
        <Card
          key={item.id}
          bg="#202939"
          mb="$4"
          width="45%"
          pt="$4"
          ai="center"
        >
          <Progress.Circular
            description={item.description}
            value={item.value}
          />
        </Card>
      ))}
    </View>
  </View>
);
