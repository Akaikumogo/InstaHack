import React, { useState } from "react";
import FloatingLabelInput from "./FloatingLabelInput";
import GradientButton from "./GradientButton";
import { cn } from "@/lib/utils";

interface LoginFormProps {
  onSubmit?: (data: { username: string; password: string }) => void;
  loading?: boolean;
  error?: string;
  className?: string;
}

const LoginForm = ({
  onSubmit = () => {},
  loading = false,
  error = "",
  className = "",
}: LoginFormProps) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div
      className={cn(
        "bg-white w-[400px] h-[320px] p-8 rounded-lg shadow-lg",
        "flex flex-col items-center justify-center gap-6",
        className,
      )}
    >
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <FloatingLabelInput
          label="Username or Email"
          type="text"
          id="username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          error={validationErrors.username}
          className="w-full"
        />

        <FloatingLabelInput
          label="Password"
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          error={validationErrors.password}
          className="w-full"
        />

        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}

        <GradientButton type="submit" loading={loading} className="w-full mt-4">
          Sign in to Premium
        </GradientButton>
      </form>
    </div>
  );
};

export default LoginForm;
