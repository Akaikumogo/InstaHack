import React from "react";
import PremiumBadge from "./auth/PremiumBadge";
import LoginForm from "./auth/LoginForm";
import PremiumFeatures from "./auth/PremiumFeatures";
import { cn } from "@/lib/utils";

interface HomeProps {
  className?: string;
}

const Home = ({ className = "" }: HomeProps) => {
  return (
    <div
      className={cn(
        "min-h-screen w-full bg-gradient-to-br from-purple-50 to-pink-50",
        "flex flex-col items-center justify-center p-4 gap-8",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-6 w-full max-w-[1200px] mx-auto">
        {/* Logo and Premium Badge Section */}
        <div className="flex flex-col items-center gap-4 mb-4">
          <img
            src="https://dummyimage.com/150x50/000000/ffffff&text=Instagram"
            alt="Instagram Logo"
            className="h-12 object-contain"
          />
          <PremiumBadge text="Premium" />
        </div>

        {/* Main Content Section */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Side - Preview Image (Hidden on Mobile) */}
          <div className="hidden lg:block">
            <img
              src="https://dummyimage.com/400x600/f3f4f6/000000&text=App+Preview"
              alt="Instagram Premium Preview"
              className="w-[400px] h-[600px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Right Side - Login Form and Features */}
          <div className="flex flex-col items-center gap-6 w-full max-w-[400px]">
            <LoginForm
              className="w-full"
              onSubmit={(data) => console.log("Login attempt:", data)}
            />
            <PremiumFeatures className="w-full" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-sm text-gray-500 flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:text-gray-700">
            About
          </a>
          <a href="#" className="hover:text-gray-700">
            Help
          </a>
          <a href="#" className="hover:text-gray-700">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-700">
            Terms
          </a>
          <span>© 2024 Instagram Premium</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
