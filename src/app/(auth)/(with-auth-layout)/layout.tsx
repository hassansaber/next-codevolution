export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>auth layout</h2>
      {children}
    </>
  );
}
