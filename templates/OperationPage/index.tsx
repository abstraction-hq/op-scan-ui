"use client";

import Layout from "@/components/Layout";
import React from "react";
import TransactionDetail from "@/templates/OperationPage/TransactionDetail";

interface OperationPageProps {
    params: {
        id: string;
    };
}

const OperationPage: React.FC = () => {
    const operationId = '0x8334325b83372e00ff43b5072b41260c99ca75ad368b276770eb2f400e6ead46';

    return (
        <Layout>
            <div className="space-y-2">
                <TransactionDetail operationId={operationId} />
            </div>
        </Layout>
    );

}

export default OperationPage;
