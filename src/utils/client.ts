import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { bitTorrent } from 'viem/chains';
import 'dotenv/config';

const privateKey = process.env.PRIVATE_KEY! as `0x${string}`;
export const account = privateKeyToAccount(privateKey);

export const client = createWalletClient({
  transport: http(),
  chain: bitTorrent,
  account,
});
