"use client";

import { notFound } from "next/navigation";

function getRandomInt(counter: number) {
  return Math.floor(Math.random() * counter);
}

export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const random = getRandomInt(2);

  if (random === 1)
    throw new Error("Something went wrong loading review");

  if (parseInt(params.reviewId) > 100) notFound();

  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
