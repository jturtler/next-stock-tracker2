import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppWrapper from "./components/AppWrapper";


export default function Home() {
  return (
  <div className="flex h-screen flex-col">
    <Header></Header>
    <main className="flex-1 bg-white">
      <AppWrapper />
    </main>
    <Footer></Footer>
  </div>
  );
}
