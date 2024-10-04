/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutPagesImport } from './routes/_layout/_pages'
import { Route as LayoutlandingIndexImport } from './routes/_layout/(landing)/index'
import { Route as LayoutPagesProtectedImport } from './routes/_layout/_pages/_protected'
import { Route as LayoutauthAuthImport } from './routes/_layout/(auth)/_auth'
import { Route as LayoutPagestopicSplatImport } from './routes/_layout/_pages/(topic)/$'
import { Route as LayoutPagesProtectedTopicsIndexImport } from './routes/_layout/_pages/_protected/topics/index'
import { Route as LayoutPagesProtectedProfileIndexImport } from './routes/_layout/_pages/_protected/profile/index'
import { Route as LayoutPagesProtectedPagesIndexImport } from './routes/_layout/_pages/_protected/pages/index'
import { Route as LayoutPagesProtectedOnboardingIndexImport } from './routes/_layout/_pages/_protected/onboarding/index'
import { Route as LayoutPagesProtectedLinksIndexImport } from './routes/_layout/_pages/_protected/links/index'
import { Route as LayoutauthAuthSignUpSplatImport } from './routes/_layout/(auth)/_auth.sign-up.$'
import { Route as LayoutauthAuthSignInSplatImport } from './routes/_layout/(auth)/_auth.sign-in.$'
import { Route as LayoutPagesProtectedPagesPageIdIndexImport } from './routes/_layout/_pages/_protected/pages/$pageId/index'

// Create Virtual Routes

const LayoutauthImport = createFileRoute('/_layout/(auth)')()

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutauthRoute = LayoutauthImport.update({
  id: '/(auth)',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutPagesRoute = LayoutPagesImport.update({
  id: '/_pages',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutlandingIndexRoute = LayoutlandingIndexImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutPagesProtectedRoute = LayoutPagesProtectedImport.update({
  id: '/_protected',
  getParentRoute: () => LayoutPagesRoute,
} as any)

const LayoutauthAuthRoute = LayoutauthAuthImport.update({
  id: '/_auth',
  getParentRoute: () => LayoutauthRoute,
} as any)

const LayoutPagestopicSplatRoute = LayoutPagestopicSplatImport.update({
  path: '/$',
  getParentRoute: () => LayoutPagesRoute,
} as any)

const LayoutPagesProtectedTopicsIndexRoute =
  LayoutPagesProtectedTopicsIndexImport.update({
    path: '/topics/',
    getParentRoute: () => LayoutPagesProtectedRoute,
  } as any)

const LayoutPagesProtectedProfileIndexRoute =
  LayoutPagesProtectedProfileIndexImport.update({
    path: '/profile/',
    getParentRoute: () => LayoutPagesProtectedRoute,
  } as any)

const LayoutPagesProtectedPagesIndexRoute =
  LayoutPagesProtectedPagesIndexImport.update({
    path: '/pages/',
    getParentRoute: () => LayoutPagesProtectedRoute,
  } as any)

const LayoutPagesProtectedOnboardingIndexRoute =
  LayoutPagesProtectedOnboardingIndexImport.update({
    path: '/onboarding/',
    getParentRoute: () => LayoutPagesProtectedRoute,
  } as any)

const LayoutPagesProtectedLinksIndexRoute =
  LayoutPagesProtectedLinksIndexImport.update({
    path: '/links/',
    getParentRoute: () => LayoutPagesProtectedRoute,
  } as any)

const LayoutauthAuthSignUpSplatRoute = LayoutauthAuthSignUpSplatImport.update({
  path: '/sign-up/$',
  getParentRoute: () => LayoutauthAuthRoute,
} as any)

const LayoutauthAuthSignInSplatRoute = LayoutauthAuthSignInSplatImport.update({
  path: '/sign-in/$',
  getParentRoute: () => LayoutauthAuthRoute,
} as any)

const LayoutPagesProtectedPagesPageIdIndexRoute =
  LayoutPagesProtectedPagesPageIdIndexImport.update({
    path: '/pages/$pageId/',
    getParentRoute: () => LayoutPagesProtectedRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/_pages': {
      id: '/_layout/_pages'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutPagesImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/(auth)': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutauthImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/(auth)/_auth': {
      id: '/_layout/_auth'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutauthAuthImport
      parentRoute: typeof LayoutauthRoute
    }
    '/_layout/_pages/_protected': {
      id: '/_layout/_pages/_protected'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutPagesProtectedImport
      parentRoute: typeof LayoutPagesImport
    }
    '/_layout/(landing)/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutlandingIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/_pages/(topic)/$': {
      id: '/_layout/_pages/$'
      path: '/$'
      fullPath: '/$'
      preLoaderRoute: typeof LayoutPagestopicSplatImport
      parentRoute: typeof LayoutPagesImport
    }
    '/_layout/(auth)/_auth/sign-in/$': {
      id: '/_layout/_auth/sign-in/$'
      path: '/sign-in/$'
      fullPath: '/sign-in/$'
      preLoaderRoute: typeof LayoutauthAuthSignInSplatImport
      parentRoute: typeof LayoutauthAuthImport
    }
    '/_layout/(auth)/_auth/sign-up/$': {
      id: '/_layout/_auth/sign-up/$'
      path: '/sign-up/$'
      fullPath: '/sign-up/$'
      preLoaderRoute: typeof LayoutauthAuthSignUpSplatImport
      parentRoute: typeof LayoutauthAuthImport
    }
    '/_layout/_pages/_protected/links/': {
      id: '/_layout/_pages/_protected/links/'
      path: '/links'
      fullPath: '/links'
      preLoaderRoute: typeof LayoutPagesProtectedLinksIndexImport
      parentRoute: typeof LayoutPagesProtectedImport
    }
    '/_layout/_pages/_protected/onboarding/': {
      id: '/_layout/_pages/_protected/onboarding/'
      path: '/onboarding'
      fullPath: '/onboarding'
      preLoaderRoute: typeof LayoutPagesProtectedOnboardingIndexImport
      parentRoute: typeof LayoutPagesProtectedImport
    }
    '/_layout/_pages/_protected/pages/': {
      id: '/_layout/_pages/_protected/pages/'
      path: '/pages'
      fullPath: '/pages'
      preLoaderRoute: typeof LayoutPagesProtectedPagesIndexImport
      parentRoute: typeof LayoutPagesProtectedImport
    }
    '/_layout/_pages/_protected/profile/': {
      id: '/_layout/_pages/_protected/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof LayoutPagesProtectedProfileIndexImport
      parentRoute: typeof LayoutPagesProtectedImport
    }
    '/_layout/_pages/_protected/topics/': {
      id: '/_layout/_pages/_protected/topics/'
      path: '/topics'
      fullPath: '/topics'
      preLoaderRoute: typeof LayoutPagesProtectedTopicsIndexImport
      parentRoute: typeof LayoutPagesProtectedImport
    }
    '/_layout/_pages/_protected/pages/$pageId/': {
      id: '/_layout/_pages/_protected/pages/$pageId/'
      path: '/pages/$pageId'
      fullPath: '/pages/$pageId'
      preLoaderRoute: typeof LayoutPagesProtectedPagesPageIdIndexImport
      parentRoute: typeof LayoutPagesProtectedImport
    }
  }
}

// Create and export the route tree

interface LayoutPagesProtectedRouteChildren {
  LayoutPagesProtectedLinksIndexRoute: typeof LayoutPagesProtectedLinksIndexRoute
  LayoutPagesProtectedOnboardingIndexRoute: typeof LayoutPagesProtectedOnboardingIndexRoute
  LayoutPagesProtectedPagesIndexRoute: typeof LayoutPagesProtectedPagesIndexRoute
  LayoutPagesProtectedProfileIndexRoute: typeof LayoutPagesProtectedProfileIndexRoute
  LayoutPagesProtectedTopicsIndexRoute: typeof LayoutPagesProtectedTopicsIndexRoute
  LayoutPagesProtectedPagesPageIdIndexRoute: typeof LayoutPagesProtectedPagesPageIdIndexRoute
}

const LayoutPagesProtectedRouteChildren: LayoutPagesProtectedRouteChildren = {
  LayoutPagesProtectedLinksIndexRoute: LayoutPagesProtectedLinksIndexRoute,
  LayoutPagesProtectedOnboardingIndexRoute:
    LayoutPagesProtectedOnboardingIndexRoute,
  LayoutPagesProtectedPagesIndexRoute: LayoutPagesProtectedPagesIndexRoute,
  LayoutPagesProtectedProfileIndexRoute: LayoutPagesProtectedProfileIndexRoute,
  LayoutPagesProtectedTopicsIndexRoute: LayoutPagesProtectedTopicsIndexRoute,
  LayoutPagesProtectedPagesPageIdIndexRoute:
    LayoutPagesProtectedPagesPageIdIndexRoute,
}

const LayoutPagesProtectedRouteWithChildren =
  LayoutPagesProtectedRoute._addFileChildren(LayoutPagesProtectedRouteChildren)

interface LayoutPagesRouteChildren {
  LayoutPagesProtectedRoute: typeof LayoutPagesProtectedRouteWithChildren
  LayoutPagestopicSplatRoute: typeof LayoutPagestopicSplatRoute
}

const LayoutPagesRouteChildren: LayoutPagesRouteChildren = {
  LayoutPagesProtectedRoute: LayoutPagesProtectedRouteWithChildren,
  LayoutPagestopicSplatRoute: LayoutPagestopicSplatRoute,
}

const LayoutPagesRouteWithChildren = LayoutPagesRoute._addFileChildren(
  LayoutPagesRouteChildren,
)

interface LayoutauthAuthRouteChildren {
  LayoutauthAuthSignInSplatRoute: typeof LayoutauthAuthSignInSplatRoute
  LayoutauthAuthSignUpSplatRoute: typeof LayoutauthAuthSignUpSplatRoute
}

const LayoutauthAuthRouteChildren: LayoutauthAuthRouteChildren = {
  LayoutauthAuthSignInSplatRoute: LayoutauthAuthSignInSplatRoute,
  LayoutauthAuthSignUpSplatRoute: LayoutauthAuthSignUpSplatRoute,
}

const LayoutauthAuthRouteWithChildren = LayoutauthAuthRoute._addFileChildren(
  LayoutauthAuthRouteChildren,
)

interface LayoutauthRouteChildren {
  LayoutauthAuthRoute: typeof LayoutauthAuthRouteWithChildren
}

const LayoutauthRouteChildren: LayoutauthRouteChildren = {
  LayoutauthAuthRoute: LayoutauthAuthRouteWithChildren,
}

const LayoutauthRouteWithChildren = LayoutauthRoute._addFileChildren(
  LayoutauthRouteChildren,
)

interface LayoutRouteChildren {
  LayoutPagesRoute: typeof LayoutPagesRouteWithChildren
  LayoutauthRoute: typeof LayoutauthRouteWithChildren
  LayoutlandingIndexRoute: typeof LayoutlandingIndexRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutPagesRoute: LayoutPagesRouteWithChildren,
  LayoutauthRoute: LayoutauthRouteWithChildren,
  LayoutlandingIndexRoute: LayoutlandingIndexRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutPagesProtectedRouteWithChildren
  '/': typeof LayoutlandingIndexRoute
  '/$': typeof LayoutPagestopicSplatRoute
  '/sign-in/$': typeof LayoutauthAuthSignInSplatRoute
  '/sign-up/$': typeof LayoutauthAuthSignUpSplatRoute
  '/links': typeof LayoutPagesProtectedLinksIndexRoute
  '/onboarding': typeof LayoutPagesProtectedOnboardingIndexRoute
  '/pages': typeof LayoutPagesProtectedPagesIndexRoute
  '/profile': typeof LayoutPagesProtectedProfileIndexRoute
  '/topics': typeof LayoutPagesProtectedTopicsIndexRoute
  '/pages/$pageId': typeof LayoutPagesProtectedPagesPageIdIndexRoute
}

export interface FileRoutesByTo {
  '': typeof LayoutPagesProtectedRouteWithChildren
  '/': typeof LayoutlandingIndexRoute
  '/$': typeof LayoutPagestopicSplatRoute
  '/sign-in/$': typeof LayoutauthAuthSignInSplatRoute
  '/sign-up/$': typeof LayoutauthAuthSignUpSplatRoute
  '/links': typeof LayoutPagesProtectedLinksIndexRoute
  '/onboarding': typeof LayoutPagesProtectedOnboardingIndexRoute
  '/pages': typeof LayoutPagesProtectedPagesIndexRoute
  '/profile': typeof LayoutPagesProtectedProfileIndexRoute
  '/topics': typeof LayoutPagesProtectedTopicsIndexRoute
  '/pages/$pageId': typeof LayoutPagesProtectedPagesPageIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/_pages': typeof LayoutPagesRouteWithChildren
  '/_layout/': typeof LayoutlandingIndexRoute
  '/_layout/_auth': typeof LayoutauthAuthRouteWithChildren
  '/_layout/_pages/_protected': typeof LayoutPagesProtectedRouteWithChildren
  '/_layout/_pages/$': typeof LayoutPagestopicSplatRoute
  '/_layout/_auth/sign-in/$': typeof LayoutauthAuthSignInSplatRoute
  '/_layout/_auth/sign-up/$': typeof LayoutauthAuthSignUpSplatRoute
  '/_layout/_pages/_protected/links/': typeof LayoutPagesProtectedLinksIndexRoute
  '/_layout/_pages/_protected/onboarding/': typeof LayoutPagesProtectedOnboardingIndexRoute
  '/_layout/_pages/_protected/pages/': typeof LayoutPagesProtectedPagesIndexRoute
  '/_layout/_pages/_protected/profile/': typeof LayoutPagesProtectedProfileIndexRoute
  '/_layout/_pages/_protected/topics/': typeof LayoutPagesProtectedTopicsIndexRoute
  '/_layout/_pages/_protected/pages/$pageId/': typeof LayoutPagesProtectedPagesPageIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/'
    | '/$'
    | '/sign-in/$'
    | '/sign-up/$'
    | '/links'
    | '/onboarding'
    | '/pages'
    | '/profile'
    | '/topics'
    | '/pages/$pageId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/'
    | '/$'
    | '/sign-in/$'
    | '/sign-up/$'
    | '/links'
    | '/onboarding'
    | '/pages'
    | '/profile'
    | '/topics'
    | '/pages/$pageId'
  id:
    | '__root__'
    | '/_layout'
    | '/_layout/_pages'
    | '/_layout/'
    | '/_layout/_auth'
    | '/_layout/_pages/_protected'
    | '/_layout/_pages/$'
    | '/_layout/_auth/sign-in/$'
    | '/_layout/_auth/sign-up/$'
    | '/_layout/_pages/_protected/links/'
    | '/_layout/_pages/_protected/onboarding/'
    | '/_layout/_pages/_protected/pages/'
    | '/_layout/_pages/_protected/profile/'
    | '/_layout/_pages/_protected/topics/'
    | '/_layout/_pages/_protected/pages/$pageId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/_pages",
        "/_layout/",
        "/_layout/"
      ]
    },
    "/_layout/_pages": {
      "filePath": "_layout/_pages.tsx",
      "parent": "/_layout",
      "children": [
        "/_layout/_pages/_protected",
        "/_layout/_pages/$"
      ]
    },
    "/_layout/": {
      "filePath": "_layout/(landing)/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/_auth": {
      "filePath": "_layout/(auth)/_auth.tsx",
      "parent": "/_layout/",
      "children": [
        "/_layout/_auth/sign-in/$",
        "/_layout/_auth/sign-up/$"
      ]
    },
    "/_layout/_pages/_protected": {
      "filePath": "_layout/_pages/_protected.tsx",
      "parent": "/_layout/_pages",
      "children": [
        "/_layout/_pages/_protected/links/",
        "/_layout/_pages/_protected/onboarding/",
        "/_layout/_pages/_protected/pages/",
        "/_layout/_pages/_protected/profile/",
        "/_layout/_pages/_protected/topics/",
        "/_layout/_pages/_protected/pages/$pageId/"
      ]
    },
    "/_layout/_pages/$": {
      "filePath": "_layout/_pages/(topic)/$.tsx",
      "parent": "/_layout/_pages"
    },
    "/_layout/_auth/sign-in/$": {
      "filePath": "_layout/(auth)/_auth.sign-in.$.tsx",
      "parent": "/_layout/_auth"
    },
    "/_layout/_auth/sign-up/$": {
      "filePath": "_layout/(auth)/_auth.sign-up.$.tsx",
      "parent": "/_layout/_auth"
    },
    "/_layout/_pages/_protected/links/": {
      "filePath": "_layout/_pages/_protected/links/index.tsx",
      "parent": "/_layout/_pages/_protected"
    },
    "/_layout/_pages/_protected/onboarding/": {
      "filePath": "_layout/_pages/_protected/onboarding/index.tsx",
      "parent": "/_layout/_pages/_protected"
    },
    "/_layout/_pages/_protected/pages/": {
      "filePath": "_layout/_pages/_protected/pages/index.tsx",
      "parent": "/_layout/_pages/_protected"
    },
    "/_layout/_pages/_protected/profile/": {
      "filePath": "_layout/_pages/_protected/profile/index.tsx",
      "parent": "/_layout/_pages/_protected"
    },
    "/_layout/_pages/_protected/topics/": {
      "filePath": "_layout/_pages/_protected/topics/index.tsx",
      "parent": "/_layout/_pages/_protected"
    },
    "/_layout/_pages/_protected/pages/$pageId/": {
      "filePath": "_layout/_pages/_protected/pages/$pageId/index.tsx",
      "parent": "/_layout/_pages/_protected"
    }
  }
}
ROUTE_MANIFEST_END */
