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
  address: `0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE`,
  name: `BitTorrent`,
  symbol: `BTT`,
  decimals: 18,
};

export const tokenOut: Token = {
  chain: bitTorrent,
  address: `0xCa424b845497f7204D9301bd13Ff87C0E2e86FCF`,
  name: `USD Coin_BSC`,
  symbol: `USDC_b`,
  decimals: 18,
};
