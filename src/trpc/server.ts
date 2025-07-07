import "server-only";

import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { cookies, headers } from "next/headers";
import { cache } from "react";

import { createCaller, type AppRouter } from "src/server/api/root";
import { createTRPCContext } from "src/server/api/trpc";
import { createQueryClient } from "./query-client";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache( async () => {
	const rawHeaders = await headers();

	const heads = new Headers(rawHeaders); 
	heads.set("x-trpc-source", "rsc");

	const request = new NextRequest("https://notused.com", {
		headers: rawHeaders,
	});

	return createTRPCContext({
			headers: heads,
			auth: getAuth(request)
		});
	});

const getQueryClient = cache(createQueryClient);
const caller = createCaller(createContext);

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
	caller,
	getQueryClient,
);
