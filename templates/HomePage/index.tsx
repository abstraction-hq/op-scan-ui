"use client";

import Layout from "@/components/Layout";
import Balance from "./Balance";
import TopTokens from "./TopTokens";
import GreedIndex from "./GreedIndex";
import RecentActivities from "./RecentActivities";
import NeuraAI from "./NeuraAI";

const HomePage = () => {
    return (
        <Layout >
            <div className="space-y-2">
                <Balance />
            </div>
        </Layout>
    );
};

export default HomePage;
