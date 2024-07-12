import { LineChart, Line, ResponsiveContainer } from "recharts";
import Link from "next/link";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Percent from "@/components/Percent";

import { listAccount } from "@/mocks/listAccount";

type TransactionProps = {};

const Transaction = ({}: TransactionProps) => {
    return (
        <Card
            className="flex-1"
            title="Transaction"
            // seeAllUrl="/"
        >
        <div className="max-w-7xl mx-auto p-4">
            <div className="overflow-x-auto">
                <div className="w-full py-2 align-middle inline-block">
                    <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-300">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-1 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                >
                                    TRANSACTION ID
                                </th>
                                <th
                                    scope="col"
                                    className="px-1 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                >
                                    METHOD
                                </th>
                                <th
                                    scope="col"
                                    className="px-1 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                >
                                    BLOCK
                                </th>
                                <th
                                    scope="col"
                                    className="px-1 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                >
                                    TIME
                                </th>
                                <th
                                    scope="col"
                                    className="px-1 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                >
                                    FROM
                                </th>
                                <th
                                    scope="col"
                                    className="px-1 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                >
                                    TO
                                </th>
                                <th
                                    scope="col"
                                    className="px-1 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                >
                                    VALUE (VIC)
                                </th>
                                <th
                                    scope="col"
                                    className="px-1 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                >
                                    FEE (VIC)
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {listAccount.map((item) => (
                                <tr key={item.hash}>
                                    <td
                                        className="px-1 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {item.hash.substring(0, 20)}...
                                    </td>
                                    <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <button className="px-2 py-1 bg-gray-200 rounded">{item.method}</button>
                                    </td>
                                    <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-500">
                                        #{item.blockNumber}
                                    </td>
                                    <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-500">
                                        3 hours ago
                                    </td>
                                    <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {item.from.substring(0, 20)}...
                                    </td>
                                    <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {item.to.substring(0, 20)}...

                                    </td>
                                    <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {item.value}
                                    </td>
                                    <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {item.fee}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </Card>
    );
};

export default Transaction;
