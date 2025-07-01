import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "src/server/api/trpc";
import { products, users } from "src/server/db/schema";
import { emails } from "src/server/db/schema";
import { eq } from "drizzle-orm";
import { error } from "console";
export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ text: z.string()}))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(emails).values({
        email: input.text
      });
    }),

  createUser: publicProcedure
    .input(z.object({first: z.string(), last: z.string(), email:z.string() }))
    .mutation(async ({ctx, input}) => {
      await ctx.db.insert(users).values({
        first: input.first,
        last: input.last,
        email: input.email
      })
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.query.products.findFirst({
      orderBy: (products, { desc }) => [desc(products.createdAt)],
    });
    return post ?? null;
  }),

  getAll: publicProcedure.query(async ({ctx}) => {
    return await ctx.db.select().from(products);
  }),

  getProduct: publicProcedure.input(z.object ({id: z.number()})).query(async ({ctx, input}) => {
    const pro = await ctx.db.select().from(products).where(eq(products.id,input.id)).limit(1);
		return pro ?? null;
  })

});
