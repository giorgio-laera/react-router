//import axios from 'axios'
//import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutDefault from './layautsDefault/LayoutDefault'
import HomePage from './pages/HomePage'
import About from './pages/AboutPage'
import Products from './pages/ProductsPage'
import SingleItem from './pages/SingleItemPage'
import Error from './pages/ErrorPage'
function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route Component={LayoutDefault}>
					<Route path='/' Component={HomePage} />
					<Route path='/About' Component={About} />
					<Route path='/Products' Component={Products} />
					<Route path='/Products/:id' Component={SingleItem} />
					<Route path='/Error' Component={Error} />
				</Route>
			</Routes>

		</BrowserRouter>)


}

export default App
