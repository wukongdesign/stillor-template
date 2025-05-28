import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <Layout>
      <section className="py-20 text-center">
        <h1 className="text-4xl font-medium mb-2">STILLOR × 从来</h1>
        <p className="text-gray-600 mb-6">复古是一种未来</p>
        <a href="/products" className="inline-block border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition">
          进入选购
        </a>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {/* 示例商品卡片 */}
        <ProductCard title="示例商品" image="/images/sample.jpg" />
      </section>
    </Layout>
  );
}
