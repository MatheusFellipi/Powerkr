import { appStackTabs } from "@navigation/tabs/tabs";
import { Tabs } from "expo-router";

export const NavigationTabs = () => {
  return (
    <Tabs>
      {appStackTabs.map((item) => (
        <Tabs.Screen
          options={{
            headerShown: false,
            tabBarIcon: item.Icon
          }}
          name={item.name}
          key={item.name}
        />
      ))}
    </Tabs>
  );
};
