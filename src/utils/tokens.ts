import { Chain, Address } from 'viem';
import { bitTorrent } from 'viem/chains';

interface Token {
  chain: Chain;
  address: Address;
  name: string;
  symbol: string;
  decimals: number;
}

export const tokenIn: Token = {
  chain: bitTorrent,
  address: `0x8D193c6efa90BCFf940A98785d1Ce9D093d3DC8A`,
  name: `Wrapped BTT`,
  symbol: `WBTT`,
  decimals: 18,
};

export const tokenOut: Token = {
  chain: bitTorrent,
  address: `0x9B5F27f6ea9bBD753ce3793a07CbA3C74644330d`,
  name: `Binance-Peg BSC-USD_BSC`,
  symbol: `USDT_b`,
  decimals: 18,
};
