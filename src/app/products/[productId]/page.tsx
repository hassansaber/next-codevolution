import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product ${params.productId}`);
    }, 1000);
  });

  console.log(title);

  return {
    title: `Product ${title}, hey`,
  };
};

export default function ProductDetails({ params }: Props) {
  return (
    <>
      <Link href="/">
        home
      </Link>
      <h1>Product {params.productId} detail </h1>
    </>
  );
}
