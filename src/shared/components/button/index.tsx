import { Button, styled } from "tamagui";

export const BtnComponent = styled(Button, {
  fontSize: 14,
  borderRadius: 24,
  fontFamily: "InterBold",
  borderColor: "#4B5565",
  bg: "#202939",
  variants: {
    tabs: {
      activated: {},
      disabled: {
        borderColor: "$colorTransparent",
        bg: "$colorTransparent"
      }
    },
    styles: {
      login: {
        bg: "#F7B519",
        color: "#000"
      }
    }
  } as const
});
