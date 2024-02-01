import { Pressable } from "react-native";
import { appStackTabs } from "@navigation/tabs/tabs";
import { Tabs } from "expo-router";
import { Text } from "tamagui";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red"
      }}
    >
      {appStackTabs.map((item) => (
        <Tabs.Screen
          name={item.name}
          key={item.name}
          options={{
            title: item.name,
            tabBarIcon: ({ color }) => <Text>Hello!</Text>,
            headerRight: () => (
              <Pressable>
                <Text>Hello!</Text>
              </Pressable>
            )
          }}
        />
      ))}
    </Tabs>
  );
}
