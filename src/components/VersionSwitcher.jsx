import { useMemo, Fragment } from 'react'
import { useRouter } from 'next/router'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const VersionSwitcher = () => {
  const router = useRouter();
  const versions = useMemo(() => {
    return [
      { name: "Latest", url: process.env.NEXT_PUBLIC_LATEST_URL },
      { name: "Beta", url: process.env.NEXT_PUBLIC_BETA_URL },
      { name: "Alpha", url: process.env.NEXT_PUBLIC_ALPHA_URL },
    ];
  }, []);

  const currentVersion =
    versions.find((version) => router.asPath.startsWith(version.url)) ||
    versions[0];

  const switchVersion = (version) => {
    const url = new URL(router.asPath, version.url);
    window.location.assign(url.toString());
  };

  const getDisplayVersion = ({ name }) => name;

  return (
    <Listbox value={currentVersion} onChange={switchVersion}>
      {({ open }) => (
        <>
          <div className="version-switcher fixed bottom-4 right-4 z-50">
            <Listbox.Button className="relative w-full cursor-default rounded-sm bg-primary py-1.5 pl-3 pr-10 text-left text-white focus:outline-none">
              <span className="block truncate">
                {getDisplayVersion(currentVersion)}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute bottom-full z-10 mb-2 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {versions.map((version, idx) => (
                  <Listbox.Option
                    key={idx}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-primary text-white' : 'text-gray-900',
                        'relative cursor-default select-none px-4 py-2'
                      )
                    }
                    value={version}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {getDisplayVersion(version)}
                        </span>
                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-primary',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default VersionSwitcher
