import dynamic from "next/dynamic";
import { Suspense } from "react";

import LoadingPage from "@/components/LoadingPage";
import ProtectedRoute from "@/components/ProtectedRoute";

const TransactionsPage = () => {
  const Transactions = dynamic(
    () => import("../../components/Transactions").then((res) => res.default),
    {
      ssr: false,
    }
  );

  return (
    <Suspense fallback={<LoadingPage />}>
      <ProtectedRoute>
        <Transactions />
      </ProtectedRoute>
    </Suspense>
  );
};

export default TransactionsPage;
