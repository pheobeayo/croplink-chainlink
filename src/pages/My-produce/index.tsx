import dynamic from "next/dynamic";
import { Suspense } from "react";

import LoadingPage from "@/components/LoadingPage";
import ProtectedRoute from "@/components/ProtectedRoute";

const MyProducePage = () => {
  const MyProduce = dynamic(
    () => import("@/components/MyProduce").then((res) => res.default),
    {
      ssr: false,
    }
  );

  return (
    <Suspense fallback={<LoadingPage />}>
      <ProtectedRoute>
        <MyProduce />
      </ProtectedRoute>
    </Suspense>
  );
};

export default MyProducePage;
