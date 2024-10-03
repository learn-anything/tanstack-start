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
import { Route as LayoutPagesProtectedTestingImport } from './routes/_layout/_pages/_protected/testing'
import { Route as LayoutPagestopicSplatImport } from './routes/_layout/_pages/(topic)/$'
import { Route as LayoutPagesProtectedLinksIndexImport } from './routes/_layout/_pages/_protected/links/index'
import { Route as LayoutauthAuthSignUpSplatImport } from './routes/_layout/(auth)/_auth.sign-up.$'
import { Route as LayoutauthAuthSignInSplatImport } from './routes/_layout/(auth)/_auth.sign-in.$'

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

const LayoutPagesProtectedTestingRoute =
  LayoutPagesProtectedTestingImport.update({
    path: '/testing',
    getParentRoute: () => LayoutPagesProtectedRoute,
  } as any)

const LayoutPagestopicSplatRoute = LayoutPagestopicSplatImport.update({
  path: '/$',
  getParentRoute: () => LayoutPagesRoute,
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
    '/_layout/_pages/_protected/testing': {
      id: '/_layout/_pages/_protected/testing'
      path: '/testing'
      fullPath: '/testing'
      preLoaderRoute: typeof LayoutPagesProtectedTestingImport
      parentRoute: typeof LayoutPagesProtectedImport
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
  }
}

// Create and export the route tree

interface LayoutPagesProtectedRouteChildren {
  LayoutPagesProtectedTestingRoute: typeof LayoutPagesProtectedTestingRoute
  LayoutPagesProtectedLinksIndexRoute: typeof LayoutPagesProtectedLinksIndexRoute
}

const LayoutPagesProtectedRouteChildren: LayoutPagesProtectedRouteChildren = {
  LayoutPagesProtectedTestingRoute: LayoutPagesProtectedTestingRoute,
  LayoutPagesProtectedLinksIndexRoute: LayoutPagesProtectedLinksIndexRoute,
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
  '/testing': typeof LayoutPagesProtectedTestingRoute
  '/sign-in/$': typeof LayoutauthAuthSignInSplatRoute
  '/sign-up/$': typeof LayoutauthAuthSignUpSplatRoute
  '/links': typeof LayoutPagesProtectedLinksIndexRoute
}

export interface FileRoutesByTo {
  '': typeof LayoutPagesProtectedRouteWithChildren
  '/': typeof LayoutlandingIndexRoute
  '/$': typeof LayoutPagestopicSplatRoute
  '/testing': typeof LayoutPagesProtectedTestingRoute
  '/sign-in/$': typeof LayoutauthAuthSignInSplatRoute
  '/sign-up/$': typeof LayoutauthAuthSignUpSplatRoute
  '/links': typeof LayoutPagesProtectedLinksIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/_pages': typeof LayoutPagesRouteWithChildren
  '/_layout/': typeof LayoutlandingIndexRoute
  '/_layout/_auth': typeof LayoutauthAuthRouteWithChildren
  '/_layout/_pages/_protected': typeof LayoutPagesProtectedRouteWithChildren
  '/_layout/_pages/$': typeof LayoutPagestopicSplatRoute
  '/_layout/_pages/_protected/testing': typeof LayoutPagesProtectedTestingRoute
  '/_layout/_auth/sign-in/$': typeof LayoutauthAuthSignInSplatRoute
  '/_layout/_auth/sign-up/$': typeof LayoutauthAuthSignUpSplatRoute
  '/_layout/_pages/_protected/links/': typeof LayoutPagesProtectedLinksIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/'
    | '/$'
    | '/testing'
    | '/sign-in/$'
    | '/sign-up/$'
    | '/links'
  fileRoutesByTo: FileRoutesByTo
  to: '' | '/' | '/$' | '/testing' | '/sign-in/$' | '/sign-up/$' | '/links'
  id:
    | '__root__'
    | '/_layout'
    | '/_layout/_pages'
    | '/_layout/'
    | '/_layout/_auth'
    | '/_layout/_pages/_protected'
    | '/_layout/_pages/$'
    | '/_layout/_pages/_protected/testing'
    | '/_layout/_auth/sign-in/$'
    | '/_layout/_auth/sign-up/$'
    | '/_layout/_pages/_protected/links/'
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
        "/_layout/_pages/_protected/testing",
        "/_layout/_pages/_protected/links/"
      ]
    },
    "/_layout/_pages/$": {
      "filePath": "_layout/_pages/(topic)/$.tsx",
      "parent": "/_layout/_pages"
    },
    "/_layout/_pages/_protected/testing": {
      "filePath": "_layout/_pages/_protected/testing.tsx",
      "parent": "/_layout/_pages/_protected"
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
    }
  }
}
ROUTE_MANIFEST_END */
