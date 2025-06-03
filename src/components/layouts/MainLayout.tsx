import { Outlet } from 'react-router'

export const MainLayout = () => {
	return (
		<div>
			<h1>main layout</h1>
			<Outlet />
		</div>
	)
}
