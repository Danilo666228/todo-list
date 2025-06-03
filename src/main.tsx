import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'

import Providers from './providers'
import { router } from './router/router'
import './styles/index.css'

const container = document.getElementById('root')

if (!container) {
	throw new Error('Could not find root element')
}

createRoot(container).render(
	<Providers>
		<RouterProvider router={router} />
	</Providers>
)
