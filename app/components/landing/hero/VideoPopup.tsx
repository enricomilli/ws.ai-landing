import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { HeroContent } from '@/constants/constants'

export function VideoPopup() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline' size={'lg'}>
                    {HeroContent.seeMoreLink}
                </Button>
            </DialogTrigger>
            <DialogContent className='max-w-5xl rounded'>
                <DialogHeader>
                    <DialogTitle>Extension Demo Video</DialogTitle>
                    <DialogDescription>See how our extension can help you with any application</DialogDescription>
                </DialogHeader>
                <div className='grid h-full w-full place-items-center items-center overflow-hidden rounded-xl'>
                    <iframe
                        title='WorkSync.AI Demo Video'
                        src='https://www.youtube.com/embed/atafna-Dpmc'
                        className='aspect-video h-full w-full'
                    ></iframe>
                </div>
            </DialogContent>
        </Dialog>
    )
}
