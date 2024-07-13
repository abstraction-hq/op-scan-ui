import Card from "@/components/Card";

const Information = () => {
    return (
        <div className="w-full p-4 rounded-lg">
            <div className="flex flex-col space-y-3">
                <div className="flex">
                    <div className="w-1/3">
                        <span className="font-semibold">Public Name Tag</span>
                    </div>
                    <div>
                        <span className="text-gray-600">Not Available.</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/3">
                        <span className="font-semibold">Transaction Count</span>
                    </div>
                    <div>
                        <span className="text-gray-600">1286 txs</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/3">
                        <span className="font-semibold">Last transaction</span>
                    </div>
                    <span className="text-green-600">July 12, 2024 10:48:54 AM +UTC</span>
                </div>
            </div>
        </div>
    );
};

type MoreInformationProps = {};

const MoreInformation = ({}: MoreInformationProps) => {
    return (
        <Card
            className="flex-1"
            title="More Information"
        >
            <div className="md:-mx-2">
                <Information />
            </div>
        </Card>
    );
};

export default MoreInformation;
