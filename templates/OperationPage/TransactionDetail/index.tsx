import { useState } from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import Card from "@/components/Card";
import Icon from "@/components/Icon";

const TransactionDetails = () => {
    return (
        <div className="mx-auto w-full p-4 rounded-lg">
            <div className="flex flex-col space-y-3">
                <div className="flex">
                    <span className="w-1/6 font-semibold">Transaction ID</span>
                    <div>
                        <span className="text-gray-600">0x797a7fc39ce52b9f8891c5e41a3644641ce8e9475696f9396ae7c8e71c5a1da5</span>
                        <button className="group ml-3 text-0">
                            <Icon
                                className="!w-5 !h-5 mb-3 fill-theme-tertiary transition-colors group-hover:fill-theme-primary"
                                name="copy"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex">
                    <span className="w-1/6 font-semibold">Type</span>
                    <button className="px-2 text-white py-1 bg-gray-400 rounded">Approve</button>
                </div>
                <div className="flex">
                    <span className="w-1/6 font-semibold">Status</span>
                    {/*<span className="text-green-600">Success</span>*/}
                    <div className="flex justify-between items-center h-8 px-4 rounded-full bg-green-200 text-green-700 text-theme-white-fixed">
                        <Icon
                            className="!w-4 !h-4 shrink-0 mr-2 fill-primary-2"
                            name="check-circle"
                        />
                        <div className="flex text-base-1l items-center grow">
                            Success
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <span className="w-1/6 font-semibold">Timestamp</span>
                    <span className="text-gray-600">July 11, 2024 09:48:55 AM +UTC</span>
                </div>
                <div className="flex">
                    <span className="w-1/6 font-semibold">Block</span>
                    <span className="text-gray-600">#81940623 (17 block confirmations)</span>
                </div>
                <div className="flex">
                    <span className="w-1/6 font-semibold">From</span>
                    <div>
                        <span className="text-gray-600">0x4ce6F990e01f8bFb378079647D9D427Bc2d0AAf5</span>
                        <button className="group ml-3 text-0">
                            <Icon
                                className="!w-5 !h-5 mb-3 fill-theme-tertiary transition-colors group-hover:fill-theme-primary"
                                name="copy"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex">
                    <span className="w-1/6 font-semibold">To</span>
                    <div>
                        <span className="text-gray-600">0x29114a539Cd407976E1b4b4147BF19e31858804</span>
                        <button className="group ml-3 text-0">
                            <Icon
                                className="!w-5 !h-5 mb-3 fill-theme-tertiary transition-colors group-hover:fill-theme-primary"
                                name="copy"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex">
                    <span className="w-1/6 font-semibold">Value</span>
                    <span className="text-gray-600">0 VIC | VIC price: $0.318</span>
                </div>
                <div className="flex">
                    <span className="w-1/6 font-semibold">Fee</span>
                    <span className="text-gray-600">0.00001298 VIC</span>
                </div>
                <div className="flex">
                    <span className="w-1/6 font-semibold">Fee Payer</span>
                    <div>
                        <span className="text-gray-600">0x4ce6F990e01f8bFb378079647D9D427Bc2d0AAf5</span>
                        <button className="group ml-3 text-0">
                            <Icon
                                className="!w-5 !h-5 mb-3 fill-theme-tertiary transition-colors group-hover:fill-theme-primary"
                                name="copy"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex">
                    <span className="w-1/6 font-semibold">Gas Price</span>
                    <span className="text-gray-600">0.25 Gwei  (0.00000000025 VIC)</span>
                </div>
                <div className="flex">
                    <span className="w-1/6 font-semibold">Gas Limit & Usage</span>
                    <span className="text-gray-600">67,493 | 51,917(76.92%)</span>
                </div>
                <div className="flex">
                    <span className="w-1/6 font-semibold">Nonce & Position</span>
                    <span className="text-gray-600">1248 | 1</span>
                </div>
            </div>
        </div>
    );
};

type TransactionProps = {};

const TransactionDetail = ({}: TransactionProps) => {
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === "dark";

    return (
        <Card title="Transaction Detail">
            <div className="flex mt-10 md:mt-4">
                <TransactionDetails/>
            </div>
        </Card>
    );
};

export default TransactionDetail;
