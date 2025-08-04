// app/about/page.tsx
export const dynamic = "force-static";

export default async function AboutPage() {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const data = new Date().toLocaleTimeString();

  return (
    <main>
      <h1>About Us</h1>
       <h3> {data}</h3>
      <p>We are a company that builds high-quality web applications using cutting-edge technologies.</p>
    </main>
  );
}
