"use client";

import Layout from "@/components/Layout";
import Balance from "./Balance";
import TopTokens from "@/templates/HomePage/TopTokens";
import GreedIndex from "@/templates/HomePage/GreedIndex";

const HomePage = () => {
    return (
        <Layout >
            <div className="space-y-2">
                <Balance />
                <div className="flex space-x-2 lg:block lg:space-x-0 lg:space-y-2">
                    <TopTokens />
                    <GreedIndex />
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
