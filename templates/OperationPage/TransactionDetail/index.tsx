import {useEffect, useState} from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import Tooltip from "@/components/Tooltip";
import useOperationStore from "../../../stores/operationStore";

type TransactionProps = {
    operationId: string;
};

const formatNumberWithCommas = (string: string) => {
    return string?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const capitalizeFirstLetter = (str: string) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
};

const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds

    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getUTCFullYear();

    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
};

// {
//     "data": {
//     "hash": "0x8334325b83372e00ff43b5072b41260c99ca75ad368b276770eb2f400e6ead46",
//         "transactionHash": "0xdfd46aa281dd6c1d2df0961ad2977f8adb768b9d64d2e7afd2055625cd639b37",
//         "blockNumber": 82285117,
//         "timestamp": 1721455492,
//         "sender": "0x573BAEc1Aa5F83e055c0c0c865B61e4f2D64734D",
//         "status": true,
//         "action": {
//         "type": "execute",
//             "details": [
//             {
//                 "target": "0xE5D1F481D1abdFbCe5f208142c20Fa8535894E17",
//                 "value": 0,
//                 "data": "0x6a627842000000000000000000000000573baec1aa5f83e055c0c0c865b61e4f2d64734d"
//             }
//         ]
//     },
//     "gasFee": "0",
//     "gasUsed": "2344842"
// }
// }

const TransactionDetails = (data: any) => {
    const dataTransaction = data.data || {};
    const {hash, transactionHash, blockNumber, timestamp, sender, action, status, gasFee, gasUsed} = dataTransaction || {};
    const isSuccess = status === true;
    const formattedTime = formatTimestamp(timestamp);
    const target = action?.details[0].target;

    return (
        <div className="mx-auto w-full p-4 rounded-lg">
            <div className="flex flex-col space-y-4">
                <div className="flex">
                    <div className="w-1/6 flex items-center">
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={`A TxHash or transaction hash is a 
                            unique 66-character identifier that
                            is generated whenever a 
                            transaction is executed.`}
                        >
                        </Tooltip>
                        <span className="font-semibold">Transaction ID</span>
                    </div>
                    <div>
                        <span className="text-gray-600">{hash}</span>
                        <button className="group ml-3 text-0">
                            <Icon
                                className="!w-5 !h-5 mb-3 fill-theme-tertiary transition-colors group-hover:fill-theme-primary"
                                name="copy"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/6 flex items-center">
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'The transaction type.'}
                        />
                        <span className="font-semibold">Type</span>
                    </div>
                    <button className="px-2 text-white py-1 bg-gray-400 rounded">{capitalizeFirstLetter(action?.type)}</button>
                </div>
                <div className="flex">
                    <div className="w-1/6 flex items-center">
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'The status of the transaction.'}
                        />
                        <span className="font-semibold">Status</span>
                    </div>
                    {/*<span className="text-green-600">Success</span>*/}
                    <div className={`flex justify-between items-center h-8 px-4 rounded-full ${
                            isSuccess
                                ? "bg-green-200"
                                : "bg-red-200"
                        }`}>
                        <Icon
                            className="!w-4 !h-4 shrink-0 mr-2 fill-primary-2"
                            name="check-circle"
                        />
                        <div className="flex text-base-1l text-green-900 items-center grow">
                            {isSuccess ? 'Success' : 'Fail'}
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/6 flex items-center">
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'The date and time at which a transaction is produced.'}
                        />
                        <span className="font-semibold">Timestamp</span>
                    </div>
                    <span className="text-gray-600">{formattedTime}</span>
                </div>
                <div className="flex">
                    <div className="w-1/6 flex items-center">
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was produced.'}
                        />
                        <span className="font-semibold">Block</span>
                    </div>
                    <span className="text-gray-600">{`#${blockNumber} (17 block confirmations)`}</span>
                </div>
                <div className="flex">
                    <div className="w-1/6 flex items-center">
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'The sending party of the transaction.'}
                        />
                        <span className="font-semibold">From</span>
                    </div>
                    <div>
                        <span className="text-gray-600">{sender}</span>
                        <button className="group ml-3 text-0">
                            <Icon
                                className="!w-5 !h-5 mb-3 fill-theme-tertiary transition-colors group-hover:fill-theme-primary"
                                name="copy"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/6 flex items-center">
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'The receiving party of the transaction (could be a contract address).'}
                        />
                        <span className="font-semibold">To</span>
                    </div>
                    <div>
                        <span className="text-gray-600">{target}</span>
                        <button className="group ml-3 text-0">
                            <Icon
                                className="!w-5 !h-5 mb-3 fill-theme-tertiary transition-colors group-hover:fill-theme-primary"
                                name="copy"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/6 flex items-center">
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'Amount paid to process the transaction in Ether and fiat value.'}
                        />
                        <span className="font-semibold">Fee</span>
                    </div>
                    <span className="text-gray-600">0.00001298 VIC (Sponsor by Abstraction)</span>
                </div>
                {/*<div className="flex">*/}
                {/*    <div className="w-1/6 flex items-center">*/}
                {/*        <span className="font-semibold">Fee Payer</span>*/}
                {/*        <Tooltip*/}
                {/*            className="-mb-0.25 md:mb-0"*/}
                {/*            title={'The party who paying transaction fee.'}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <span className="text-gray-600">0x4ce6F990e01f8bFb378079647D9D427Bc2d0AAf5</span>*/}
                {/*        <button className="group ml-3 text-0">*/}
                {/*            <Icon*/}
                {/*                className="!w-5 !h-5 mb-3 fill-theme-tertiary transition-colors group-hover:fill-theme-primary"*/}
                {/*                name="copy"*/}
                {/*            />*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="flex flex items-center">
                    <div className="w-1/6">
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'Cost per unit of gas spent for the transaction, in VIC and Gwei.'}
                        />
                        <span className="font-semibold">Gas Price</span>
                    </div>
                    <span className="text-gray-600">{gasFee}</span>
                </div>
                <div className="flex flex items-center">
                    <div className="w-1/6">
                        <Tooltip
                            className="-mb-0.25 md:mb-0"
                            title={'Maximum amount of gas allocated for the transaction & the amount eventually used. Normal VIC transfers involve 21,000 gas units while contracts involve higher values.'}
                        />
                        <span className="font-semibold">Gas Limit & Usage</span>
                    </div>
                    <span className="text-gray-600">{formatNumberWithCommas(gasUsed)}</span>
                </div>
                {/*<div className="flex">*/}
                {/*    <div className="w-1/6 flex items-center">*/}
                {/*        <span className="font-semibold">Input data</span>*/}
                {/*        <Tooltip*/}
                {/*            className="-mb-0.25 md:mb-0"*/}
                {/*            title={'Additional data included for this transaction. Commonly used as part of contract interaction or as a message sent to the recipient.'}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="w-full ml-6 px-5 py-2 bg-gray-200">*/}
                {/*        <div>Function: approve(address spender, uint256 value)</div>*/}
                {/*        <div>MethodId: 0x095ea7b3</div>*/}
                {/*        <div>[0]: 000000000000000000000000955daac579029cd1aeaa02a47845f6292f19d64f</div>*/}
                {/*        <div>[1]: ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<button className="text-left px-2 py-1">Decode input data</button>*/}
            </div>
        </div>
    );
};


const TransactionDetail: React.FC<TransactionProps> = ({ operationId }) => {
    const { colorMode } = useColorMode();
    const { data, loading, error, fetchData } = useOperationStore();

    useEffect(() => {
        fetchData(operationId);
    }, [fetchData, operationId]);

    if (loading) return <div className="text-center text-gray-500">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error fetching data</div>;

    return (
        <Card title="Transaction Detail">
            <div className="flex mt-10 md:mt-4">
                <TransactionDetails data={data} />
            </div>
        </Card>
    );
};

export default TransactionDetail;
