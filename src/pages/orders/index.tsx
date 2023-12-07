import dynamic from "next/dynamic";
import { Suspense } from "react";

import LoadingPage from "@/components/LoadingPage";
import ProtectedRoute from "@/components/ProtectedRoute";

const OrdersPage = () => {
  const Orders = dynamic(
    () => import("@/components/Orders").then((res) => res.default),
    {
      ssr: false,
    }
  );

  return (
    <Suspense fallback={<LoadingPage />}>
      <ProtectedRoute>
        <Orders />
      </ProtectedRoute>
    </Suspense>
  );
};

export default OrdersPage;
