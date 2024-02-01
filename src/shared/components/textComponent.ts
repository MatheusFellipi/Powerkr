import { styled, Text as T } from "tamagui";

export const TextComponent = styled(T, {
  fontSize: 14,
  fontFamily: "Inter",
  fontWeight: "400",
  variants: {
    pin: {
      title: {
        color: "#fff",
        fontSize: 20
      },
      subText: {
        color: "#CDD5DF"
      },
      description: {
        color: "#9AA4B2"
      }
    }
  } as const
});
