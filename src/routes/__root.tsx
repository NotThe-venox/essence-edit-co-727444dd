import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CursorGlow } from "../components/CursorGlow";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-semibold tracking-tight">404</h1>
        <p className="mt-4 text-muted-foreground">This page doesn't exist.</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lumen Studio — Premium Video Editing for Creators & Brands" },
      { name: "description", content: "High-performance video editing for creators, agencies, and brands that want more views, engagement, and conversions." },
      { property: "og:title", content: "Lumen Studio — Premium Video Editing for Creators & Brands" },
      { property: "og:description", content: "High-performance video editing for creators, agencies, and brands that want more views, engagement, and conversions." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Lumen Studio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lumen Studio — Premium Video Editing for Creators & Brands" },
      { name: "twitter:description", content: "High-performance video editing for creators, agencies, and brands that want more views, engagement, and conversions." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9a9700dc-80c1-4331-967d-ad06f7c15221/id-preview-e5314b58--55a89bd9-3478-4afd-9c57-9a1a7ffc0ae1.lovable.app-1784643602149.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9a9700dc-80c1-4331-967d-ad06f7c15221/id-preview-e5314b58--55a89bd9-3478-4afd-9c57-9a1a7ffc0ae1.lovable.app-1784643602149.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <CursorGlow />
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-center" />
    </QueryClientProvider>
  );
}
