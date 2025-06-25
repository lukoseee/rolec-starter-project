import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "src/server/api/trpc";
import { products } from "src/server/db/schema";
import { eq } from "drizzle-orm";
export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1), image: z.string().min(1),  kind: z.string().min(1),  description: z.string().min(1),  materials: z.string().min(1),  enclosure_dimensions: z.string().min(1), charge_protocol: z.string().min(1),  input_voltage: z.string().min(1), protection: z.string().min(1),},))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(products).values({
        product_name: input.name,
				image: input.image,
        kind: input.kind,
        description: input.description,
        materials: input.materials,
        enclosure_dimensions: input.enclosure_dimensions,
        charge_protocol: input.charge_protocol,
        input_voltage: input.input_voltage,
        protection: input.protection,
      });
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
