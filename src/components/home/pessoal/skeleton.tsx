import { Skeleton } from "moti/skeleton";
import { View } from "tamagui";

export default function SkeletonHomeComponent() {
  return (
    <View>
      <Skeleton
        colorMode="dark"
        height={134}
        width={"100%"}
      />
      <Spacer />
      <View
        fd="row"
        mt="$5"
      >
        <Skeleton
          colorMode="dark"
          height={134}
          width={"90%"}
        />
        <Skeleton
          colorMode="dark"
          height={134}
          width={"90%"}
        />
      </View>
      <View
        fd="row"
        jc="space-between"
        mt="$5"
      >
        <Skeleton
          colorMode="dark"
          width={180}
          height={180}
        />
        <Skeleton
          colorMode="dark"
          width={180}
          height={180}
        />
      </View>
      <View
        fd="row"
        jc="space-between"
        mt="$5"
      >
        <Skeleton
          colorMode="dark"
          width={180}
          height={180}
        />
        <Skeleton
          colorMode="dark"
          width={180}
          height={180}
        />
      </View>
    </View>
  );
}

const Spacer = ({ height = 16 }: any) => <View style={{ height }} />;
