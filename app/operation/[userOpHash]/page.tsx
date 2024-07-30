'use client';
import type { NextPage } from "next";
import OperationPage from '@/templates/OperationPage';

const Operation = ({ params }: { params: { userOpHash: string }}) => {
    return <OperationPage userOpHash={params.userOpHash} />;
};

export default Operation;
