import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
   placeholder = '',
   value = '',
   onChange = () => {},
   className = '',
   error = '',
}: FloatingLabelInputProps) => {
   const [isFocused, setIsFocused] = useState(false);

   return (
      <div className={cn('bg-white relative h-[56px] w-[360px]', className)}>
         <Input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={cn(
               'h-[45px] px-4 pt-6 pb-2 w-full border rounded-md',
               'peer focus:ring-2 focus:ring-purple-500',
               'transition-all duration-200',
               error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300',
            )}
         />
         <Label
            htmlFor={id}
            className={cn(
               'absolute left-4 text-gray-500',
               'transition-all duration-200',
               'pointer-events-none',
               isFocused || value
                  ? 'transform -translate-y-3 scale-75 top-4'
                  : 'top-4',
            )}
         >
            {label}
         </Label>
         {error && (
            <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">
               {error}
            </span>
         )}
      </div>
   );
};

export default FloatingLabelInput;
