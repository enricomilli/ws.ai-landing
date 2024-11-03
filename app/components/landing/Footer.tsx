import { socials } from '@/constants/constants'
import Section from './Section'
import { Link } from '@remix-run/react'
import WSIcon from '@/assets/svg/WSIcon'

const Footer = () => {
    return (
        <Section crosses className={`!py-10 px-14 md:px-24 lg:px-32`}>
            <div className='mx-auto flex w-full items-center justify-center gap-10 max-sm:flex-col-reverse max-sm:gap-6 sm:justify-between'>
                <p className='flex w-[300px] flex-row flex-nowrap items-center justify-start gap-5'>
                    <WSIcon className='h-10 w-10 fill-current' />© {new Date().getFullYear()} All rights reserved.
                </p>

                <div className='flex w-[300px] flex-row items-center justify-center gap-5'>
                    <Link to='/privacy-policy' className='caption hover:underline lg:block'>
                        Privacy Policy
                    </Link>

                    <div className='divider divider-horizontal'></div>
                    <Link to='/terms-of-service' className='caption hover:underline lg:block'>
                        Terms Of Service
                    </Link>
                </div>

                <ul className={`flex w-[300px] flex-wrap items-end justify-end gap-5`}>
                    {socials.map(item => (
                        <Link
                            to={item.url}
                            key={item.id}
                            className='flex flex-row flex-nowrap items-baseline justify-center gap-2 hover:underline'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Contact us
                            <item.iconUrl height={16} width={16} />
                        </Link>
                    ))}
                </ul>
            </div>
        </Section>
    )
}

export default Footer
