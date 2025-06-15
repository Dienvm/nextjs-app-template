/*
<ai_context>
This server page displays pricing options for the product.
</ai_context>
*/

"use server";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function PricingPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="mb-8 text-center text-3xl font-bold">Choose Your Plan</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <PricingCard
          title="Monthly Plan"
          price="$10"
          description="Billed monthly"
          buttonText="Get Started"
        />
        <PricingCard
          title="Yearly Plan"
          price="$100"
          description="Billed annually"
          buttonText="Get Started"
        />
      </div>
    </div>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  buttonText: string;
}

function PricingCard({
  title,
  price,
  description,
  buttonText,
}: PricingCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex grow items-center justify-center">
        <p className="text-4xl font-bold">{price}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <a
            href="/contact"
            className="inline-flex items-center justify-center"
          >
            {buttonText}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
