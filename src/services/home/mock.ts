export const getData = (): Promise<HomeComponentProps> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        metric: [
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
        ],
        approved: [
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
        ]
      });
    }, 2000);
  });
};
