"use client";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className="bg-[#B4B8AF]">{children}</body>
      </html>
    </QueryClientProvider>
  );
}

export default RootLayout;
