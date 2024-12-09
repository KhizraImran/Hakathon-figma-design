import EditorsPics from "@/components/editors";
import FeauresPosts from "@/components/feature-post";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import FeatureProducts from "@/components/product-feature";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <EditorsPics />
      <FeatureProducts />
      <FeauresPosts />
      <Footer />
    </>
  );
}
