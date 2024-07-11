import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({children }: LayoutProps) => {
    const [visible, setVisible] = useState<boolean>(true);
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const isDesktop = useMediaQuery({
        query: "(max-width: 1259px)",
    });

    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });

    useEffect(() => {
        setVisible(isMobile || !isDesktop);
    }, [isMobile, isDesktop]);

    return (
        <div
            className={`min-h-screen "pl-[21.25rem] 2xl:pl-76 xl:pl-20 md:pl-0`}
        >
            {/*<Sidebar*/}
            {/*    className={`md:transition-transform ${*/}
            {/*        showMenu ? "md:translate-x-0" : "md:-translate-x-full"*/}
            {/*    }`}*/}
            {/*    visible={visible}*/}
            {/*    onClick={() => setVisible(!visible)}*/}
            {/*/>*/}
            <div className="">
                <div className="max-w-[80rem] mx-auto pt-24 px-10 pb-10 lg:px-6 md:pt-20 md:px-4 md:pb-8">
                    <Header
                        visible={visible}
                        onClickBurger={() => setShowMenu(!showMenu)}
                        showMenu={showMenu}
                    />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
