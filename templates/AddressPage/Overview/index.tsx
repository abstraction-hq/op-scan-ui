import Card from "@/components/Card";
import Tooltip from "@/components/Tooltip";
import {useState} from "react";
import SelectToken from "@/components/SelectToken";

const tokenArcs = [
    {
        id: "0",
        icon: "/images/coin98.png",
        name: "Coin 98",
        abs: "C98",
        value: "0.01",
        sub: "0.03",
        rate: "0.1578"
    },
    {
        id: "1",
        icon: "/images/copyright.png",
        name: "Vibe",
        abs: "Vibe",
        value: "0",
        sub: "5000000000"
    },
    {
        id: "2",
        icon: "/images/copyright.png",
        name: "Token A",
        abs: "TA",
        value: "0",
        sub: "2000000"
    }
]

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
                    <SelectToken
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
    console.log(`mienpv :: ${JSON.stringify(tokenArcs[0].value)}`);
    const [time, setTime] = useState(tokenArcs[0]);


    return (
        <Card
            className="flex-1"
            title="Overview"
        >
            <div className="-mx-3 pt-6 space-y-1 md:-mx-2">
                <OverviewInformation option={time} setOption={setTime} options={tokenArcs}/>
            </div>
        </Card>
    );
};

export default Overview;
