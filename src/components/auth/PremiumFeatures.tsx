import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import FeatureCard from "./FeatureCard";
import { Crown, Star, Zap, Shield } from "lucide-react";

interface PremiumFeaturesProps {
  className?: string;
  features?: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    imageUrl: string;
  }>;
}

const PremiumFeatures = ({
  className = "",
  features = [
    {
      title: "Exclusive Content",
      description: "Access premium photos and stories",
      icon: <Crown className="h-5 w-5" />,
      imageUrl:
        "https://dummyimage.com/360x160/4f46e5/ffffff&text=Exclusive+Content",
    },
    {
      title: "Ad-Free Experience",
      description: "Browse without interruptions",
      icon: <Star className="h-5 w-5" />,
      imageUrl: "https://dummyimage.com/360x160/7c3aed/ffffff&text=Ad-Free",
    },
    {
      title: "Priority Support",
      description: "Get help when you need it",
      icon: <Zap className="h-5 w-5" />,
      imageUrl:
        "https://dummyimage.com/360x160/9333ea/ffffff&text=Priority+Support",
    },
    {
      title: "Advanced Privacy",
      description: "Enhanced security features",
      icon: <Shield className="h-5 w-5" />,
      imageUrl:
        "https://dummyimage.com/360x160/6366f1/ffffff&text=Advanced+Privacy",
    },
  ],
}: PremiumFeaturesProps) => {
  return (
    <div
      className={cn(
        "bg-white w-[400px] h-[200px] p-4",
        "flex items-center justify-center",
        className,
      )}
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {features.map((feature, index) => (
            <CarouselItem key={index} className="md:basis-full lg:basis-full">
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                imageUrl={feature.imageUrl}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-12" />
        <CarouselNext className="-right-12" />
      </Carousel>
    </div>
  );
};

export default PremiumFeatures;
