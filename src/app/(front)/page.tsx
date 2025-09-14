import Image from "next/image";
import { Hero } from "./_components/Hero";
import { BookingSection } from "./_components/BookingSection";
import { BlokKantor } from "./_components/BlokKantor";
import { BlokKonten } from "./_components/BlokKonten";
import { BlokBooth } from "./_components/BlokBooth";

export default function Home() {
  return (
   <div>
      <Hero />
      <BookingSection />
      <BlokKantor />
      <BlokKonten />
      <BlokBooth />
   </div>
  );
}
