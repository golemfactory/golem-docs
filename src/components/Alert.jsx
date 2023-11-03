import { DangerIcon } from './icons/DangerIcon'
import { InfoIcon } from './icons/InfoIcon'
import { SuccessIcon } from './icons/SuccessIcon'
import { WarningIcon } from './icons/WarningIcon'

export function Alert({ children, level }) {
  return (
    <div
      className={`my-6 rounded-md  border text-base
    ${level === 'warning' ? '  border-[#C9885C] dark:border-opacity-30' : ''}
    ${level === 'info' ? '  border-[#678AAA] dark:border-opacity-30' : ''}
    ${level === 'success' ? '  border-[#64A37C] dark:border-opacity-30' : ''}
    ${level === 'danger' ? ' border-[#92344A] dark:border-opacity-30' : ''}
    `}
    >
      <div
        className={`rounded-t-md text-dark dark:text-white
      ${level === 'info' ? '  bg-info dark:bg-darkprimary ' : ''}
      ${level === 'warning' ? '  bg-warning dark:bg-[#df9606]' : ''}
      ${level === 'success' ? '  bg-success dark:bg-[#208047]' : ''}
      ${level === 'danger' ? ' border-red-300 bg-red-100  dark:bg-[#c01616]' : ''}
       py-3`}
      >
        <span className="flex items-center px-4 font-semibold capitalize dark:text-white">
          {level === 'info' && (
            <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#678AAA] dark:bg-[#3e678e] ">
              <InfoIcon className="h-3 w-3 fill-[#ADDDEC]" />
            </div>
          )}
          {level === 'warning' && (
            <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#C9885C] dark:bg-[#b9784d] ">
              <WarningIcon className="h-3 w-3 fill-[#FFD9BE]" />
            </div>
          )}
          {level === 'danger' && (
            <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#92344A] dark:bg-[#823144] ">
              <DangerIcon className="h-3 w-3 fill-[#FFC1CE]" />
            </div>
          )}
          {level === 'success' && (
            <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#64A37C] ">
              <SuccessIcon className="h-3 w-3 fill-[#D4EADD]" />
            </div>
          )}

          {level}
        </span>
      </div>
      <div className="px-4">{children}</div>
    </div>
  )
}
