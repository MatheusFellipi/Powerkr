export const getData = (): Promise<LoginDataReturn> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          email: "",
          name: "Colaborador nome",
          department: "Departamento",
          company: "Empresa",
          urlImg:
            "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
        },
        token: "sdawdadsadwds"
      });
    }, 3000);
  });
};
