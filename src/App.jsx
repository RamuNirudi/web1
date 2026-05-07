// App.jsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import { AuthProvider, useAuth } from "@/lib/AuthContext";
import UserNotRegisteredError from "@/components/UserNotRegisteredError";
import { ThemeProvider } from "@/lib/ThemeContext";

import AppLayout from "@/components/layout/AppLayout";
import Home from "@/pages/Home";
import Telecom from "@/pages/Telecom";
import Railway from "@/pages/Railway";
import Innovation from "@/pages/Innovation";
import Energy from "@/pages/Energy";
import Buildings from "@/pages/Buildings";
import Environment from "@/pages/Environment";
import RlaRlm from "@/pages/RlaRlm";
import UgSurvival from "@/pages/UgSurvival";
import Contact from "@/pages/Contact";
import OfficePage from "@/pages/OfficePage";
import Careers from "@/pages/Careers";

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } =
    useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === "user_not_registered") {
      return <UserNotRegisteredError />;
    } else if (authError.type === "auth_required") {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/telecom" element={<Telecom />} />
        <Route path="/railway" element={<Railway />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/buildings" element={<Buildings />} />
        <Route path="/environment" element={<Environment />} />
        <Route path="/rla-rlm" element={<RlaRlm />} />
        <Route path="/ug-survival" element={<UgSurvival />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/office/:city" element={<OfficePage />} />
        <Route path="/careers" element={<Careers />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <Router>
            <AuthenticatedApp />
          </Router>
          <Toaster />
          <SonnerToaster position="top-right" />
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
