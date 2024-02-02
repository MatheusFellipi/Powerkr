export const getData = (): Promise<LoginDataReturn> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "",
        email: "",
        name: ""
      });
    }, 3000);
  });
};
