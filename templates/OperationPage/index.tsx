"use client";

import Layout from "@/components/Layout";
import React from "react";

interface OperationPageProps {
    params: {
        id: string;
    };
}

const OperationPage: React.FC<OperationPageProps> = ({params }) => {

    // useEffect(() => {
    //     const { id } = params;
    //
    //     const fetchNFTDetails = async (id: string) => {
    //         // Replace this with your actual API call
    //         const fetchedNFT: NFT = await fetchNFTById(id);
    //         setNft(fetchedNFT);
    //     };
    //
    //     fetchNFTDetails(id);
    // }, [params]);

    return (
        <Layout >
            <div className="space-y-2">
                haha
            </div>
        </Layout>
    );

}

export default OperationPage;
