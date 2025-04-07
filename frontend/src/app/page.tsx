import Image from "next/image";
import { Suspense } from "react";
import OverviewCardGroups from '@/components/card/index';


export default function Home() {
  return (
    <>
      <OverviewCardGroups />
      <h1>Hello My-Project Next.js</h1>
    </>
  );
}
