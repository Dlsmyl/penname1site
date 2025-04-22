import Link from 'next/link'
import React from 'react'
import { type MainNavigationDocument } from '@/prismicio-types'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'

const Navbar = ({ navigation }: { navigation: MainNavigationDocument }) => {
  const { data } = navigation

  return (
    <div className="flex justify-between items-center mx-auto py-3 px-2 md:px-6">
      <div
        className="flex justify-between items-center text-primary-content"
        id="branding"
      >
        <Link href="/">
          {data.logo.url ? (
            <PrismicNextImage
              field={data.logo}
              imgixParams={{ maxW: 100, maxH: 100, h: 100 }}
              width={100}
              height={100}
            />
          ) : (
            'Jamie Whitmann'
          )}
          <span className="sr-only">Return to Homepage</span>
        </Link>
      </div>
      <div className="mr-6 lg:mr-0">
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={'ghost'} size={'icon'}>
                <MenuIcon className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation</SheetTitle>
            </SheetHeader>
            <SheetContent className="p-8">
              <ul className="mt-8 grid gap-y-4">
                {data.navigationlinks.map((item, i) => {
                  return (
                    <li key={`${item?.menuitemtext}${i}` || i}>
                      <SheetClose asChild>
                        <Button asChild variant={'outline'} className="flex">
                          <PrismicNextLink field={item.menuitem}>
                            {item.menuitemtext}
                          </PrismicNextLink>
                        </Button>
                      </SheetClose>
                    </li>
                  )
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
        <nav className="hidden lg:block min-w-lg">
          <ul className="flex justify-evenly">
            {data.navigationlinks.map((item, i) => {
              return (
                <li key={`${i}${item?.menuitemtext}` || i}>
                  <Button asChild variant={'ghost'} className="flex">
                    <PrismicNextLink field={item.menuitem}>
                      {item.menuitemtext}
                    </PrismicNextLink>
                  </Button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
