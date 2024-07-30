import { client } from "../utils/client";
import { postSwapRoute } from "./post";

export async function swap() {
    const swapData = await postSwapRoute();
    const encodedData = swapData.data;
    const routerAddress = swapData.routerAddress;

    const hash = await client.sendTransaction({
        data: encodedData,
        to: routerAddress,
        value: 100000000000000000000n,
    })
}