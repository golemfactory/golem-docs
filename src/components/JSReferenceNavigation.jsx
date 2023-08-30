import { useMemo } from "react";

import { Navigation } from "./Navigation";

import { navigation } from "@/navigation/jsreference";
import { latestJSVersion } from "@/navigation/meta";

export const ReferenceNavigation = ({}) => {
  const currentNavItem = useMemo(() => {
    return navigation.find((item) => item.title === latestJSVersion);
  }, [latestJSVersion, navigation]);

  if (!currentNavItem) {
    return null;
  }

  return <Navigation links={navigation} title="Golem-js API reference" />;
};
