"use client";

import { useLenis } from "@/hooks/useLenis";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  useLenis();

  return <>{children}</>;
}
