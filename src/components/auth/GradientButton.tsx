import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const GradientButton = ({
  loading = false,
  className = "",
  children = "Sign In",
  disabled,
  ...props
}: GradientButtonProps) => {
  return (
    <Button
      className={cn(
        "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500",
        "hover:from-purple-700 hover:via-pink-600 hover:to-orange-600",
        "text-white font-semibold w-[360px] h-[48px]",
        "transition-all duration-300 ease-in-out",
        "relative overflow-hidden",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default GradientButton;
