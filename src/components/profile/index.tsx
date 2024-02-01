import { Avatar, Text, View } from "tamagui";

export default function Home() {
  return (
    <View>
      <Avatar
        circular
        size="$15"
      >
        <Avatar.Image
          accessibilityLabel="Cam"
          src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
        />
        <Avatar.Fallback backgroundColor="$blue10" />
      </Avatar>
      <Text>Colaborador nome</Text>
      <Text>Departamento</Text>
    </View>
  );
}
