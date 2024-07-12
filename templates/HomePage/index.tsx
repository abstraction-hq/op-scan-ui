"use client";

import Layout from "@/components/Layout";
import Balance from "./Balance";

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
