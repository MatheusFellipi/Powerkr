import { connection } from "@services/connection";
import { getData } from "@services/home/mock";

export const controllerHome = {
  details: async (): Promise<HomeComponentProps> => {
    if (process.env.ambient === "prod") {
      const { data } = await connection.GetData<HomeComponentProps>("url");
      return data.data;
    } else {
      return await getData();
    }
  }
};
