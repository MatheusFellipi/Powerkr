import { getData } from "@services/auth/mock";
import { connection } from "@services/connection";

export const controllerAuth = {
  Login: async (login: Login): Promise<LoginDataReturn> => {
    if (process.env.ambient === "prod") {
      const { data } = await connection.PostData<LoginDataReturn, Login>(
        "url",
        login
      );
      return data.data;
    } else {
      return await getData();
    }
  }
};
