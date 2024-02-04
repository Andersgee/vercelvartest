export default function Home() {
  const HELLO = process.env.HELLO;
  const SOMEMULTI = process.env.SOMEMULTI;
  return (
    <main className="flex justify-center">
      <div>
        <section>
          <h2>api runtimes test</h2>
          <div className="flex gap-2">
            <a
              className="px-3 py-2 hover:bg-blue-600 bg-blue-400"
              href="/api/rust-route"
            >
              /api/rust-route
            </a>
            <a
              className="px-3 py-2 hover:bg-blue-600 bg-blue-400"
              href="/api/edge-route"
            >
              /api/edge-route
            </a>
            <a
              className="px-3 py-2 hover:bg-blue-600 bg-blue-400"
              href="/api/nodejs-route"
            >
              /api/nodejs-route
            </a>
          </div>
        </section>
        <hr className="my-4" />
        <section>
          <h2>env var parsing test</h2>
          <pre>HELLO: {HELLO}</pre>
          <pre>SOMEMULTI: {SOMEMULTI}</pre>
        </section>
      </div>
    </main>
  );
}
