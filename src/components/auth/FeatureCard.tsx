import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  className?: string;
}

const FeatureCard = ({
  title = "Premium Feature",
  description = "Experience exclusive premium features and content",
  icon,
  imageUrl = "https://dummyimage.com/360x160/f3f4f6/4b5563&text=Premium+Feature",
  className = "",
}: FeatureCardProps) => {
  return (
    <Card
      className={cn(
        "bg-white w-[360px] h-[160px] overflow-hidden",
        "transition-all duration-300 hover:shadow-lg",
        "relative group",
        className,
      )}
    >
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <div className="flex items-center gap-2 mb-2">
              {icon}
              <h3 className="font-semibold text-lg">{title}</h3>
            </div>
            <p className="text-sm text-gray-200">{description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
