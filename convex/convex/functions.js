import { httpAction } from "./_generated/server";
import OpenAI from "openai";

const openai = new OpenAI();

export const createImage = httpAction(async (ctx, request) => {
  const body = await request.json();

  try {
    const result = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Given the following survey, create an ultra-realistic image of a monster that fits this description:\n\n${body} \n Don't add any text on the image. Match the description as much as possible. `,
      n: 1,
      size: "1024x1024",
    });

    const imageResponse = await fetch(result.data[0].url);

    if (!imageResponse.ok) {
      throw new Error("Failed to fetch image");
    }

    const image = await imageResponse.blob();

    const storageId = await ctx.storage.store(image);

    return new Response(JSON.stringify({ result, storedImage: storageId }), {
      status: 201,
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
        Vary: "Origin",
      }),
    });
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify({ error: e }), {
      status: 500,
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
        Vary: "Origin",
      }),
    });
  }
});
