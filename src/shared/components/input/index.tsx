import { useState } from "react";
import { Pressable, TextInputProps } from "react-native";
import { Icons } from "@assets/index";
import { Input, InputProps, Label, View } from "tamagui";

type Props = { label: string } & InputProps;

export const InputComponent = ({
  label,
  id,
  onChangeText,
  secureTextEntry,
  ...props
}: Props) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  return (
    <View>
      <Label
        color={"#CDD5DF"}
        htmlFor={id}
      >
        {label}
      </Label>
      <View
        fd="row"
        jc="space-between"
        ai="center"
        borderRadius={24}
        bg="#364152"
        borderWidth={1}
        borderColor="#4B5565"
      >
        <Input
          {...props}
          width={"90%"}
          borderRadius={24}
          secureTextEntry={showPassword}
          bg="$backgroundTransparent"
          borderColor="$backgroundTransparent"
        />
        {secureTextEntry && (
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            style={{
              width: "10%",
              paddingRight: 10
            }}
          >
            {showPassword ? (
              <Icons.EyeOn
                fill={"#A0AEC0"}
                height={25}
                width={25}
              />
            ) : (
              <Icons.EyeOff
                fill={"#A0AEC0"}
                height={25}
                width={25}
              />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
};
