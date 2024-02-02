type ApprovedProps = {
  id: number;
  title: string;
  date: Date;
  priority: string;
};

type MetricProps = {
  id: number;
  value: number;
  description: string;
};

type CardProfileProps = {
  name: string;
  company: string;
  urlImg: string;
};

type TabsComponentProps = {
  tab: string;
  handle: (value: string) => void;
};

type HomeComponentProps = {
  approved: ApprovedProps[];
  metric: MetricProps[];
  user: CardProfileProps;
};
