import { useState, Fragment } from 'react'
import { Earth, ChevronDownIcon } from 'components/icons'
import { Popover, Transition } from '@headlessui/react'

const languages = [
  {
    value: 'en',
    name: 'English',
  },
  {
    value: 'es',
    name: 'Español',
  },
]

export default function LanguageSelectBox({ className }) {
  const [curLanguage, setCurLanguage] = useState(languages[0])
  return (
    <div className={className}>
      <Popover className="relative">
        {({ close }) => (
          <>
            <Popover.Button className="bg-none flex items-center outline-none">
              <Earth className="w-[17px] h-17px] mr-2" />
              <span className="text-grey-500 hover:text-grey-100">
                {curLanguage.name}
              </span>
              <ChevronDownIcon className="w-[9px] h-[5px] ml-1" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-in duration-150"
              enterFrom="opacity-0 translate-y-1 scale-[0.85]"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-1 scale-[0.85]"
            >
              <Popover.Panel className="absolute z-10 mt-3">
                <div className="overflow-hidden rounded-lg shadow-dialog py-2">
                  {languages.map((language) => (
                    <p
                      key={language.value}
                      onClick={() => {
                        setCurLanguage(language)
                        close()
                      }}
                      className="cursor-pointer text-primary leading-[2.4] font-extralight px-[23px] py-1.5 hover:bg-grey-200 hover:text-grey-500"
                    >
                      {language.name}
                    </p>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
