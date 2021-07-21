"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3030; // default port to listen
app.get('/api', (req, res) => {
    const randomId = `${Math.random()}`.slice(2);
    const path = `/api/item/${randomId}`;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
        res.send(`
  <html>
  <head>
  <meta name="twitter:card" content="summary_large_image"></meta>
  <meta name="twitter:image" content="${req.query.url}"></meta>
  <meta name="twitter:site" content="@TheKamaGang"></meta>
  <meta name="twitter:url" content="https://www.kamagang.com/"></meta>
  <meta property="og:url" content="https://www.kamagang.com/" />
<meta property="og:title" content="KamaGang" />
<meta property="og:description" content="The hottest collectible on the market!" />
<meta property="og:image" content="${req.query.url}" />
<title>KamaGang</title>
  </head>
  <body>
  <img src="${req.query.url}"><br/>
  See more info at <a href="https://kamagang.com">KamaGang.com</a>
  </body>
  </html>
  `);
    //res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});
app.get('/api/item/:itemId', (req, res) => {
    const { itemId } = req.params;
    res.json({ itemId });
});
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
module.exports = app;
//# sourceMappingURL=index.js.map
