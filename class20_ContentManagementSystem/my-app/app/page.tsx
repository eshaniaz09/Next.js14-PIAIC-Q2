// when we fetch the data form server side we make the function outside the react component.

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

import { client } from "@/config/contentful";

const fetchProducts = async () => {
  const products = await client.getEntries({
    'content_type': 'products'
  })
  console.log("products", products);
  return products.items
  
}

// the react content also async await 
export default async function Home() {
  
  const data = await fetchProducts()
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="font-extrabold text-4xl">List of products</h1>
      {data?.map((product: { fields: { tittle: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; stock: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }; }) => {
        // eslint-disable-next-line react/jsx-key
        return <div>
          <h1>{product?.fields.tittle} - { product?.fields?.stock}</h1>
          </div>
        })}
    </main>
  );
}
