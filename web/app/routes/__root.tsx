/// <reference types="vite/client" />
import { getAuth } from "@clerk/tanstack-start/server"
import type { QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import {
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext,
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import {
  Body,
  Head,
  Html,
  Meta,
  Scripts,
  createServerFn,
} from "@tanstack/start"
import * as React from "react"
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary.js"
import { NotFound } from "~/components/NotFound.js"
import appCss from "~/styles/app.css?url"

const fetchClerkAuth = createServerFn("GET", async (_, ctx) => {
  const user = await getAuth(ctx.request)

  return {
    user,
  }
})

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  meta: () => [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
  links: () => [
    { rel: "stylesheet", href: appCss },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
    { rel: "icon", href: "/favicon.ico" },
  ],
  beforeLoad: async () => {
    const { user } = await fetchClerkAuth()

    return {
      user,
    }
  },
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        {children}
        <ScrollRestoration />
        <TanStackRouterDevtools position="bottom-right" />
        <ReactQueryDevtools buttonPosition="bottom-left" />
        <Scripts />
      </Body>
    </Html>
  )
}
