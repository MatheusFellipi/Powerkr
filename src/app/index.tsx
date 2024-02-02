import { useState } from "react";
import { Dimensions, ImageBackground } from "react-native";
import { FormComponent } from "@components/login/form";
import { LogoComponent } from "@components/login/logos";
import { useAuth } from "@context/auth.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { controllerAuth } from "@services/auth";
import { useRouter } from "expo-router";
import { View } from "tamagui";

const { height, width } = Dimensions.get("screen");

const Login = () => {
  const router = useRouter();
  const { setUser } = useAuth();
  const [values, setValues] = useState();
  const [loader, setLoader] = useState(false);

  const auth = () => {
    setLoader(true);
    controllerAuth
      .Login(values)
      .then(async (res) => {
        setUser(res);
        addToken(res.token);
        router.push("home");
      })
      .catch((err) => console.error(err))
      .finally(() => setLoader(false));
  };

  const addToken = async (token: string) => {
    await AsyncStorage.setItem("token", token);
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../assets/background.png")}
    >
      <View
        pt="$15"
        height={height}
        width={width}
      >
        <LogoComponent />
        <FormComponent
          onSubmit={auth}
          setValues={setValues}
          values={values}
          loader={loader}
        />
      </View>
    </ImageBackground>
  );
};

export default Login;
