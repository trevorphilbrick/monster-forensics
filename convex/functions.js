import { action } from "./_generated/server";

export const getImage = action({
  handler: async (ctx, args) => {
    return { context: ctx.params, args };
  },
});
