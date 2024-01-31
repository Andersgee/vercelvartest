export default function Home() {
  const HELLO = process.env.HELLO;
  const SOMEMULTI = process.env.SOMEMULTI;
  return (
    <main className="flex justify-center">
      <div>
        <pre>HELLO: {HELLO}</pre>
        <pre>SOMEMULTI: {SOMEMULTI}</pre>
      </div>
    </main>
  );
}
