"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forget-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        {navLinks.map((link) => {
          const isActive = pathName.startsWith(link.href);

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`${
                isActive
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700`}
            >
              {link.name}
            </Link>
          );
        })}
        {children}
      </main>
    </div>
  );
}
