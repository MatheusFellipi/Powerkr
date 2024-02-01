import { styled, Text } from "tamagui"; // or '@tamagui/core'
export const Title = styled(Text, {
  variants: {
    pin: {
      top: {
        position: "absolute",
        top: 0
      }
    },
    centered: {
      true: {
        alignItems: "center",
        justifyContent: "center"
      }
    },
    size: {
      "...size": (size, { tokens }) => {
        return {
          width: tokens.size[size] ?? size,
          height: tokens.size[size] ?? size
        };
      }
    }
  } as const
});
