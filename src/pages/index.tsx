import { Dietetic } from "@/components/Dietetic";
import { Footer } from "@/components/Footer";
import { Profile } from "@/components/Home";
import { ListConsultations } from "@/components/ListConsultations";
import { ListServices } from "@/components/ListServices";
import { Naturopathy } from "@/components/Naturopathy";
import { Navbar } from "@/components/Navbar";
import { Presentation } from "@/components/Presentation";
import { Reflexology } from "@/components/Reflexology";
import { WhyConsult } from "@/components/WhyConsult";

export default function Home() {
  return (
    <main className="App font-roboto leading-relaxed text-center">
      <Navbar></Navbar>
      <Profile></Profile>
      <Presentation></Presentation>
      <WhyConsult></WhyConsult>
      <ListServices></ListServices>
      <Dietetic></Dietetic>
      <Naturopathy></Naturopathy>
      <Reflexology></Reflexology>
      <ListConsultations></ListConsultations>
      <Footer></Footer>
    </main>
  )
}
