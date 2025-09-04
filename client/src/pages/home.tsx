import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Tools } from "@/components/sections/tools";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Tools />
      <Features />
      <Footer />
    </div>
  );
}
