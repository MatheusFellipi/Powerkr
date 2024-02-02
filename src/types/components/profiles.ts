import type { FunctionComponent } from "react";
type ButtonIconProps = { color?: any; size?: any };
type IconProp =
  | JSX.Element
  | FunctionComponent<ButtonIconProps>
  | ((props: ButtonIconProps) => any)
  | null;

export type OptionTextPropsType = {
  handlePress: () => void;
  title: string;
  description: string;
};

export type OptionSwitchTypeProps = {
  handleSwitch: (value: boolean) => void;
  value: boolean;
  title: string;
};

export type BtnFooterProfilePropsType = {
  text: string;
  icon: IconProp;
  handlePress: () => void;
};
