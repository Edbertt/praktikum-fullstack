import Image from "next/image";
import { Suspense } from "react";
import OverviewCardGroups from '@/components/card/index';
import { OverviewCardsSkeleton } from "@/components/card/skeleton";


export default function Home() {
  return (
    <>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewCardGroups />
      </Suspense>
      <h1>Hello My-Project Next.js</h1>
    </>
  );
}
