import { useEffect, useId, useState, forwardRef, useRef, Fragment } from 'react'
import { useRouter } from 'next/router'
import { createAutocomplete } from '@algolia/autocomplete-core'
import { Dialog } from '@headlessui/react'
import clsx from 'clsx'
import Highlighter from 'react-highlight-words'
import { navigation } from '@/components/Layout'
import { ArrowSmallUpIcon, ArrowSmallDownIcon } from '@heroicons/react/24/solid'

function SearchIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" {...props}>
      <path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z" />
    </svg>
  )
}

function useAutocomplete() {
  let id = useId()
  let router = useRouter()
  let [autocompleteState, setAutocompleteState] = useState({})

  let [autocomplete] = useState(() =>
    createAutocomplete({
      id,
      placeholder: 'Find something...',
      defaultActiveItemId: 0,
      onStateChange({ state }) {
        setAutocompleteState(state)
      },
      shouldPanelOpen({ state }) {
        return state.query !== ''
      },
      getSources({ query }) {
        return import('@/markdoc/search.mjs').then(({ search }) => {
          return [
            {
              sourceId: 'documentation',
              getItems() {
                return search(query, { limit: 5 })
              },
              getItemUrl({ item }) {
                return item.url
              },
              onSelect({ itemUrl }) {
                router.push(itemUrl)
              },
            },
          ]
        })
      },
    })
  )

  return { autocomplete, autocompleteState }
}

function LoadingIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="5.5" strokeLinejoin="round" />
      <path
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 10a5.5 5.5 0 1 0-5.5 5.5"
      />
      <defs>
        <linearGradient
          id={id}
          x1="13"
          x2="9.5"
          y1="9"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function HighlightQuery({ text, query }) {
  return (
    <Highlighter
      highlightClassName="group-aria-selected:underline bg-transparent text-primary dark:text-darkprimary font-medium"
      searchWords={[query]}
      autoEscape={true}
      textToHighlight={text}
    />
  )
}
import { ArticleType } from './ArticleType'
function SearchResult({ result, autocomplete, collection, query, filter }) {
  let id = useId()

  let sectionTitle
  if (navigation) {
    sectionTitle = navigation.find((section) =>
      section.links.find((link) => link.href === result.url.split('#')[0])
    )?.title
  }
  let hierarchy = [sectionTitle, result.pageTitle].filter(Boolean)
  return (
    <li
      className="group-result group block cursor-default"
      aria-labelledby={`${id}-hierarchy ${id}-title`}
      {...autocomplete.getItemProps({
        item: result,
        source: collection.source,
      })}
    >
      <div
        id={`${id}-title`}
        aria-hidden="true"
        className="relative rounded-lg py-2 pl-3  text-sm text-slate-700 hover:cursor-pointer group-aria-selected:bg-slate-100 group-aria-selected:text-primary dark:text-white/70 dark:group-aria-selected:bg-slate-700/30 dark:group-aria-selected:text-white/50"
      >
        <div className="grid items-center gap-x-2 break-words md:grid-cols-3">
          <div className="flex items-center gap-x-2 break-words md:col-span-2">
            <div>
              <ArticleType onlyIcon={true} type={result.type} />
            </div>
            <div className="md:truncate">
              <HighlightQuery text={result.title} query={query} />
              {hierarchy.length > 0 && (
                <div
                  id={`${id}-hierarchy`}
                  aria-hidden="true"
                  className="mt-0.5  text-xs text-slate-500 dark:text-slate-400 md:truncate md:whitespace-nowrap "
                >
                  {hierarchy.map((item, itemIndex, items) => (
                    <span className="break-words" key={itemIndex}>
                      <HighlightQuery text={item} query={query} />
                      <span
                        className={
                          itemIndex === items.length - 1
                            ? 'sr-only'
                            : 'mx-2 block break-words text-slate-300 dark:text-slate-700'
                        }
                      >
                        /
                      </span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="mr-4 mt-4 flex items-center md:ml-auto md:mt-0">
            {filter.length > 1 && (
              <span
                className={`rounded-md px-2 py-1 text-sm font-medium capitalize text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:text-white dark:text-opacity-70 `}
              >
                {result.articleFor}
              </span>
            )}
            <span className="px-2 text-xs font-medium capitalize text-primary dark:text-darkprimary">
              ↗
            </span>
          </div>
        </div>
      </div>
    </li>
  )
}

function SearchResults({
  autocomplete,
  query,
  collection,
  roleFilter,
  typeFilter,
}) {
  // If there is no collection, return null
  if (!collection) return null

  // Group results by type
  const groupedResults = collection.items.reduce((acc, result) => {
    if (roleFilter.length === 0 && typeFilter.length === 0) {
      // If no filters are selected, don't filter results
      if (!acc[result.type]) {
        acc[result.type] = []
      }
      acc[result.type].push(result)
      return acc
    }

    const { type, articleFor } = result
    const rolePass = !roleFilter.length || roleFilter.includes(articleFor)
    const typePass = !typeFilter.length || typeFilter.includes(type)

    if (rolePass && typePass) {
      if (!acc[type]) {
        acc[type] = []
      }
      acc[type].push(result)
    }

    // Filter out types that have empty arrays after all insertions are done
    return Object.fromEntries(
      Object.entries(acc).filter(([_, results]) => results.length > 0)
    )
  }, {})

  // If there are no results after filtering
  if (Object.keys(groupedResults).length === 0 && query !== '') {
    return (
      <p className="px-4 py-8 text-center text-sm text-slate-700 dark:text-slate-400">
        No results for &ldquo;
        <span className="break-words text-primary dark:text-darkprimary">
          {query}
        </span>
        &rdquo; with selected filters.
      </p>
    )
  }

  // Return the filtered results
  return (
    <>
      {Object.entries(groupedResults).map(([type, results]) => (
        <section
          className="border-t border-slate-200 bg-white px-4 py-3 empty:hidden dark:border-slate-400/10 dark:bg-slate-800"
          key={type}
        >
          <h2 className="text-sm font-semibold capitalize text-slate-500 dark:text-white/50">
            {type}
          </h2>
          <ul role="list" {...autocomplete.getListProps()}>
            {results.map((result) => (
              <SearchResult
                key={result.url}
                result={result}
                autocomplete={autocomplete}
                collection={collection}
                query={query}
                filter={roleFilter}
              />
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}

const SearchInput = forwardRef(function SearchInput(
  { autocomplete, autocompleteState, onClose },
  inputRef
) {
  let inputProps = autocomplete.getInputProps({})

  return (
    <div className="group relative flex h-12">
      <SearchIcon className="pointer-events-none absolute left-4 top-0 h-full w-5 fill-slate-400 dark:fill-slate-500" />
      <input
        ref={inputRef}
        className={clsx(
          'flex-auto appearance-none bg-transparent pl-12 text-slate-900 outline-none placeholder:text-slate-400 focus:w-full focus:flex-none dark:text-white sm:text-sm [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden',
          autocompleteState.status === 'stalled' ? 'pr-11' : 'pr-4'
        )}
        {...inputProps}
        onKeyDown={(event) => {
          if (
            event.key === 'Escape' &&
            !autocompleteState.isOpen &&
            autocompleteState.query === ''
          ) {
            // In Safari, closing the dialog with the escape key can sometimes cause the scroll position to jump to the
            // bottom of the page. This is a workaround for that until we can figure out a proper fix in Headless UI.
            document.activeElement?.blur()

            onClose()
          } else {
            inputProps.onKeyDown(event)
          }
        }}
      />
      {autocompleteState.status === 'stalled' && (
        <div className="absolute inset-y-0 right-3 flex items-center">
          <LoadingIcon className="h-6 w-6 animate-spin stroke-slate-200 text-slate-400 dark:stroke-slate-700 dark:text-slate-500" />
        </div>
      )}
    </div>
  )
})

function FilterButton({ label, isActive, onClick }) {
  // Add additional styling as needed to match the design
  return (
    <button
      className={`rounded-md px-2 py-1 text-sm font-medium capitalize text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:text-white dark:text-opacity-70 ${
        isActive ? 'bg-gray-100 dark:bg-slate-600' : '  dark:bg-slate-800'
      }`}
      onClick={() => onClick(label.toLowerCase())}
    >
      {label}
    </button>
  )
}

function SearchDialog({ open, setOpen, className }) {
  let router = useRouter()
  let formRef = useRef()
  let panelRef = useRef()
  let inputRef = useRef()
  let { autocomplete, autocompleteState } = useAutocomplete()
  const [roleFilter, setRoleFilter] = useState([])
  const [typefilter, setTypeFilter] = useState([])
  let [modifierKey, setModifierKey] = useState()

  // Store all unique keys of .type of autocompleteState.collections[0] items
  if (autocompleteState.collections) {
    console.log(autocompleteState.collections[0])
  }

  useEffect(() => {
    setModifierKey(
      /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl '
    )
  }, [])

  const toggleFilter = (f, filterType) => {
    if (filterType === 'role') {
      setRoleFilter((prev) => {
        let newFilter

        if (prev.length === 0 && f !== 'none') {
          // If no filters are selected and 'none' is not the selected filter,
          // start with just the selected filter
          newFilter = [f]
        } else {
          // If there are already filters selected or 'none' is the selected filter,
          // toggle the current filter
          if (prev.includes(f)) {
            // Remove the selected filter if it's already in the array
            newFilter = prev.filter((value) => value !== f)
          } else {
            // Add the selected filter if it's not already in the array
            newFilter = [...prev, f]
          }

          // If the 'none' filter is selected, clear all filters
          if (f === 'none') {
            newFilter = []
          }
        }

        // After state is updated, set the query to trigger a search with the new filter state
        setTimeout(() => autocomplete.setQuery(autocompleteState.query), 0)

        // Return the new filter state
        return newFilter
      })
    } else if (filterType === 'type') {
      setTypeFilter((prev) => {
        let newFilter

        if (prev.length === 0 && f !== 'none') {
          // If no filters are selected and 'none' is not the selected filter,
          // start with just the selected filter
          newFilter = [f]
        } else {
          // If there are already filters selected or 'none' is the selected filter,
          // toggle the current filter
          if (prev.includes(f)) {
            // Remove the selected filter if it's already in the array
            newFilter = prev.filter((value) => value !== f)
          } else {
            // Add the selected filter if it's not already in the array
            newFilter = [...prev, f]
          }

          // If the 'none' filter is selected, clear all filters
          if (f === 'none') {
            newFilter = []
          }
        }

        // After state is updated, set the query to trigger a search with the new filter state
        setTimeout(() => autocomplete.setQuery(autocompleteState.query), 0)

        // Return the new filter state
        return newFilter
      })
    }
  }

  useEffect(() => {
    if (!open) {
      return
    }

    function onRouteChange() {
      setOpen(false)
    }

    router.events.on('routeChangeStart', onRouteChange)
    router.events.on('hashChangeStart', onRouteChange)

    return () => {
      router.events.off('routeChangeStart', onRouteChange)
      router.events.off('hashChangeStart', onRouteChange)
    }
  }, [open, setOpen, router])

  useEffect(() => {
    function onKeyDown(event) {
      // Check if 'k' is pressed along with the metaKey or ctrlKey
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        // Toggle the dialog open state
        setOpen((prevOpen) => !prevOpen)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [setOpen])

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false)
        autocomplete.setQuery('')
      }}
      className={clsx('fixed inset-0 z-50', className)}
    >
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur" />

      <div className="fixed inset-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-20 md:py-32 lg:px-8 lg:py-[15vh]">
        <Dialog.Panel className="mx-auto overflow-hidden rounded-xl bg-white shadow-xl dark:bg-slate-800 dark:ring-1 dark:ring-slate-700 sm:max-w-2xl">
          <div {...autocomplete.getRootProps({})}>
            <form
              ref={formRef}
              {...autocomplete.getFormProps({
                inputElement: inputRef.current,
              })}
            >
              <SearchInput
                ref={inputRef}
                autocomplete={autocomplete}
                autocompleteState={autocompleteState}
                onClose={() => setOpen(false)}
              />
              <div className="flex  items-center border-t border-slate-200 bg-white px-4 py-3 empty:hidden dark:border-slate-400/10 dark:bg-slate-800">
                <span className="mr-4 text-sm font-semibold text-slate-500 dark:text-white/50">
                  Role
                </span>
                <div className="flex gap-x-2">
                  <FilterButton
                    label="Requestor"
                    isActive={roleFilter.includes('Requestor')}
                    onClick={() => toggleFilter('Requestor', 'role')}
                  />
                  <FilterButton
                    label="Provider"
                    isActive={roleFilter.includes('Provider')}
                    onClick={() => toggleFilter('Provider', 'role')}
                  />
                </div>
              </div>
              <div className="flex flex-wrap  items-center border-t border-slate-200 bg-white px-4 py-3 empty:hidden dark:border-slate-400/10 dark:bg-slate-800">
                <span className="mr-4 text-sm font-semibold text-slate-500 dark:text-white/50">
                  Type
                </span>
                <div className="flex gap-x-2">
                  <FilterButton
                    label="Example"
                    isActive={typefilter.includes('example')}
                    onClick={() => toggleFilter('example', 'type')}
                  />
                  <FilterButton
                    label="Guide"
                    isActive={typefilter.includes('guide')}
                    onClick={() => toggleFilter('guide', 'type')}
                  />
                  <FilterButton
                    label="Tutorial"
                    isActive={typefilter.includes('tutorial')}
                    onClick={() => toggleFilter('tutorial', 'type')}
                  />
                  <FilterButton
                    label="API Reference"
                    isActive={typefilter.includes('reference')}
                    onClick={() => toggleFilter('reference', 'type')}
                  />
                </div>
              </div>
              <div ref={panelRef} {...autocomplete.getPanelProps({})}>
                {autocompleteState.collections && (
                  <SearchResults
                    autocomplete={autocomplete}
                    query={autocompleteState.query}
                    collection={autocompleteState.collections[0]}
                    roleFilter={roleFilter}
                    typeFilter={typefilter}
                  />
                )}
              </div>
            </form>
            <div className="flex items-center border-t px-4 py-4 text-sm font-semibold text-gray-400">
              <div className="flex flex-col gap-y-2">Keyboard Controls</div>
              <div className=" ml-auto flex items-center gap-x-2">
                <div className=" flex items-center gap-x-1">
                  <div className="rounded-md   bg-lightbluedarker px-2 py-1 text-gray-500 dark:bg-darkcontent dark:text-white">
                    <ArrowSmallUpIcon className="h-4 w-4" />
                  </div>
                  <div className="rounded-md   bg-lightbluedarker px-2 py-1 text-gray-500 dark:bg-darkcontent dark:text-white">
                    <ArrowSmallDownIcon className="h-4 w-4" />
                  </div>
                  <span className="ml-1.5">Move</span>
                </div>
                <div className="flex gap-x-4  px-4 text-sm font-semibold text-gray-400">
                  <div className=" flex items-center gap-x-1">
                    <div className="rounded-md   bg-lightbluedarker px-2 py-1 text-gray-500 dark:bg-darkcontent dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        version="1.1"
                        className="h-4 w-4 opacity-70"
                      >
                        <g
                          id="🔍-System-Icons"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="ic_fluent_arrow_enter_24_regular"
                            fill="#212121"
                            fill-rule="nonzero"
                          >
                            <path
                              d="M21.25,4 C21.6642136,4 22,4.33578644 22,4.75 L22,4.75 L22,11.25 C22,13.3210678 20.3210678,15 18.25,15 L18.25,15 L4.58583574,15 L8.30516583,18.7196699 C8.57143239,18.9859365 8.59563844,19.4026002 8.37778398,19.6962117 L8.30516583,19.7803301 C8.03889927,20.0465966 7.62223558,20.0708027 7.32862409,19.8529482 L7.24450566,19.7803301 L2.24450566,14.7803301 C1.97823909,14.5140635 1.95403304,14.0973998 2.1718875,13.8037883 L2.24450566,13.7196699 L7.24450566,8.71966991 C7.53739888,8.4267767 8.01227261,8.4267767 8.30516583,8.71966991 C8.57143239,8.98593648 8.59563844,9.40260016 8.37778398,9.69621165 L8.30516583,9.78033009 L4.58583574,13.5 L18.25,13.5 C19.440864,13.5 20.4156449,12.5748384 20.4948092,11.4040488 L20.5,11.25 L20.5,4.75 C20.5,4.33578644 20.8357864,4 21.25,4 Z"
                              id="🎨-Color"
                            ></path>
                          </g>
                        </g>
                        <script xmlns="" />
                      </svg>
                    </div>
                    <span className="ml-1.5">Select</span>
                  </div>
                  <div className=" flex items-center gap-x-1 ">
                    <div className="rounded-md   bg-lightbluedarker px-2 py-1 text-gray-500 dark:bg-darkcontent dark:text-white">
                      {modifierKey}
                    </div>
                    <div className="rounded-md   bg-lightbluedarker px-2 py-1 text-gray-500 dark:bg-darkcontent dark:text-white">
                      K
                    </div>
                    <span className="ml-1.5">Quit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
function useSearchProps() {
  let buttonRef = useRef()
  let [open, setOpen] = useState(false)

  return {
    buttonProps: {
      ref: buttonRef,
      onClick() {
        setOpen(true)
      },
    },
    dialogProps: {
      open,
      setOpen(open) {
        let { width, height } = buttonRef.current.getBoundingClientRect()
        if (!open || (width !== 0 && height !== 0)) {
          setOpen(open)
        }
      },
    },
  }
}

export function Search() {
  let [modifierKey, setModifierKey] = useState()
  let { buttonProps, dialogProps } = useSearchProps()

  useEffect(() => {
    setModifierKey(
      /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl '
    )
  }, [])

  return (
    <>
      <button
        type="button"
        className="group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded md:py-1.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-lightgray md:hover:ring-primaryhover dark:md:ring-inset dark:md:ring-white/50 dark:md:hover:ring-slate-500 lg:w-64"
        {...buttonProps}
      >
        <SearchIcon className="h-4 w-4 flex-none fill-lightgray dark:fill-white/50  " />
        <span className="sr-only md:not-sr-only md:ml-2 md:text-lightgray md:dark:text-white/70">
          Search
        </span>
        {modifierKey && (
          <kbd className="ml-auto hidden gap-x-2 text-xs  font-medium text-lightgray  dark:text-white/70 md:flex">
            <kbd className="rounded border border-lightgray px-2 py-0.5 font-sans dark:border-slate-500 dark:border-white/50">
              {modifierKey}
            </kbd>
            <kbd className="rounded border border-lightgray px-2 py-0.5 font-sans dark:border-slate-500 dark:border-white/50">
              K
            </kbd>
          </kbd>
        )}
      </button>
      <SearchDialog {...dialogProps} />
    </>
  )
}
