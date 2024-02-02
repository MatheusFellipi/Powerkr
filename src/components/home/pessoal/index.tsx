import { ApprovedComponent } from "@components/home/pessoal/approved";
import { MetricComponent } from "@components/home/pessoal/metric";
import { CardProfileComponent } from "@components/home/pessoal/profile";

export const HomeComponent = ({
  approved,
  metric,
  user
}: HomeComponentProps) => {
  return (
    <>
      <CardProfileComponent
        name={user?.name}
        company={user?.company}
        urlImg={user?.urlImg}
      />
      <ApprovedComponent data={approved} />
      <MetricComponent data={metric} />
    </>
  );
};
