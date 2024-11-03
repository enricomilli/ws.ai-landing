import { useState } from 'react'
import { Link } from '@remix-run/react'
import { navigation } from '@/constants/constants'
import MenuSvg from '@/assets/svg/MenuSvg'
import WSIcon from '@/assets/svg/WSIcon'
import WSFontFace from '@/assets/svg/WSFontFace'
import { Button } from '@/components/ui/button'
import ThemeController from './ThemeController'

const Nav = () => {
    const [openNavigation, setOpenNavigation] = useState(false)

    const toggleNavigation = () => setOpenNavigation(!openNavigation)
    const handleClick = () => setOpenNavigation(false)

    return (
        <div
            className={`border-neutral motion-preset-slide-down-lg fixed left-0 right-0 top-3 z-50 mx-auto flex w-[93vw] items-center gap-2 rounded-xl border bg-background/80 px-5 py-5 motion-delay-1000 max-lg:py-4 md:top-4 lg:w-[90vw] lg:px-[45px] 2xl:px-[65px]`}
        >
            <Logo />
            <Navigation openNavigation={openNavigation} handleClick={handleClick} />
            <LoginButton />
            <MobileMenuButton openNavigation={openNavigation} toggleNavigation={toggleNavigation} />
            <ThemeController />
        </div>
    )
}

const Logo = () => (
    <Link to='/' className='mr-auto flex h-fit w-fit flex-row items-center justify-center gap-2'>
        <WSIcon className='flex h-auto w-[55px] flex-row items-center fill-current md:w-[50px]' />
        <WSFontFace className='hidden fill-current pt-1 md:flex md:w-[170px] lg:w-[180px]' />
    </Link>
)

const Navigation = (props: { openNavigation: boolean; handleClick: () => void }) => {
    const { openNavigation, handleClick } = props
    return (
        <div
            className={`duration-250 transition-all lg:visible lg:static lg:mx-0 lg:flex lg:w-auto lg:-translate-y-0 lg:border-none lg:bg-transparent lg:opacity-100 ${
                openNavigation ? 'flex' : 'invisible -translate-y-10 opacity-0'
            } bg-base-200 border-neutral fixed bottom-0 right-[3.5vw] top-[4.7rem] h-fit w-fit rounded-xl border bg-background md:top-[6rem]`}
        >
            <div className='relative z-10 flex w-fit flex-col gap-2 p-3 lg:flex-row lg:p-0'>
                {navigation.map((item, index) => (
                    <NavLink key={index} item={item} handleClick={handleClick} />
                ))}
            </div>
        </div>
    )
}

const NavLink = (props: {
    item: {
        itemId?: string | undefined
        url: string
        onlyMobile?: undefined | boolean
        title: string
    }
    handleClick: () => void
}) => {
    const { item, handleClick } = props

    return (
        <Link id={item.itemId} to={item.url} className={`${item.onlyMobile ? 'lg:hidden' : ''} w-full`}>
            <Button variant={'ghost'} onClick={handleClick}>
                {item.title}
            </Button>
        </Link>
    )
}

const LoginButton = () => (
    <Link to='https://app.worksync.ai/login' className='hidden lg:flex'>
        <Button variant={'outline'} className='bg-blur-sm'>
            Login
        </Button>
    </Link>
)

const MobileMenuButton = ({
    openNavigation,
    toggleNavigation,
}: {
    openNavigation: boolean
    toggleNavigation: () => void
}) => (
    <Button variant={'outline'} className='bg-blur-sm lg:hidden' onMouseDown={toggleNavigation}>
        <MenuSvg openNavigation={openNavigation} />
    </Button>
)

export default Nav
