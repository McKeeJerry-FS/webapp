import { createServer } from "http";
import { handler } from "./handler";

const port = 3000;
const server = createServer(handler);

server.on("request", handler);
server.listen(port);
server.on("listening", () => console.log(`Server is listening on port ${port}`));
