import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import type { ReactNode } from 'react'

interface ProvidersProps {
	children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
	return (
		<>
			<MantineProvider>{children}</MantineProvider>
		</>
	)
}

export default Providers
