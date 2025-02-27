import Container from '@/components/Container'
import Footer from '@/components/landing/Footer'

export default function Index() {
    return (
        <>
            <Container>
                <PrivacyPolicy />
            </Container>
            <Footer />
        </>
    )
}

function PrivacyPolicy() {
    return (
        <div className='mt-20 min-h-screen py-12'>
            <div className='mx-auto max-w-4xl rounded-lg px-8 py-10 shadow-lg md:border md:border-solid'>
                <h1 className='mb-6 text-3xl font-bold'>WorkSync.AI Privacy Policy</h1>
                <p className='mb-6 text-sm'>Effective Date: March 16th, 2024</p>

                <div className='space-y-6'>
                    <section>
                        <h2 className='mb-3 text-2xl font-semibold'>Introduction</h2>
                        <p className=''>
                            At WorkSync.AI, we value your privacy and are committed to protecting your personal information.
                            This privacy policy outlines how we collect, use, and safeguard the data you provide when using
                            our Chrome extension for automated job applications on LinkedIn.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-2xl font-semibold'>Data Security</h2>
                        <p className=''>
                            We employ industry-standard security measures to protect your personal information from
                            unauthorized access, alteration, disclosure, or destruction. This includes:
                        </p>
                        <ul className='ml-4 mt-2 list-inside list-disc'>
                            <li>Use of encryption</li>
                            <li>Secure servers</li>
                            <li>Access controls</li>
                        </ul>
                        <p className='mt-2'>
                            Your Google account information and resume data are stored securely on our servers.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-2xl font-semibold'>Data Sharing</h2>
                        <p className=''>
                            We do not sell, trade, or otherwise transfer your Google account information or resume data to
                            third parties without your consent, except when required by law or to protect our rights,
                            property, or safety.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-2xl font-semibold'>Data Retention</h2>
                        <p className=''>
                            We retain your Google account information and resume data only for as long as necessary to
                            provide the WorkSync.AI service, unless a longer retention period is required or permitted by
                            law. If you choose to delete your WorkSync.AI account, we will delete your resume data from our
                            servers. However, your Google account information will be retained for as long as you keep the
                            WorkSync.AI Chrome extension installed.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-2xl font-semibold'>Your Rights</h2>
                        <p className=''>
                            You have the right to access, update, or delete your resume data at any time by logging into your
                            WorkSync.AI account. To completely remove your Google account information from WorkSync.AI, you
                            must uninstall the Chrome extension.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-2xl font-semibold'>Policy Updates</h2>
                        <p className=''>
                            We reserve the right to update or modify this privacy policy at any time. We will notify you of
                            any changes by posting the updated policy on our website or through the Chrome extension.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-2xl font-semibold'>Contact Us</h2>
                        <p className=''>
                            If you have any questions, concerns, or requests regarding this privacy policy or our data
                            practices, please contact us at{' '}
                            <a href='mailto:info@worksync.ai' className='text-blue-600 hover:underline'>
                                info@worksync.ai
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-2xl font-semibold'>Acceptance of Terms</h2>
                        <p className=''>
                            By using the WorkSync.AI Chrome extension, you acknowledge that you have read, understood, and
                            agree to the terms outlined in this privacy policy.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
