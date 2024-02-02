import { Dimensions } from "react-native";
import { BtnComponent } from "@shared/components/button";
import { InputComponent } from "@shared/components/input";
import { TextComponent } from "@shared/components/textComponent";
import { Form, Spinner } from "tamagui";

const { width } = Dimensions.get("screen");

type Props = {
  setValues: React.Dispatch<React.SetStateAction<Login>>;
  values: Login;
  onSubmit: () => void;
  loader: boolean;
};

export const FormComponent = ({
  setValues,
  values,
  onSubmit,
  loader
}: Props) => (
  <Form
    paddingHorizontal={20}
    pt={20}
    height={400}
    width={width}
    onSubmit={onSubmit}
    borderWidth={1}
    borderTopLeftRadius={24}
    borderTopRightRadius={24}
    backgroundColor="#182E43"
  >
    <InputComponent
      label="Informações da conta"
      id="email"
      keyboardType="email-address"
      placeholder="Insira seu e-mail"
      value={values?.email}
      onChangeText={(text) =>
        setValues({ ...values, email: text.toLowerCase() })
      }
    />
    <InputComponent
      label="Senha"
      id="password"
      value={values?.password}
      secureTextEntry
      placeholder="Senha"
      onChangeText={(text) => setValues({ ...values, password: text })}
    />
    <TextComponent
      mt="$5"
      mb="$5"
      textAlign="right"
      color="#F7B519"
    >
      Esqueceu a senha?
    </TextComponent>
    <Form.Trigger
      asChild
      disabled={loader}
      width={"100%"}
    >
      <BtnComponent
        width={"100%"}
        styles="login"
        icon={loader ? () => <Spinner color="#fff" /> : undefined}
      >
        Entrar
      </BtnComponent>
    </Form.Trigger>
  </Form>
);
