"use client";

import Layout from "@/components/Layout";
import React from "react";
import TransactionDetail from "@/templates/OperationPage/TransactionDetail";

interface OperationPageProps {
    userOpHash: string;
}

const OperationPage = ({ userOpHash }: OperationPageProps) => {

    return (
        <Layout>
            <div className="space-y-2">
                <TransactionDetail operationId={userOpHash} />
            </div>
        </Layout>
    );

}

export default OperationPage;
