import { LikeIcon } from './icons/LikeIcon'
import { DislikeIcon } from './icons/DislikeIcon'
import { event } from 'nextjs-google-analytics'

const handleFeedback = (
  url,
  identifier,
  setOpen,
  setShowThanks,
  helpful,
  article
) => {
  if (!identifier) {
    console.error('No identifier provided for feedback modal')
    return
  }

  localStorage.setItem(identifier, helpful ? 'yes' : 'no')
  setOpen(false)
  setShowThanks(true)

  // Google Analytics event tracking
  event({
    action: 'submit_feedback',
    category: article ? 'article' : 'troubleshooting',
    label: identifier,
    value: helpful ? 1 : 0, // 1 for helpful, 0 for not helpful
  })
}

import { Dialog, Transition } from '@headlessui/react'
import { useState, useEffect, Fragment } from 'react'

export function FeedbackButtons({ children, identifier, article = false }) {
  const [isOpen, setOpen] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [showThanks, setShowThanks] = useState(false)
  const [loading, setLoading] = useState(false)
  const url = article
    ? '/api/feedback/article'
    : '/api/feedback/troubleshooting'
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

  if (process.env.NEXT_PUBLIC_SHOW_FEEDBACK_BUTTONS === 'true') {
    return (
      <div
        className={`
    ${
      article
        ? 'my-6 w-full rounded-md bg-lightblue py-12 text-center dark:bg-darkcontent'
        : '-mt-4'
    }
    `}
      >
        <p
          className={`
        mb-4
        mr-4 text-center font-semibold text-black dark:text-white`}
        >
          Was this helpful?
        </p>

        <div className="flex justify-center text-xs">
          {showThanks ? (
            <p className="prose -my-2 pb-4 text-green-500">
              Thanks for your feedback!
            </p>
          ) : (
            <>
              <button
                onClick={() =>
                  handleFeedback(
                    url,
                    identifier,
                    feedback,
                    setOpen,
                    setShowThanks,
                    true,
                    setLoading
                  )
                }
                className={`group-peer group prose mr-4 flex items-center rounded-md border border-primary px-4 py-2 dark:border-darkprimary ${
                  feedback === 'yes'
                    ? 'bg-primaryhover text-white dark:bg-darkprimary'
                    : 'text-primary hover:bg-primaryhover hover:text-white dark:text-white dark:hover:bg-darkprimary'
                }
              
              
              `}
              >
                {loading ? (
                  <svg
                    aria-hidden="true"
                    class="mr-2 h-5 w-5 animate-spin fill-primary text-gray-200 dark:fill-white dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  <>
                    <LikeIcon
                      className={`mr-2 h-5 w-5 ${
                        feedback === 'yes'
                          ? 'fill-white'
                          : 'fill-primary group-hover:fill-white dark:fill-darkprimary'
                      }`}
                    />
                    Yes
                  </>
                )}
              </button>
              <button
                onClick={() => setOpen(true)}
                className={`group-peer group prose mr-4 flex items-center rounded-md border border-primary px-4 py-2 dark:border-darkprimary ${
                  feedback === 'no'
                    ? 'bg-primaryhover text-white dark:bg-darkprimary'
                    : 'text-primary hover:bg-primaryhover hover:text-white dark:text-white dark:hover:bg-darkprimary'
                }`}
              >
                {loading ? (
                  <svg
                    aria-hidden="true"
                    class=" h-5 w-5 animate-spin fill-primary text-gray-200 dark:fill-white dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  <>
                    <DislikeIcon
                      className={`mr-2 h-5 w-5 ${
                        feedback === 'no'
                          ? 'fill-white'
                          : 'fill-primary group-hover:fill-white dark:fill-darkprimary'
                      }`}
                    />
                    No
                  </>
                )}
              </button>
            </>
          )}
        </div>
        <FeedbackModal
          url={url}
          identifier={identifier}
          open={isOpen}
          setOpen={setOpen}
          showThanks={showThanks}
          setShowThanks={setShowThanks}
          setLoading={setLoading}
        />
      </div>
    )
  } else {
    return null
  }
}

import { useRef } from 'react'

export const FeedbackModal = ({
  url,
  identifier,
  open,
  setOpen,
  showThanks,
  setShowThanks,
  setLoading,
}) => {
  const cancelButtonRef = useRef(null)
  const [feedback, setFeedback] = useState('')

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
          <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0 lg:min-h-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all dark:bg-darkcontent sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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
                          className="block w-full rounded-md border-0 p-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:bg-darkcontent dark:text-white dark:ring-gray-500 sm:text-sm sm:leading-6"
                          placeholder="Enter your feedback here"
                          onChange={(e) => setFeedback(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-base font-medium text-white hover:bg-primaryhover dark:bg-darkprimary dark:hover:bg-darkprimary/80 sm:col-start-2"
                    onClick={() =>
                      handleFeedback(
                        url,
                        identifier,
                        feedback,
                        setOpen,
                        setShowThanks,
                        false,
                        setLoading
                      )
                    }
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
