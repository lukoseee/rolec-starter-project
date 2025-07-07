import { string, z, ZodError } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "src/server/api/trpc";
import { products, users } from "src/server/db/schema";
import { emails } from "src/server/db/schema";
import { eq } from "drizzle-orm";

const userSchema = z.object( {
	firstName: 
		z.string({required_error: "Name is required", invalid_type_error: "Name must be a string"})
		.min(2, "Must be atleast 2 characters")
		.max(30, "Must be below 30 characters"),
	lastName: 
		z.string({required_error: "Name is required", invalid_type_error: "Name must be a string"}).
		min(2, "Must be atleast 2 characters").
		max(30, "Must be below 30 characters"),
	email: 
		z.string({required_error: "Email is required", invalid_type_error: "Email must be a string"})
		.email("Invalid Email Format")
	}
)

export const productRouter = createTRPCRouter({

    create: protectedProcedure
		.input(z.object({ text: z.string()}))
		.mutation(async ({ ctx, input }) => {
		await ctx.db.insert(emails).values({
		email: input.text
		});
	}),
    
	createUser: publicProcedure
		.input(userSchema)
		.mutation(async ({ctx, input}) => {
			await ctx.db.insert(users).values({
			first: input.firstName,
			last: input.lastName,
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
