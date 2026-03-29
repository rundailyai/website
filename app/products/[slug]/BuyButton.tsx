"use client";

import { useState } from "react";
import { createPolarCheckout } from "@/app/lib/polar";

interface BuyButtonProps {
  productId: string;
  price: number;
  title: string;
}

export function BuyButton({ productId, price, title }: BuyButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePurchase = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      // Create Polar checkout session
      const checkoutUrl = await createPolarCheckout({
        productId,
        successUrl: `${window.location.origin}/products/${productId}?success=true`,
        cancelUrl: `${window.location.origin}/products/${productId}`,
      });

      // Redirect to Polar checkout
      window.location.href = checkoutUrl;
    } catch (err) {
      console.error("Purchase error:", err);
      setError("Unable to process purchase. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <button
        onClick={handlePurchase}
        disabled={isProcessing}
        className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isProcessing ? "Redirecting to checkout..." : `Buy Now - $${price}`}
      </button>
      {error && (
        <p className="mt-3 text-sm text-red-600 text-center">{error}</p>
      )}
    </div>
  );
}
