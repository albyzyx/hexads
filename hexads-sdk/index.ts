import { JSONRPCClient } from "json-rpc-2.0";

let rpcEndpoint;

export const init = (_rpcEndpoint: string) => {
  rpcEndpoint = _rpcEndpoint;
};

export const jsonRpcClient: JSONRPCClient<void> = new JSONRPCClient(
  (jsonRPCRequest) =>
    fetch(rpcEndpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jsonRPCRequest),
    }).then((response) => {
      if (response.status === 200) {
        // Use client.receive when you received a JSON-RPC response.
        return response
          .json()
          .then((jsonRPCResponse) => jsonRpcClient.receive(jsonRPCResponse));
      } else if (jsonRPCRequest.id !== undefined) {
        return Promise.reject(new Error(response.statusText));
      }
    })
);

export const requestAd = async ({ userAddress, PlatformAddress }) => {
  const res = await jsonRpcClient.request("requestAd", {
    userAddress,
    PlatformAddress,
  });
  return res;
};

export const verifyAdView = async ({
  userAddress,
  platformAddress,
  advertiserAddress,
  campaignID,
  isView,
}) => {
  const res = await jsonRpcClient.request("viewAd", {
    userAddress,
    platformAddress,
    advertiserAddress,
    campaignID,
    isView,
  });
  return res;
};
