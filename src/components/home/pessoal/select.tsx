import { useMemo, useState } from "react";
import { Icons } from "@assets/index";
import { Adapt, Select as S, Sheet } from "tamagui";

const items = [{ name: "Todos" }];

export function SelectComponent() {
  const [val, setVal] = useState("todos");
  return (
    <S
      id="food"
      value={val}
      onValueChange={setVal}
      disablePreventBodyScroll
    >
      <S.Trigger
        borderRadius={25}
        width={131}
        bg="$colorTransparent"
        borderColor="#4B5565"
        iconAfter={Icons.ArrowDown}
      >
        <S.Value placeholder="Something" />
      </S.Trigger>
      <Adapt
        when="sm"
        platform="touch"
      >
        <Sheet
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: "spring",
            damping: 20,
            mass: 1.2,
            stiffness: 250
          }}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>
      <S.Content>
        <S.Viewport>
          <S.Group>
            {useMemo(
              () =>
                items.map((item, i) => {
                  return (
                    <S.Item
                      index={i}
                      key={item.name}
                      value={item.name.toLowerCase()}
                    >
                      <S.ItemText>{item.name}</S.ItemText>
                    </S.Item>
                  );
                }),

              [items]
            )}
          </S.Group>
        </S.Viewport>
      </S.Content>
    </S>
  );
}
