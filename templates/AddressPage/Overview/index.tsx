import Card from "@/components/Card";
import Tooltip from "@/components/Tooltip";
import {useState} from "react";
import Select from "@/components/Select";

const duration = [
    {
        id: "0",
        title: "All time",
    },
    {
        id: "1",
        title: "Month",
    },
    {
        id: "2",
        title: "Year",
    },
];

type OverviewInformationProps = {
    option?: any;
    setOption?: any;
    options?: any;
};

const OverviewInformation = ({option, setOption, options}: OverviewInformationProps) => {
    return (
        <div className="w-full p-4 rounded-lg">
            <div className="flex flex-col space-y-3">
                <div className="flex">
                    <div className="w-1/3">
                        <span className="font-semibold">Total Balance</span>
                    </div>
                    <div>
                        <span className="text-gray-600">$0.107</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/3">
                        <span className="font-semibold">VIC Balance</span>
                    </div>
                    <div>
                        <span className="text-gray-600">0.34 VIC </span>
                        <span className="text-gray-400">($0.1)</span>
                        <Tooltip
                            className="-mb-2"
                            title={'$0.3/VIC\n' + 'Price oracle from Abstraction'}
                        />
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/3">
                        <span className="font-semibold">Other VRC Token Balance</span>
                    </div>
                    <Select
                        className="shrink-0 min-w-[18.5rem]"
                        titleBox={'Token VRC'}
                        value={option}
                        onChange={setOption}
                        items={options}
                    />
                </div>
            </div>
        </div>
    );
};

type OverviewProps = {};

const Overview = ({}: OverviewProps) => {
    const [time, setTime] = useState(duration[0]);


    return (
        <Card
            className="flex-1"
            title="Overview"
        >
            <div className="-mx-3 pt-6 space-y-1 md:-mx-2">
                <OverviewInformation option={time} setOption={setTime} options={duration}/>
            </div>
        </Card>
    );
};

export default Overview;
