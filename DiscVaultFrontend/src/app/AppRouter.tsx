import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { useRouter } from "@/hooks";
import { DefaultLayout } from "@/layouts";

// const AuthenticatedLayout = withAuthenticationRequired(DefaultLayout);

export const AppRouter: React.FC = () => {
  const { routes } = useRouter();
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="*" element={<Navigate to={routes.home.path} replace />} />
      </Route>
    </Routes>
  );
};
