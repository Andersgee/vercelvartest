https://github.com/vercel-community/rust?tab=readme-ov-file

```sh
pnpm i -g vercel

vercel dev
```

although in local development this will run the nodejs and edge runtime functions on a [different port](https://github.com/vercel-community/rust/issues/79#issuecomment-1444848148)... something like `http://localhost:42109/api/edge-route`
instead of `http://localhost:3000/api/edge-route`

run `vercel dev --debug` to see which one.

so I made a simple proxy for this. TLDR;

```sh
vercel dev --debug
#look for some debug output like "--port 45227", then run
node dev-proxy 45227
#open localhost:3001
#now all rust/edge/nodejs runtimes work in local dev
```
