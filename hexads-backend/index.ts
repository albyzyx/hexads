import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { JSONRPCServer } from "json-rpc-2.0";
import indexCampaign from "./methods/indexCampaign";

const server = new JSONRPCServer();

server.addMethod("echo", ({ text }: { text?: string }) => text);
server.addMethod("indexCampaign", indexCampaign);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/json-rpc", (req, res) => {
  const jsonRPCRequest = req.body;
  server.receive(jsonRPCRequest).then((jsonRPCResponse) => {
    if (jsonRPCResponse) {
      res.json(jsonRPCResponse);
    } else {
      res.sendStatus(204);
    }
  });
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
