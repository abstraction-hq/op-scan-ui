"use client";

import Layout from "@/components/Layout";
import React from "react";
import Transaction from "@/templates/AddressPage/Transaction";
import Overview from "templates/AddressPage/Overview";
import MoreInformation from "templates/AddressPage/MoreInformation";

interface AddressPageProps {
    params: {
        id: string;
    };
}

const AddressPage: React.FC = () => {

    return (
        <Layout>
            <div className="space-y-2">
                <div className="mb-4 mt-2 text-3xl font-bold">Address</div>
                <div className="flex space-x-2 lg:block lg:space-x-0 lg:space-y-2">
                    <Overview />
                    <MoreInformation />
                </div>
                <Transaction />
            </div>
        </Layout>
    );

}

export default AddressPage;
