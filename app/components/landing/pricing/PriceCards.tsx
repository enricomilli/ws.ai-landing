import React from "react";
import { Link } from "@remix-run/react";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { weeklyPricing, monthlyPricing } from "@/constants/constants";

interface PricingItem {
  id: string;
  title: string;
  description: string;
  price: string | null;
  priceDescription?: string;
  hasPriceDesc: boolean;
  buttonText: string;
  url: string;
  features: string[];
}

interface PriceCardProps {
  item: PricingItem;
}

const PriceCard: React.FC<PriceCardProps> = ({ item }) => {
  return (
    <Card className="max-w-[39rem] max-lg:w-full h-full lg:w-auto p-3">
      <CardHeader>
        <CardTitle className="text-primary-content">{item.title}</CardTitle>
        <CardDescription className="text-primary-content/90 max-w-[400px]">
          {item.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center h-[5.5rem] mb-3">
          {item.price !== null && (
            <>
              <span className="text-3xl">$</span>
              <span className="text-[4.0rem] md:text-[4.5rem] leading-none font-bold">
                {item.price}
              </span>
              {item.hasPriceDesc && (
                <span className="text-xl md:text-2xl ml-1">
                  {item.priceDescription}
                </span>
              )}
            </>
          )}
        </div>

        <Link
          to={item.url}
        >
          <Button
            size={"lg"}
            className={`w-full mb-7`}>
            {item.buttonText}
          </Button>
        </Link>

        <ul className="space-y-4">
          {item.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center justify-start border-t border-n-6 pt-4">
              <Check
                className="mr-4 mt-1"
                size={24}
              />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

interface PricingCardsProps {
  pricingData: PricingItem;
}

const PricingCards: React.FC<PricingCardsProps> = ({ pricingData }) => {

  return (
    <>
      <PriceCard
        key={pricingData.id}
        item={pricingData}
      />
    </>
  );
};

export const WeeklyPriceCard: React.FC = () => (
  <PricingCards
    pricingData={weeklyPricing}
  />
);

export const MonthlyPriceCard: React.FC = () => <PricingCards pricingData={monthlyPricing} />;
