
import React from 'react'

export default async function page() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  console.log(data);
  return (
    <div>
        {data.products.slice(0, 5).map((product: any) => (
            <div key={product.id}>
                <h1>{product.title}</h1>
            </div>
        ))}
    </div>
  )
}
