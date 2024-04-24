import { CartProvider } from "./components/context/CartContext";
import Header from "./components/header/Header";
import Hero from "./components/heroSection/Hero";
import ProductSection from "./components/productSection/ProductSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductSection />
    </>
  );
}
