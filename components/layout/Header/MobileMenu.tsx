import { cn } from '@/lib/utils'
import { MenuIcon } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { Button, buttonVariants } from '@/components/ui/button'
import { ImageField, isFilled } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import { MainNavigationDocumentDataNavigationlinksItem } from '@/prismicio-types'

type MobileMenuProps = {
  className?: string
  navigation: Array<MainNavigationDocumentDataNavigationlinksItem>
  logo: ImageField | undefined
}

const MobileMenu = ({ navigation, className, logo }: MobileMenuProps) => {
  return (
    <div className={cn('md:hidden text-primary-foreground', className)}>
      <Sheet>
        <SheetTrigger className={cn(buttonVariants({ variant: 'link' }))}>
          <MenuIcon />
          <span className="sr-only">Open Menu</span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="flex justify-center">
              <Link href="/">
                <SheetTitle className="font-bold font-heading text-primary text-4xl flex flex-col items-center">
                  {isFilled.image(logo) && (
                    <PrismicNextImage
                      field={logo}
                      className="inline w-12 h-12"
                    />
                  )}
                  Jamie Whitmann
                </SheetTitle>
              </Link>
            </div>
          </SheetHeader>
          <ul className="mt-8 grid gap-y-4">
            {navigation.map((item, i) => {
              return (
                <li key={`mobile-${item.menuitem.link_type}-${i}`}>
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
            <li>
              <SheetClose asChild>
                <Button asChild variant={'default'} className="flex">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </SheetClose>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileMenu
