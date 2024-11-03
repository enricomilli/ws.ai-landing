// Notification
import Person1 from '../assets/img/person-1.png'
import Person2 from '../assets/img/person-2.png'
import Person3 from '../assets/img/person-3.png'
import LinkedInIcon from '../assets/img/linkedIn-icon.png'

// Hero Proof
import heroProofUserImage from '../assets/img/Elif-Profile.webp'

// How it works
import ApplyBotDemoVideo from '../assets/video/ApplyBot-Demo.mp4'
import MassApplyOnLinkedVideo from '../assets/video/Mass-Applying-With-ApplyBot.mp4'
import autofillExampleVideo from '../assets/video/Autofill-Demo.mp4'
import chatFeatureImg from '../assets/img/Prompts-Feature-Img.webp'
import DashboardSC from '../assets/img/dashboard-sc.webp'
import { Fullscreen, Mails, MessageCircleCode, Sparkles, Unplug } from 'lucide-react'

// Installation
import InstallationVideo from '../assets/video/install-and-start.mp4'

// Hero
import HeroBackgroundImg from '../assets/img/hero-background-transparent.png'
import HeroVideoThumbnail from '../assets/img/ApplyBot-Demo-Cover.webp'

export const titleh1 = 'text-4xl md:text-5xl'

export const navigation = [
    {
        title: 'Reviews',
        url: '/#reviews',
        itemId: 'reviews-nav',
    },
    {
        title: 'How It Works',
        url: '/#how-it-works',
        itemId: 'how-it-works-nav',
    },
    {
        title: 'Pricing',
        url: '/#pricing',
        itemId: 'pricing-nav',
    },
    {
        title: 'Login',
        url: 'https://app.worksync.ai/login',
        onlyMobile: true,
    },
]

export const HeroContent = {
    title1: 'Take the 💩 out of job applications.',
    // title1: "Ready to find a job? 💼",
    title2: 'Meet the AI✨ that takes the 💩 out of job applications.',
    callout: `Our AI-powered extension significantly speeds up your job application process. Your time should be spent preparing for and smashing job interviews, not filling out repetitive forms.`,
    callToAction: 'Try it now',
    seeMoreLink: 'See it in action →',
    video: ApplyBotDemoVideo,
    backgroundImg: HeroBackgroundImg,
    thumbnail: HeroVideoThumbnail,
    linkedIn: LinkedInIcon,
}

export const heroNotificationImages = [Person1, Person2, Person3]

export const HeroProofContent = {
    caseTitle: 'Apply to more jobs and get better results.',
    personImg: heroProofUserImage,
    name: 'Elif O.',
    universityLogo: '',
    comment:
        'I found applying to even 10 jobs a day annoying, so I looked into solutions and I gave this extension a shot. I was applying to ~30 positions a day with the extension until I finally got a job. The extension genuinely made the whole process easier!',
    stars: 5,
}

// export const SpolightContent = {
//     title: "There is more competition than ever",
//     description: `Data from LinkedIn shows that workers in the U.K. and U.S are applying to 15% more roles compared to last year. As LinkedIn’s chief economist Karin Kimbrough notes: “There’s a whole energy around AI right now, and if you have these tools that are going to help you craft that perfect message with personalized suggestions, it really gives you a little bit more confidence in applying”. Worksync.AI is designed to help you apply to more jobs in less time, get you better results by winning the numbers game.
// `,
// };

export const reviews = [
    {
        name: 'Ethan W.',
        reviewText: 'Really useful while I was applying to jobs',
        stars: 5,
    },
    {
        name: 'Joshua J.',
        reviewText: 'The day after I gave this extension a test run I got 3 callbacks, basically effortless.',
        stars: 5,
    },
    {
        name: 'Gianfranco A.',
        reviewText:
            'Beta tester here, the extension completes LinkedIn Easy Apply applications accurately and it seems like they will expand to other platforms as well',
        stars: 5,
    },
    {
        name: 'Victor S.',
        reviewText:
            'Another beta tester here, the app quickly applied to all the Jobs on LinkedIn and it was effortless, it was awesome!',
        stars: 5,
    },

    {
        name: 'Sebastián F.',
        reviewText:
            'I stumbled upon the Job Search Companion and the appeal of autofilling everything directly through my Chrome browser was too good to pass up.',
        stars: 5,
    },
]

export const features = [
    {
        title: 'Apply To Dozens Of Relevant Jobs In Seconds With 1 Click',
        text: 'ApplyBot searches and applies to relevant LinkedIn EasyApply jobs with 1 click. It will continue applying until you stop it, or until it reaches the end of the search results. If you want to make sure its responses are correct, control the speed in the settings. Apply to the newest job opportunities efficiently and effortlessly.',
        actionText: "What's next?",
        backgroundUrl: '',
        iconUrl: Sparkles,
        contentType: 'video',
        content: MassApplyOnLinkedVideo,
        actionUrl: '#pricing',
    },
    {
        title: 'Autofill Job Applications With Artificial Intelligence',
        text: 'Avoid repetitive applications and burnout with A.I. autofill. Our autofill will write accurate, high quality responses in your application, increasing your chances of getting a job offer with next to no effort.',
        actionText: 'Explore',
        backgroundUrl: '',
        iconUrl: Unplug,
        contentType: 'video',
        content: autofillExampleVideo,
        actionUrl: '#how-it-works',
        reverse: true,
    },
    {
        title: 'Send Standout Applications With A.I. Prompts',
        text: 'Our chat interface comes with pre-made prompts that quickly creates or adapts a cover letter. Or, use it to get answers to any question. Simply choose a prompt that matches your goal, and our AI-powered tool will provide you with helpful responses based on your information and industry standards.',
        actionText: 'Get started',
        backgroundUrl: '',
        contentType: 'image',
        content: chatFeatureImg,
        iconUrl: MessageCircleCode,
        actionUrl: '#pricing',
    },

    {
        title: 'Create A Top CV For Free',
        text: 'Sign up for a free account to access detailed guides on crafting a standout CV, becoming a better candidate, and understanding what recruiters look for in applications. Access this via the dashboard when you sign up.',
        actionText: 'Learn more',
        backgroundUrl: '',
        contentType: 'image',
        content: DashboardSC,
        iconUrl: Fullscreen,
        actionUrl: '#how-it-works',
        reverse: true,
    },
]

export const installStep = {
    video: InstallationVideo,
    steps: ['Download'],
}

export const monthlyPricing = {
    id: '1',
    title: 'Job Search Companion',
    description: 'The best extension to autofill and mass apply on your favorite job boards.',
    hasPriceDesc: true,
    priceDescription: 'a month',
    price: '15.00',
    features: [
        'Start applying immediately after installation.',
        'Unlimited Job Application Submissions',
        'Expert-Selected A.I.',
        'Cancelable at anytime.',
    ],
    buttonText: 'Try it now',
    url: 'https://app.worksync.ai/purchase?subscription=monthly',
}

export const weeklyPricing = {
    id: '1',
    title: 'Job Search Companion',
    description: 'The best extension to autofill and mass apply on your favorite job boards.',
    hasPriceDesc: true,
    priceDescription: 'per week',
    price: '5.00',
    features: [
        'Start applying immediately after installation.',
        'Unlimited Job Application Submissions',
        'Expert-Selected A.I.',
        'Cancelable at anytime.',
    ],
    buttonText: 'Try it now',
    url: 'https://app.worksync.ai/purchase?subscription=weekly',
}

export const FAQsContent = [
    {
        question: 'How does it autofill job applications?',
        answer: 'Our extension reads job application forms and generates responses using the lastest model from OpenAI - GPT-4o.',
    },
    {
        question: 'How does it generate accurate responses?',
        answer: 'Our extension uses your information (CV) and Artifical Intelligence to generate accurate responses.',
    },
    {
        question: 'What A.I. Model does it use?',
        answer: "We're using the latest OpenAI GPT-4o model to power most of our A.I. related tasks.",
    },
    {
        question: 'What is ApplyBot?',
        answer: 'ApplyBot is a feature in the Job Search Companion that can submit LinkedIn EasyApply job applications on your behalf. You start it with a click of a button and it will take control of your browser and start submiting job applications until you stop it or it reaches the end of the results.',
    },
    {
        question: 'Does ApplyBot only work on LinkedIn EasyApply? ',
        answer: 'ApplyBot currently only works for LinkedIn EasyApply Job Applications. However, we are working hard to implement this feature on Indeed. Our autofill feature works on any job application website.',
    },
    {
        question: 'Will my LinkedIn Account get suspended?',
        answer: 'From dozens of testers and thousands of applications submitted, 0 users have been suspended. The extension is acting on your behalf and cannot be detected.',
    },
    {
        question: 'How is my privacy protected?',
        answer: 'Our services only use your information to complete applications accurately. We do not sell your data or use it for any other purpose.',
    },
    {
        question: 'What is the refund policy?',
        answer: "We don't offer refunds yet. However, if you want to test out the application, we have made a weekly plan for just $5.",
    },
]

export const socials = [
    // {
    //     id: "1",
    //     title: "Twitter",
    //     iconUrl: TwitterIcon,
    //     url: "https://www.x.com/enrico_milli",
    // },
    {
        id: 'social-1',
        title: 'Telegram',
        iconUrl: Mails,
        url: 'mailto:info@worksync.ai',
    },
]
