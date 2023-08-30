import { EyeIcon } from "@/components/icons/EyeIcon";
export function DocNavigation({ title, children }) {
  return (
    <div
      className={`my-6 rounded-md  border border-lightbluedarker text-base `}
    >
      <div className={`rounded-t-md bg-lightblue py-3 text-dark `}>
        <span className="flex items-center px-4 font-semibold capitalize  ">
          <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary ">
            <EyeIcon className="h-3 w-3 fill-white" />
          </div>
          {title}
        </span>
      </div>
      <div className="mt-2 px-4">{children}</div>
    </div>
  );
}
