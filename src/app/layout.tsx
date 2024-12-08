"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "./globals.css";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}
