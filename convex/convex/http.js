import { httpRouter } from "convex/server";
import { createImage, getImage } from "./functions";

const http = httpRouter();

http.route({
  path: "/create-image",
  method: "POST",
  handler: createImage,
});

export default http;
