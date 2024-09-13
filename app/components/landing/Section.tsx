import SectionSvg from "@/assets/svg/SectionSvg";

const Section = ({
    className = "",
    id = "",
    crosses = false,
    crossesOffset = "",
    customPaddings = "",
    children,
}) => {
    return (
        <div
            id={id}
            className={` mx-auto relative
      ${customPaddings || `py-10 lg:py-15 xl:py-20 px-5 ${crosses ? "lg:py-20 xl:py-20" : ""}`}
      ${className || ""}`}>
            {children}

            {crosses && (
                <>
                    <div
                        className={`hidden absolute top-0 left-0 right-0 h-0.5 bg-secondary w-[92%] mx-auto  ${crossesOffset && crossesOffset
                            } pointer-events-none md:block xl:left-10 xl:right-10`}
                    />
                    <SectionSvg crossesOffset={crossesOffset} />
                </>
            )}
        </div>
    );
};

export default Section;
