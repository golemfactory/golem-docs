import { LikeIcon } from './icons/LikeIcon'
import { DislikeIcon } from './icons/DislikeIcon'
export const Feedback = () => {
  return (
    <div className="my-6 w-full rounded-md bg-lightblue py-12 text-center">
      <h1 className="text-2xl font-bold">Was this article helpful?</h1>
      <div className="mt-6 flex justify-center">
        <button className="mr-4 flex  items-center rounded-md border border-primary px-4 py-2 text-primary">
          <LikeIcon className="mr-2 h-5 w-5 fill-primary" />
          Yes
        </button>
        <button className="flex items-center rounded-md border border-primary px-4 py-2 text-primary">
          <DislikeIcon className="mr-2 h-5 w-5 fill-primary" />
          No
        </button>
      </div>
    </div>
  )
}

import { Dialog, Transition } from '@headlessui/react'
import { useState, useEffect, Fragment } from 'react'

export function FeedbackButtons({ children, identifier }) {
  const [isOpen, setOpen] = useState(false)
  const [feedback, setFeedback] = useState(false)
  const [showThanks, setShowThanks] = useState(false)

  useEffect(() => {
    if (identifier) {
      const localStorageFeedback = localStorage.getItem(identifier)
      if (localStorageFeedback) setFeedback(localStorageFeedback)
    }
  }, [identifier])

  useEffect(() => {
    const localStorageFeedback = localStorage.getItem(identifier)
    if (localStorageFeedback) setFeedback(localStorageFeedback)
  }, [])

  const handleClick = (answer) => {
    setFeedback(answer)
    localStorage.setItem(identifier, answer)
    setShowThanks(true)
    setTimeout(() => {
      setOpen(false)
      setShowThanks(false)
    }, 4000)
  }

  return (
    <div className="-mt-4">
      <p className="mr-4 text-center font-semibold text-black dark:text-white">
        Was this helpful?
      </p>

      <div className="flex justify-center text-xs">
        {showThanks ? (
          <p className="-my-2 pb-4 text-green-500">Thanks for your feedback!</p>
        ) : (
          <>
            <button
              onClick={() => handleClick('yes')}
              className={`group-peer group mr-4 flex items-center rounded-md border border-primary px-4 py-2 dark:border-darkprimary ${
                feedback === 'yes'
                  ? 'bg-primaryhover text-white dark:bg-darkprimary'
                  : 'text-primary hover:bg-primaryhover hover:text-white dark:text-white dark:hover:bg-darkprimary'
              }`}
            >
              <LikeIcon
                className={`mr-2 h-5 w-5 ${
                  feedback === 'yes'
                    ? 'fill-white'
                    : 'fill-primary group-hover:fill-white dark:fill-darkprimary'
                }`}
              />
              Yes
            </button>
            <button
              onClick={() => setOpen(true)}
              className={`group-peer group mr-4 flex items-center rounded-md border border-primary px-4 py-2 dark:border-darkprimary ${
                feedback === 'no'
                  ? 'bg-primaryhover text-white dark:bg-darkprimary'
                  : 'text-primary hover:bg-primaryhover hover:text-white dark:text-white dark:hover:bg-darkprimary'
              }`}
            >
              <DislikeIcon
                className={`mr-2 h-5 w-5 ${
                  feedback === 'no'
                    ? 'fill-white'
                    : 'fill-primary group-hover:fill-white dark:fill-darkprimary'
                }`}
              />
              No
            </button>
          </>
        )}
      </div>
      <FeedbackModal
        identifier={identifier}
        open={isOpen}
        setOpen={setOpen}
        showThanks={showThanks}
        setShowThanks={setShowThanks}
      />
    </div>
  )
}

import { useRef } from 'react'

export const FeedbackModal = ({
  identifier,
  open,
  setOpen,
  showThanks,
  setShowThanks,
}) => {
  const cancelButtonRef = useRef(null)

  const handleFeedback = () => {
    if (identifier) {
      localStorage.setItem(identifier, 'no')
      setOpen(false)
      setShowThanks(true)
    } else {
      console.error('No identifier provided for feedback modal')
    }
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex lg:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all dark:bg-slate-800 sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-semibold leading-6 text-gray-900 dark:text-white"
                    >
                      We value your feedback
                    </Dialog.Title>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Please tell us what could be improved
                    </p>
                    <div className="">
                      <div className="mt-4">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="block w-full rounded-md border-0 p-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:bg-slate-800 dark:text-white dark:ring-gray-500 sm:text-sm sm:leading-6"
                          placeholder="Enter your feedback here"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-base font-medium text-white hover:bg-primaryhover dark:bg-darkprimary dark:hover:bg-darkprimary/80 sm:col-start-2"
                    onClick={() => handleFeedback()}
                  >
                    Send feedback
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
