"use client";

import Layout from "@/components/Layout";
import React from "react";
import TransactionDetail from "@/templates/OperationPage/TransactionDetail";

interface AddressPageProps {
    params: {
        id: string;
    };
}

const AddressPage: React.FC = () => {

    return (
        <Layout>
            <div className="space-y-2">
                <TransactionDetail />
            </div>
        </Layout>
    );

}

export default AddressPage;
