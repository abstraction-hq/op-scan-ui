"use client";

import Layout from "@/components/Layout";
import React from "react";
import Transaction from "@/templates/AddressPage/Transaction";
import TopTokens from "@/templates/AddressPage/TopTokens";
import GreedIndex from "@/templates/AddressPage/GreedIndex";

interface AddressPageProps {
    params: {
        id: string;
    };
}

const AddressPage: React.FC = () => {

    return (
        <Layout>
            <div className="space-y-2">
                <div className="flex space-x-2 lg:block lg:space-x-0 lg:space-y-2">
                    <TopTokens />
                    <GreedIndex />
                </div>
                <Transaction />
            </div>
        </Layout>
    );

}

export default AddressPage;
