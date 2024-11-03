import { motion } from 'framer-motion'
import Section from '../Section'
import { Link } from '@remix-run/react'
import { installStep } from '@/constants/constants'
import { Button } from '@/components/ui/button'
import { Bot, Download, FolderUp, HandCoins } from 'lucide-react'

const StepsToDownload = () => {
    const iconSize = 30
    return (
        <Section crosses={true} id='how-it-works' className='z-10'>
            <div className='mx-auto flex flex-col-reverse justify-around gap-5 md:items-center lg:flex-row'>
                <div>
                    <h1 className='mb-8 text-3xl font-semibold'>Its as easy as</h1>
                    <ul className='flex h-[400px] w-full max-w-[900px] flex-col place-items-start justify-start gap-10'>
                        <motion.li
                            className='flex flex-row flex-nowrap items-center justify-center gap-4'
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.2,
                            }}
                            viewport={{
                                once: true,
                            }}
                        >
                            <Download size={iconSize} />
                            <div className='text-left'>
                                <h3 className='text-xl font-medium'>1. Install Extension</h3>
                                <p className='body-2 w-full'>Download from Chrome Web Store</p>
                            </div>
                        </motion.li>
                        <motion.li
                            className='flex flex-row flex-nowrap items-center justify-center gap-4'
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.4,
                            }}
                            viewport={{
                                once: true,
                            }}
                        >
                            <FolderUp size={iconSize} />
                            <div className='text-left'>
                                <h3 className='text-xl font-medium'>2. Upload CV</h3>
                                <p className='body-2 w-full'>Assists A.I. in writing relevant responses</p>
                            </div>
                        </motion.li>
                        <motion.li
                            className='flex flex-row flex-nowrap items-center justify-center gap-4'
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.6,
                            }}
                            viewport={{
                                once: true,
                            }}
                        >
                            <Bot size={iconSize} />
                            <div>
                                <h3 className='text-xl font-medium'>3. Start Worksync.AI</h3>
                                <p className='body-2 w-full'>Watch as your applications begin to be automated!</p>
                            </div>
                        </motion.li>
                        <motion.li
                            className='flex flex-row flex-nowrap items-center justify-center gap-4'
                            data-content='✓'
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.8,
                            }}
                            viewport={{
                                once: true,
                            }}
                        >
                            <HandCoins size={iconSize} />
                            <div className='text-left'>
                                <h3 className='text-xl font-medium'>4. Job Offers Received!</h3>
                                <p className='body-2 w-full'>Get a nice return on your investment</p>
                            </div>
                        </motion.li>
                        <Link to='https://app.worksync.ai/purchase' className='w-full md:w-fit'>
                            <Button size={'lg'}>Try it now</Button>
                        </Link>
                    </ul>
                </div>
                <div className='h-auto max-w-[700px] overflow-hidden rounded-xl border border-primary-foreground'>
                    <video src={installStep.video} className='z-10 w-full' autoPlay playsInline controls loop>
                        <track kind='captions' src='empty.vtt' label='English' />
                    </video>
                </div>
            </div>
        </Section>
    )
}

export default StepsToDownload
