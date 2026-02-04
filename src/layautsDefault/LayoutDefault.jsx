import { Outlet } from 'react-router-dom';
import Navbar from '../pages/NavBar';

function DefaultLayout() {
	return <>
			<Navbar />
			<Outlet />
	</>
}

export default DefaultLayout;