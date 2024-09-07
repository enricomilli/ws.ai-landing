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
                        className={`hidden absolute top-0 left-7.5 right-7.5 h-0.5 bg-primary-foreground ${
                            crossesOffset && crossesOffset
                        } pointer-events-none md:block xl:left-10 right-10`}
                    />
                    <SectionSvg crossesOffset={crossesOffset} />
                </>
            )}
        </div>
    );
};

export default Section;
