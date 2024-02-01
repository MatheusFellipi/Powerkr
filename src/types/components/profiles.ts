export type OptionTextType = {
  handlePress: () => void;
  title: string;
  description: string;
};

export type OptionSwitchType = {
  handleSwitch: (value: boolean) => void;
  title: string;
};
