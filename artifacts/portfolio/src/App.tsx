import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Impressum from "@/pages/impressum";
import Datenschutz from "@/pages/datenschutz";
import CookieBanner from "@/components/CookieBanner";
import { LanguageProvider } from "@/lib/language-context";
import { loadGoogleAnalytics } from "@/lib/analytics";

const queryClient = new QueryClient();
const COOKIE_KEY = "cookie_consent";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    if (localStorage.getItem(COOKIE_KEY) === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
            <CookieBanner />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
