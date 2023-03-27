import { lazy, ReactNode, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('../pages/home'))
const About = lazy(() => import('../pages/about'))
const Config = lazy(() => import('../pages/config'))

import AppLayout from '../layout/index'

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>
}

export const routers: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: lazyLoad(<Home />),
      },
      {
        path: '/about',
        element: lazyLoad(<About />),
      },
      {
        path: '/config',
        element: lazyLoad(<Config />),
      },
    ],
  },
]
