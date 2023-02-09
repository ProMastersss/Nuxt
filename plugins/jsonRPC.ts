import { JSONRPCClient, JSONRPCResponse } from "json-rpc-2.0";
import ky from "ky";

export default defineNuxtPlugin((nuxtApp) => {
  const client: JSONRPCClient = new JSONRPCClient((jsonRPCRequest) =>
    ky
      .post(getServerUrl("json-rpc"), {
        headers: {
          "content-type": "application/json",
          ...headers(),
        },
        body: JSON.stringify(jsonRPCRequest),
      })
      .then((response) => {
        if (response.status === 200) {
          return response
            .json<JSONRPCResponse>()
            .then((jsonRPCResponse) => client.receive(jsonRPCResponse));
        } else if (jsonRPCRequest.id !== undefined) {
          return Promise.reject(new Error(response.statusText));
        }
      })
  );

  return { provide: { client } };
});
