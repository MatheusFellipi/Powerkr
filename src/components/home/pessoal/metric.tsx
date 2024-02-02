import { CircularProgressComponent } from "@components/home/pessoal/circularProgress";
import { TextComponent } from "@shared/components/textComponent";
import { Card, View } from "tamagui";

const data = [
  {
    id: 1,
    value: 90,
    description: "Assumidos"
  },
  {
    id: 2,
    value: 90,
    description: "Realizados"
  },
  {
    id: 3,
    value: 90,
    description: "Pontos"
  },
  {
    id: 4,
    value: 90,
    description: "Pontuação Média"
  },
  {
    id: 5,
    value: 90,
    description: "Execução"
  },
  {
    id: 6,
    value: 90,
    description: "Desempenho Médio"
  }
];

export const MetricComponent = () => (
  <View>
    <TextComponent pin="description">Métricas</TextComponent>
    <View
      mt="$5"
      fw="wrap"
      fd="row"
      jc="space-between"
    >
      {data.map((item) => (
        <Card
          key={item.id}
          bg="#202939"
          mb="$4"
          width="45%"
          pt="$4"
          ai="center"
        >
          <CircularProgressComponent
            description={item.description}
            value={item.value}
          />
        </Card>
      ))}
    </View>
  </View>
);
