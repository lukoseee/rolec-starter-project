import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "src/server/api/trpc";
import { products } from "src/server/db/schema";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(products).values({
        product_name: input.name,
      });
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.query.products.findFirst({
      orderBy: (products, { desc }) => [desc(products.createdAt)],
    });

    return post ?? null;
  }),
});
