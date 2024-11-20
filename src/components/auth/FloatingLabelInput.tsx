import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

import { cn } from '@/lib/utils';

interface FloatingLabelInputProps {
   label?: string;
   type?: string;
   id?: string;
   placeholder?: string;
   value?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   className?: string;
   error?: string;
}

const FloatingLabelInput = ({
   label = 'Label',
   type = 'text',
   id = 'floating-input',
   value = '',
   onChange = () => {},
   error = '',
}: FloatingLabelInputProps) => {
   const [_isFocused, setIsFocused] = useState(false);

   const [showPassword, setShowPassword] = useState(false);

   const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
   };
   return (
      <div className="relative w-full">
         <Input
            required
            type={type === 'password' && showPassword ? 'text' : type}
            id={id}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={label}
            autoComplete={type === 'password' ? 'current-password' : ''}
            className={cn(
               'w-full border rounded-md px-4 py-2',
               'peer focus:ring-2 focus:ring-purple-500',
               'transition-all duration-200',
               error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300',
            )}
         />
         {type === 'password' && (
            <button
               type="button"
               onClick={togglePasswordVisibility}
               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
               {showPassword ? '🙈' : '👁️'}
            </button>
         )}
      </div>
   );
};

export default FloatingLabelInput;
