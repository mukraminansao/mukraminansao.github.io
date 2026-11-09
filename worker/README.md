# Portfolio assistant (AI chatbot)

The "Ask about me" chat on the portfolio. It answers questions about Mukramin using
**only** the facts in [`ai/knowledge.md`](../ai/knowledge.md), with a free
[Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/) model.

```
visitor ──► js/chat.js (on GitHub Pages) ──► Cloudflare Worker (worker/portfolio-chat.js)
                                                 │  reads https://mukraminansao.github.io/ai/knowledge.md
                                                 └► Workers AI: Llama 3.3 70B (falls back to Llama 3.1 8B)
```

- No API key: the model is reached through the Worker's **AI binding**.
- Free: Workers AI includes 10,000 Neurons a day. One answer uses roughly 190, so about 50 chats a day.
- Only your site (and local testing) can call the Worker. Each visitor is limited to 8 questions a minute.
- The chat button stays hidden until `contact.chatEndpoint` is set in `js/data.js`.

## One-time setup (Cloudflare dashboard, about 5 minutes)

1. Sign up or log in at <https://dash.cloudflare.com> (the free plan is enough).
2. Go to **Compute (Workers) → Workers & Pages → Create → Worker**. Name it `portfolio-chat` and click **Deploy**.
3. Click **Edit code**. Delete everything in `worker.js`, paste the full contents of
   [`portfolio-chat.js`](portfolio-chat.js), then click **Deploy**.
4. Go back to the Worker, open **Settings → Bindings → Add binding → Workers AI**.
   Set the variable name to **`AI`** and save.
5. Copy the Worker's address, for example `https://portfolio-chat.yourname.workers.dev`.
   Opening it in a browser should show `{"ok":true,"service":"portfolio-chat"}`.
6. In `js/data.js`, set `chatEndpoint: 'https://portfolio-chat.yourname.workers.dev'` and push.

## Keeping it up to date

After changing `js/data.js` or the About text, rebuild the facts and push:

```bash
node scripts/build-knowledge.mjs
```

The Worker re-reads `ai/knowledge.md` every 10 minutes, so it never needs redeploying for content changes.
Redeploy the Worker (step 3) only when `worker/portfolio-chat.js` itself changes.

## Optional: deploy from the command line

```bash
cd worker
npx wrangler login
npx wrangler deploy
```
