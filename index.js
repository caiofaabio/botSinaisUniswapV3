require("dotenv").config();
const axios = require("axios");

const API_KEY = process.env.API_KEY;

async function start() {
  const query = `{
  token(id: "0x66f364f908c662772f5b7ecd58488f372c584833") {
    id,
    symbol,
    name,
    decimals,
    totalSupply,
    volume,
    volumeUSD,
  }
  pool(id: "0xd5d3022d63b220609bb52842c1b47157e046f5ca"){
    id,
    liquidity,
    token0 {
			id,
      symbol,
      name,
      volumeUSD
    },
    token1{
			id,
      symbol,
      name,
      volumeUSD
    }
  }
}
`;

  const {data} = await axios.post(
    `https://gateway-arbitrum.network.thegraph.com/api/${API_KEY}/subgraphs/id/3hCPRGf4z88VC5rsBKU5AA9FBBq5nF3jbKJG7VZCbhjm`,
    {query}
  );

  console.log(data.data)

  // const price = parseFloat(data.data.pool.token0Price);
  // console.log("price: " + price);

 
}

setInterval(start, 30000);
start();
