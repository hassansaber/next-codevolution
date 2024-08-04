export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // function getRandomInt(counter: number) {
  //   return Math.floor(Math.random() * counter);
  // }
  // const random = getRandomInt(2);
  // if (random === 1)
  //   throw new Error("Something went wrong loading review");

  return (
    <>
      {children}
      <h2>Featured product</h2>
      {/* carousel here */}
    </>
  );
}
