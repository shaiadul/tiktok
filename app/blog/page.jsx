import getAllData from "@/lib/getAlldata";
import Test from "../componants/test";

export default async function Page() {

  
  const result = await getAllData();
  return (
    <section>
      <Test data={result} />
    </section>
  );
}
