import { heroNotificationImages, HeroContent } from '@/constants/constants'

const Notification = (props: { className: string; title: string }) => {
    const { className, title } = props
    return (
        <div
            className={`${className} z-10 flex items-center gap-5 rounded-2xl border border-secondary/40 bg-secondary/70 p-4 pr-6 shadow-xl backdrop-blur`}
        >
            <img src={HeroContent.linkedIn} alt='LinkedIn Icon' className='h-16 w-16' />
            <div className='flex-1'>
                <h6 className='mb-1 font-semibold text-primary'>{title}</h6>
                <div className='flex items-center justify-between'>
                    <ul className='-m-1 flex'>
                        {heroNotificationImages.map((item, index) => (
                            <li
                                key={index}
                                className='flex h-6 w-6 overflow-hidden rounded-full border-2 border-primary-foreground'
                            >
                                <img src={item} className='h-auto w-[20px]' alt={item} />
                            </li>
                        ))}
                    </ul>
                    <div className='body-2 text-primary'>1m ago</div>
                </div>
            </div>
        </div>
    )
}

export default Notification
