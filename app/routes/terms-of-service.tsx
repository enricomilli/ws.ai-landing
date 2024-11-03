import Footer from '@/components/landing/Footer'

export default function Index() {
    return (
        <>
            <TermsOfService />
            <Footer />
        </>
    )
}

function TermsOfService() {
    return (
        <div className='mt-20 min-h-screen py-12'>
            <div className='mx-auto max-w-4xl overflow-hidden rounded-lg shadow-lg md:border md:border-solid'>
                <div className='p-6 md:px-8 md:py-10'>
                    <h1 className='mb-8 text-3xl font-bold'>Worksync.AI Terms of Service</h1>

                    <section className='mb-8'>
                        <h2 className='mb-4 text-2xl font-semibold'>Subscription and Pricing</h2>
                        <div className='space-y-2'>
                            <p>
                                1.1 Worksync.AI offers a subscription service called "Job Search Companion" with two pricing
                                options:
                            </p>
                            <ul className='ml-4 list-inside list-disc'>
                                <li>$15 per month</li>
                                <li>$5 per week</li>
                            </ul>
                            <p>1.2 Users can choose their preferred subscription plan and will be billed accordingly.</p>
                            <p>
                                1.3 The subscription will automatically renew at the end of each billing period (monthly or
                                weekly) unless canceled by the user.
                            </p>
                        </div>
                    </section>

                    <section className='mb-8'>
                        <h2 className='mb-4 text-2xl font-semibold'>Cancellation and Termination</h2>
                        <div className='space-y-2'>
                            <p>
                                2.1 Users may cancel their subscription at any time by following the cancellation process
                                provided within the Job Search Companion service or by contacting Worksync.AI customer
                                support.
                            </p>
                            <p>
                                2.2 Upon cancellation, users will lose access to the Job Search Companion service once the
                                current billing period ends.
                            </p>
                            <p>
                                2.3 Worksync.AI reserves the right to terminate or suspend a user's access to the Job Search
                                Companion service for any reason, including violation of these terms of service.
                            </p>
                        </div>
                    </section>

                    <section className='mb-8'>
                        <h2 className='mb-4 text-2xl font-semibold'>Refunds</h2>
                        <div className='space-y-2'>
                            <p>
                                3.1 At this time, Worksync.AI does not provide refunds for the Job Search Companion service.
                            </p>
                            <p>
                                3.2 If a user cancels their subscription, they will continue to have access to the service
                                until the end of the current billing period, and no refund will be issued for the remaining
                                time in that period.
                            </p>
                        </div>
                    </section>

                    <section className='mb-8'>
                        <h2 className='mb-4 text-2xl font-semibold'>User Responsibilities</h2>
                        <div className='space-y-2'>
                            <p>
                                4.1 Users are responsible for maintaining the confidentiality of their account login
                                information and are fully responsible for all activities that occur under their account.
                            </p>
                            <p>
                                4.2 Users agree to use the Job Search Companion service for lawful purposes only and in
                                compliance with all applicable laws and regulations.
                            </p>
                            <p>
                                4.3 Users are responsible for providing accurate and up-to-date information when registering
                                for the Job Search Companion service.
                            </p>
                        </div>
                    </section>

                    <section className='mb-8'>
                        <h2 className='mb-4 text-2xl font-semibold'>Intellectual Property</h2>
                        <div className='space-y-2'>
                            <p>
                                5.1 All content and materials provided within the Job Search Companion service, including but
                                not limited to text, graphics, logos, and software, are the property of Worksync.AI and are
                                protected by intellectual property laws.
                            </p>
                            <p>
                                5.2 Users are granted a limited, non-exclusive, non-transferable license to access and use
                                the Job Search Companion service for personal, non-commercial purposes.
                            </p>
                        </div>
                    </section>

                    <section className='mb-8'>
                        <h2 className='mb-4 text-2xl font-semibold'>Limitation of Liability</h2>
                        <div className='space-y-2'>
                            <p>
                                6.1 Worksync.AI shall not be liable for any indirect, incidental, special, consequential, or
                                punitive damages arising out of or relating to the use of the Job Search Companion service.
                            </p>
                            <p>
                                6.2 Worksync.AI's total liability for any claim, loss, or damage arising out of or relating
                                to these terms of service or the use of the Job Search Companion service shall not exceed the
                                total amount paid by the user for the service during the 12 months preceding the claim.
                            </p>
                        </div>
                    </section>

                    <section className='mb-8'>
                        <h2 className='mb-4 text-2xl font-semibold'>Modifications to Terms of Service</h2>
                        <div className='space-y-2'>
                            <p>
                                7.1 Worksync.AI reserves the right to modify these terms of service at any time. Any changes
                                will be effective immediately upon posting the revised terms on the Worksync.AI website.
                            </p>
                            <p>
                                7.2 Users are responsible for regularly reviewing the terms of service to stay informed of
                                any changes.
                            </p>
                        </div>
                    </section>

                    <p className='italic'>
                        By using the Worksync.AI Job Search Companion service, users agree to be bound by these terms of
                        service. If a user does not agree to these terms, they should not use the service.
                    </p>
                </div>
            </div>
        </div>
    )
}
