import { useColorMode } from "@chakra-ui/react";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

type HeaderProps = {
    visible?: boolean;
    showMenu?: boolean;
    onClickBurger?: () => void;
};

const Header = ({visible, showMenu, onClickBurger }: HeaderProps) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isLightMode = colorMode === "light";

    return (
        <>
            <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-10 bg-theme-n-8 w-full max-w-[80rem] md:z-30 md:px-4 md:py-2 md:transition-colors`}>
                <div className={`flex items-center justify-between h-24 w-full mx-auto px-10 lg:px-6 md:h-16 md:px-4 md:bg-theme-on-surface-1 md:rounded-2xl md:transition-shadow`}>
                    <div className="flex justify-center items-center h-10 mr-3.5 lg:mr-1">
                        <Image
                            className="w-8 opacity-100"
                            src={"/images/abs_logo.png"}
                            width={36}
                            height={36}
                            alt=""
                        />
                        <div className="text-3xl font-bold ml-2 mt-1">
                            Abstraction Scan
                        </div>
                    </div>
                    <button className="group flex items-center h-12 px-4 rounded-xl transition-colors hover:bg-theme-on-surface-2" onClick={toggleColorMode}>
                        <Icon
                            className="shrink-0 fill-theme-secondary transition-colors group-hover:fill-theme-primary md:group-hover:fill-theme-secondary"
                            name={isLightMode ? "moon" : "sun"}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
