import { JSONRPCClient } from "json-rpc-2.0";

export const jsonRpcClient: JSONRPCClient<void> = new JSONRPCClient(
  (jsonRPCRequest) =>
    fetch("http://localhost:8080/json-rpc", {
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

export const indexCampaign = async () => {};
export const requestAd = async () => {};
export const verifyAdView = () => {};
