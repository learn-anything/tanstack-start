import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/_pages/_protected")({
  beforeLoad: ({ context, location }) => {
    if (!context.user.id) {
      throw redirect({
        to: "/sign-in/$",
        search: { redirect_url: location.pathname },
      })
    }
  },

  component: () => <Outlet />,
})
