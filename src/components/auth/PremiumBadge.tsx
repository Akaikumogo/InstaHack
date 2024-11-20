import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface PremiumBadgeProps {
   className?: string;
   text?: string;
}

const PremiumBadge = ({
   className = '',
   text = 'Premium',
}: PremiumBadgeProps) => {
   return (
      <div
         className={cn(
            'bg-white w-[200px] h-[40px] flex items-center justify-center transition-all',
            className,
         )}
      >
         <Badge
            className={cn(
               ' transition-all bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500',
               'text-white font-semibold px-4 py-1 text-sm',
               'hover:from-purple-700 hover:via-pink-600 hover:to-orange-600',
               'transition-all duration-300 ease-in-out',
               'uppercase tracking-wider',
            )}
         >
            {text}
         </Badge>
      </div>
   );
};

export default PremiumBadge;
