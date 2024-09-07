import { useState } from "react";
import { Link } from "@remix-run/react";
import { navigation } from "@/constants/constants";
import MenuSvg from "@/assets/svg/MenuSvg";
import WSIcon from "@/assets/svg/WSIcon";
import WSFontFace from "@/assets/svg/WSFontFace";
import { Button } from "@/components/ui/button";
import ThemeController from "./ThemeController";

const Nav = () => {
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => setOpenNavigation(!openNavigation);
    const handleClick = () => setOpenNavigation(false);

    return (
        <div
            className={`fixed top-3 left-0 right-0 md:top-4 mx-auto w-[93vw] lg:w-[90vw] rounded-xl z-50 border border-neutral bg-background/80  flex items-center gap-2 px-5 py-5 lg:px-[45px] 2xl:px-[65px] max-lg:py-4`}>
            <Logo />
            <Navigation
                openNavigation={openNavigation}
                handleClick={handleClick}
            />
            <LoginButton />
            <MobileMenuButton
                openNavigation={openNavigation}
                toggleNavigation={toggleNavigation}
            />
            <ThemeController />
        </div>
    );
};

const Logo = () => (
    <Link
        to="/"
        className="mr-auto w-fit h-fit flex flex-row items-center justify-center gap-2">
        <WSIcon className="w-[55px] md:w-[50px] h-auto fill-current flex flex-row items-center" />
        <WSFontFace className="hidden md:flex md:w-[170px] lg:w-[180px] fill-current pt-1" />
    </Link>
);

const Navigation = (props: { openNavigation: boolean, handleClick: () => void }) => {
    const { openNavigation, handleClick } = props;
    return (
        <div
            className={`transition-all duration-250 lg:visible lg:opacity-100 lg:-translate-y-0 lg:mx-0 lg:w-auto lg:static lg:flex lg:bg-transparent lg:border-none  ${
                openNavigation ? "flex" : "invisible opacity-0 -translate-y-10"
            } fixed top-[4.7rem] md:top-[6rem] w-fit h-fit right-[3.5vw] bottom-0 bg-base-200 rounded-xl bg-background border border-neutral`}>
            <div className="w-fit relative z-10 flex flex-col gap-2 lg:flex-row p-3 lg:p-0">
                {navigation.map((item, index) => (
                    <NavLink
                        key={index}
                        item={item}
                        handleClick={handleClick}
                    />
                ))}
            </div>
        </div>
    );
};

const NavLink = (props: {
    item: {
        itemId?: string | undefined,
        url: string,
        onlyMobile?: undefined | boolean,
        title: string,
    },
    handleClick: () => void,
}) => {
    const { item, handleClick } = props;

    return (
        <Link
            id={item.itemId}
            to={item.url}
            className={`${item.onlyMobile ? "lg:hidden" : ""} w-full`}>
            <Button
                variant={"ghost"}
                onMouseDown={handleClick}>
                {item.title}
            </Button>
        </Link>
    );
};

const LoginButton = () => (
    <Link
        to="/login"
        className="hidden lg:flex">
        <Button
            variant={"outline"}
            className="bg-blur-sm">
            Login
        </Button>
    </Link>
);

const MobileMenuButton = ({
    openNavigation,
    toggleNavigation,
}: {
    openNavigation: boolean,
    toggleNavigation: () => void,
}) => (
    <Button
        variant={"outline"}
        className="lg:hidden bg-blur-sm"
        onMouseDown={toggleNavigation}>
        <MenuSvg openNavigation={openNavigation} />
    </Button>
);

export default Nav;
