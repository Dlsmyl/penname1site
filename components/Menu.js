import * as React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { HiMenu } from 'react-icons/hi'
import PrismicNextLink from '../components/PrismicNextLink'
const HeadlessMenu = ({ links }) => {
  return (
    <div className="w-56 text-right md:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium bg-primary rounded-md bg-opacity-0 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-opacity-75">
            <span className="sr-only">Menu</span>
            <HiMenu
              className="w-5 h-5 text-primary-content"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white bg-opacity-90 rounded-md shadow-lg ring-1 ring-primary-content ring-opacity-5 focus:outline-none">
            <div className="flex flex-col divide-y text-primary-content ">
              {links.length &&
                links.map(link => {
                  return (
                    <Menu.Item
                      key={link.menuitem.id}
                      className="hover:bg-accent min-h-[45px] flex justify-center items-center"
                    >
                      <PrismicNextLink field={link.menuitem}>
                        {link.menuitemtext}
                      </PrismicNextLink>
                    </Menu.Item>
                  )
                })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
export default HeadlessMenu
