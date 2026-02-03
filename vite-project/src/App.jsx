//import axios from 'axios'
//import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import homePage from'./pages/HomePage'
import about from'./pages/AboutPage'
function App() {
	
	return <BrowserRouter>
	<Routes>
		<Route path='/' Component={homePage} />
		<Route path='/about' Component={about} />
	</Routes>
	
	</BrowserRouter>
		

}

export default App
