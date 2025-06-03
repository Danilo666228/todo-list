import { createBrowserRouter } from 'react-router'

import { AuthLayout, IndexLayout, MainLayout } from '@/components/layouts'
import { ROUTES } from '@/components/shared/constants/router'

export const router = createBrowserRouter([
	{
		element: <IndexLayout />,
		children: [
			{
				path: ROUTES.HOME,
				element: <MainLayout />
			},
			{
				path: ROUTES.AUTH,
				element: <AuthLayout />
			}
		]
	}
])
