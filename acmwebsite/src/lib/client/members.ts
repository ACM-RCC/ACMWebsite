// lib/client/members.ts 

import { ACMMember } from "@/lib/types/members";

export const fetchmemberss = async (): Promise<ACMMember[]> => {
  const res = await fetch("/api/members");

  if (!res.ok) {
    throw new Error(`Failed to fetch members: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
};
