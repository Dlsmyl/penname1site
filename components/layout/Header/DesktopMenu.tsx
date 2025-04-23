import { PrismicNextLink } from '@prismicio/next'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { MainNavigationDocumentDataNavigationlinksItem } from '@/prismicio-types'

type DesktopMenuProps = {
  navigation: Array<MainNavigationDocumentDataNavigationlinksItem>
}
const DesktopMenu = ({ navigation }: DesktopMenuProps) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-x-3">
        {navigation.map((item, i) => {
          return (
            <li key={item.menuitem.link_type + i}>
              <PrismicNextLink
                field={item.menuitem}
                className={cn(
                  buttonVariants({
                    variant: item?.menuitem?.variant || 'default',
                  })
                )}
              >
                {item.menuitemtext}
              </PrismicNextLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default DesktopMenu
