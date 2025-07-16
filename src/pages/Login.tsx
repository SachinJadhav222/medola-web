import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import SimpleLoginForm from "@/pages/SimpleLoginForm"; // adjust path if needed

const Login = () => {
  const [loginType, setLoginType] = useState<"user" | "hcp" | null>(null);

  const handleLoginClick = (type: "user" | "hcp") => {
    setLoginType(type);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-32">
        <TooltipProvider>
          {loginType === null ? (
            <div className="space-y-12 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Medola
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Please select your login type to continue
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="lg"
                      className="px-10 py-6 text-lg"
                      onClick={() => handleLoginClick("user")}
                    >
                      User Login
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>Login for patients or general users of the platform</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-10 py-6 text-lg"
                      onClick={() => handleLoginClick("hcp")}
                    >
                      HCP Login
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>Login for Healthcare Professionals (HCP)</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                {loginType === "hcp" ? "HCP Login" : "User Login"}
              </h2>
              <SimpleLoginForm />
            </div>
          )}
        </TooltipProvider>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
