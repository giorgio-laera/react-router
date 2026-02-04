//import axios from 'axios'
//import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import navBar from './pages/NavBar'
import LayoutDefault from './layautsDefault/LayoutDefault'
import HomePage from'./pages/HomePage'
import about from'./pages/AboutPage'
function App() {
	
	return <BrowserRouter>
	
	<Routes>

		<Route path='/' Component={HomePage} />
		<Route path='/about' Component={about} />

	</Routes>
	
	</BrowserRouter>
		

}

export default App
