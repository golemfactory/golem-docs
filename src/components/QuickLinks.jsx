import Link from "next/link";

import { Icon } from "@/components/Icon";

export function QuickLinks({ children }) {
  return (
    <div className="not-prose my-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}

export function QuickLink({
  title,
  description,
  href,
  icon,
  buttonText,
  disabled = false,
}) {
  return (
    <div
      className={`not-prose group relative flex h-full flex-col justify-between rounded-xl border border-lightbluedarker dark:border-slate-800 ${
        disabled
          ? " bg-gray-50 dark:bg-gray-800/30"
          : "bg-lightblue dark:bg-darkcontent"
      }`}
    >
      <div className="relative grid gap-y-4 overflow-hidden p-6">
        <Icon icon={icon} className="h-full w-full" />
        <h3
          className={`font-display not-prose font-semibold 
        ${disabled ? " text-gray-500" : "text-dark dark:text-white"}
        `}
        >
          {title}
        </h3>
        <p className="text-base-design max-h-[12em]  overflow-hidden text-normalgray dark:text-slate-400">
          {description}
        </p>
      </div>
      <div className=" px-6 py-10">
        {disabled ? (
          <button
            className=" text-base-design cursor-not-allowed rounded bg-gray-400 px-4 py-2 text-white dark:bg-gray-700/20"
            disabled
          >
            Available Soon
          </button>
        ) : (
          <Link
            href={href}
            className=" text-base-design cursor-pointer rounded bg-primary px-4 py-2 font-medium text-white hover:bg-primary/80 dark:bg-darkprimary dark:hover:bg-darkprimary/80"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}
