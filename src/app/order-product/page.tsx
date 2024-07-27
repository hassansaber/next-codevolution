"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  function handleClick() {
    console.log("order now");
    router.push("/");
  }

  return (
    <div>
      <h1>OrderProduct</h1>
      <button onClick={handleClick}>order now</button>
    </div>
  );
}
