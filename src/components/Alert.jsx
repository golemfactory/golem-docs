import { DangerIcon } from './icons/DangerIcon'
import { InfoIcon } from './icons/InfoIcon'
import { SuccessIcon } from './icons/SuccessIcon'
import { WarningIcon } from './icons/WarningIcon'

export function Alert({ children, level }) {
  return (
    <div
      className={`my-6 rounded-md  border text-xs 
    ${level === 'warning' ? '  border-[#C9885C]' : ''}
    ${level === 'info' ? '  border-[#678AAA]' : ''}
    ${level === 'success' ? '  border-[#64A37C]' : ''}
    ${level === 'danger' ? ' border-[#92344A]' : ''}
    `}
    >
      <div
        className={`rounded-t-md text-dark dark:text-white
      ${level === 'info' ? '  bg-info' : ''}
      ${level === 'warning' ? '  bg-warning' : ''}
      ${level === 'success' ? '  bg-success' : ''}
      ${level === 'danger' ? ' border-red-300 bg-red-100' : ''}
       py-3`}
      >
        <span className="flex items-center px-4 font-semibold capitalize dark:text-white dark:opacity-50">
          {level === 'info' && (
            <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#678AAA] ">
              <InfoIcon className="h-3 w-3 fill-[#ADDDEC]" />
            </div>
          )}
          {level === 'warning' && (
            <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#C9885C] ">
              <WarningIcon className="h-3 w-3 fill-[#FFD9BE]" />
            </div>
          )}
          {level === 'danger' && (
            <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#92344A] ">
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
