import dynamic from "next/dynamic";
import { Suspense } from "react";

import LoadingPage from "@/components/LoadingPage";
import ProtectedRoute from "@/components/ProtectedRoute";

const OverviewPage = () => {
  const Overview = dynamic(
    () => import("@/components/Overview").then((res) => res.default),
    {
      ssr: false,
    }
  );

  return (
    <Suspense fallback={<LoadingPage />}>
      <ProtectedRoute>
        <Overview />
      </ProtectedRoute>
    </Suspense>
  );
};

export default OverviewPage;
