import { UnionIcon } from "./icons/UnionIcon";
import { Icon } from "@/components/Icon";
import { useRouter } from "next/router";

export function Link({ href, title, icon = "", hideunion = false }) {
  const router = useRouter();
  return (
    <button
      onClick={() => window.open(href, "_blank")}
      className=" my-6 inline-flex items-center gap-x-2 rounded-md border border-primary  px-3 py-2 text-center  text-base font-medium capitalize text-primary"
    >
      {icon && (
        <Icon icon={icon} className="block h-5 w-5 fill-primary text-primary" />
      )}
      {title}

      {!hideunion && <UnionIcon className="-ml-1 -mt-3 fill-primary" />}
    </button>
  );
}
