import { createClient } from '@/prismicio'
import Navbar from '@/components/layout/Header/Navbar'
import { JSX } from 'react'

const Header = async (): Promise<JSX.Element> => {
  const client = createClient()
  const navigation = await client.getSingle('main_navigation')
  return (
    <>
      <Navbar
        logo={navigation.data.logo}
        navigation={navigation.data.navigationlinks}
        social={navigation.data.sociallinks}
      />
    </>
  )
}

export default Header
