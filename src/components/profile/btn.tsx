import { BtnFooterProfilePropsType } from "@custom-types/components/profiles";
import { Button } from "tamagui";

export const BtnComponent = ({
  text,
  icon,
  handlePress
}: BtnFooterProfilePropsType) => {
  return (
    <Button
      borderColor="#4B5565"
      bg="#202939"
      height={40}
      borderRadius={50}
      variant="outlined"
      fontFamily="InterBold"
      icon={icon}
      onPress={handlePress}
    >
      {text}
    </Button>
  );
};
