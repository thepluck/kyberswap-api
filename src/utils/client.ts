import { createWalletClient, http } from 'viem';
import { mnemonicToAccount } from 'viem/accounts';
import { bitTorrent } from 'viem/chains';
import 'dotenv/config';

const account = mnemonicToAccount(process.env.MNEMONIC!);

const client = createWalletClient({
  transport: http(),
  chain: bitTorrent,
  account,
});
