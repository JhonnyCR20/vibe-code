require("dotenv").config({ quiet: true });

const app = require("./app");
const { getPort } = require("./config/env");

const port = getPort();

app.listen(port, () => {
  console.log(`Servidor listo en http://localhost:${port}`);
});
