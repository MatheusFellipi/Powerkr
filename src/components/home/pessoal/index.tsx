import { ApprovedComponent } from "@components/home/pessoal/approved";
import { MetricComponent } from "@components/home/pessoal/metric";
import { CardProfileComponent } from "@components/home/pessoal/profile";

export const HomeComponent = ({ approved, metric }: HomeComponentProps) => {
  return (
    <>
      <CardProfileComponent />
      <ApprovedComponent data={approved} />
      <MetricComponent data={metric} />
    </>
  );
};
