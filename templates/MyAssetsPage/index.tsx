"use client";

import Layout from "@/components/Layout";
import TotalBalance from "./TotalBalance";
import BestToBuy from "./BestToBuy";
import AllAssets from "./AllAssets";
import Summary from "./Summary";

const MyAssetsPage = () => {
    return (
        <Layout title="My assets">
            <div className="space-y-2">
                <div className="flex lg:block">
                    <TotalBalance />
                    <BestToBuy />
                </div>
                <div className="flex lg:block">
                    <AllAssets />
                    <Summary />
                </div>
            </div>
        </Layout>
    );
};

export default MyAssetsPage;
