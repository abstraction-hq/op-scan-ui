import { useState } from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import Tooltip from "@/components/Tooltip";

const TransactionLists = () => {
    return (
        <div className="mx-auto w-full p-4 rounded-lg">
            <div className="flex flex-col space-y-4">
                <div className="flex">
                    <div className="w-1/6">
                        <span className="font-semibold">Transaction ID</span>
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={`A TxHash or transaction hash is a \nunique 66-character identifier that\n is generated whenever a \ntransaction is executed.`}
                        />
                    </div>
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
                    <div className="w-1/6">
                        <span className="font-semibold">Type</span>
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'The transaction type.'}
                        />
                    </div>
                    <button className="px-2 text-white py-1 bg-gray-400 rounded">Approve</button>
                </div>
                <div className="flex">
                    <div className="w-1/6">
                        <span className="font-semibold">Status</span>
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'The status of the transaction.'}
                        />
                    </div>
                    {/*<span className="text-green-600">Success</span>*/}
                    <div className="flex justify-between items-center h-8 px-4 rounded-full bg-green-200">
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
                    <div className="w-1/6">
                        <span className="font-semibold">Timestamp</span>
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'The date and time at which a transaction is produced.'}
                        />
                    </div>
                    <span className="text-gray-600">July 11, 2024 09:48:55 AM +UTC</span>
                </div>
                <div className="flex">
                    <div className="w-1/6">
                        <span className="font-semibold">Block</span>
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was produced.'}
                        />
                    </div>
                    <span className="text-gray-600">#81940623 (17 block confirmations)</span>
                </div>
                <div className="flex">
                    <div className="w-1/6">
                        <span className="font-semibold">From</span>
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'The sending party of the transaction.'}
                        />
                    </div>
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
                    <div className="w-1/6">
                        <span className="font-semibold">To</span>
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'The receiving party of the transaction (could be a contract address).'}
                        />
                    </div>
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
                    <div className="w-1/6">
                        <span className="font-semibold">Fee</span>
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'Amount paid to process the transaction in Ether and fiat value.'}
                        />
                    </div>
                    <span className="text-gray-600">0.00001298 VIC (Sponsor by Abstraction)</span>
                </div>
                <div className="flex">
                    <div className="w-1/6">
                        <span className="font-semibold">Fee Payer</span>
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'The party who paying transaction fee.'}
                        />
                    </div>
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
                    <div className="w-1/6">
                        <span className="font-semibold">Gas Price</span>
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'Cost per unit of gas spent for the transaction, in VIC and Gwei.'}
                        />
                    </div>
                    <span className="text-gray-600">0.25 Gwei  (0.00000000025 VIC)</span>
                </div>
                <div className="flex">
                    <div className="w-1/6">
                        <span className="font-semibold">Gas Limit & Usage</span>
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'Maximum amount of gas allocated for the transaction & the amount eventually used. Normal VIC transfers involve 21,000 gas units while contracts involve higher values.'}
                        />
                    </div>
                    <span className="text-gray-600">67,493 | 51,917(76.92%)</span>
                </div>
                <div className="flex">
                    <div className="w-1/6">
                        <span className="font-semibold">Nonce & Position</span>
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'The position of the transaction in the block.'}
                        />
                    </div>
                    <span className="text-gray-600">1248 | 1</span>
                </div>
                <div className="flex">
                    <div className="w-1/6">
                        <span className="font-semibold">Input data</span>
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'Additional data included for this transaction. Commonly used as part of contract interaction or as a message sent to the recipient.'}
                        />
                    </div>
                    <div className="w-full ml-6 px-5 py-2 bg-gray-200">
                        <div>Function: approve(address spender, uint256 value)</div>
                        <div>MethodId: 0x095ea7b3</div>
                        <div>[0]: 000000000000000000000000955daac579029cd1aeaa02a47845f6292f19d64f</div>
                        <div>[1]: ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</div>
                    </div>
                </div>
                <button className="text-left px-2 py-1">Decode input data</button>
            </div>
        </div>
    );
};

type TransactionListProps = {};

const TransactionList = ({}: TransactionListProps) => {
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === "dark";

    return (
        <Card title="Transaction Detail">
            <div className="flex mt-10 md:mt-4">
                <TransactionLists />
            </div>
        </Card>
    );
};

export default TransactionList;
