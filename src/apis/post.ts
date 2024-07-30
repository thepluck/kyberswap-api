import { aggregatorDomain } from '../utils/domain';
import axios from 'axios';
import { getSwapRoute } from './get';
import { account } from '../utils/client';

export async function postSwapRoute() {
  const chainName = 'bttc';
  const path = `/${chainName}/api/v1/route/build`;

  const swapRouteData = await getSwapRoute();
  const routeSummary = swapRouteData.routeSummary;

  const requestBody = {
    routeSummary: routeSummary,
    sender: account.address,
    recipient: account.address,
    slippageTolerance: 50
  }

  try {
    console.log(`\nCalling Post Swap Route API: ${aggregatorDomain}${path}`);
    const {data} = await axios.post(aggregatorDomain + path, requestBody);
    return data.data;
  } catch (error) {
    console.error(`POST Swap Route API Error: ${error}`);
  }
}
