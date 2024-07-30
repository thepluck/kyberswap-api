import { tokenIn, tokenOut } from '../utils/tokens';
import { aggregatorDomain } from '../utils/domain';
import axios from 'axios';

export async function getSwapRoute() {
  const chainName = 'bttc';
  const path = `/${chainName}/api/v1/routes`;

  const pathConfig = {
    params: {
      tokenIn: tokenIn.address,
      tokenOut: tokenOut.address,
      amountIn: Number(100 * 10 ** tokenIn.decimals).toString(),
    },
  };

  try {
    console.log(`\nCalling Get Swap Route API: ${aggregatorDomain}${path}`);
    const { data } = await axios.get(aggregatorDomain + path, pathConfig);
    return data.data;
  } catch (error) {
    console.error(`GET Swap Route API Error: ${error}`);
  }
}
