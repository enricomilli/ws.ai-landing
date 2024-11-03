import SectionSvg from '@/assets/svg/SectionSvg'

const Section = ({ className = '', id = '', crosses = false, crossesOffset = '', customPaddings = '', children }) => {
    return (
        <div
            id={id}
            className={`relative mx-auto ${customPaddings || `lg:py-15 px-5 py-10 xl:py-20 ${crosses ? 'lg:py-20 xl:py-20' : ''}`} ${className || ''}`}
        >
            {children}

            {crosses && (
                <>
                    <div
                        className={`absolute left-0 right-0 top-0 mx-auto hidden h-0.5 w-[92%] bg-secondary ${
                            crossesOffset && crossesOffset
                        } pointer-events-none md:block xl:left-10 xl:right-10`}
                    />
                    <SectionSvg crossesOffset={crossesOffset} />
                </>
            )}
        </div>
    )
}

export default Section
