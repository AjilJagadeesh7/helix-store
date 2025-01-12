import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const HomePage = async () => {
  await delay(1000);

  return (
    <div className="text-2xl font-semibold">
      <ProductList
        data={sampleData?.products}
        title="Newest Arrivals"
        limit={4}
      />
    </div>
  );
};

export default HomePage;
