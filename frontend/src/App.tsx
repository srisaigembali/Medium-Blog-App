import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";
import { RecoilRoot } from "recoil";

function App() {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/signup'
						element={<Signup />}
					/>
					<Route
						path='/signin'
						element={<Signin />}
					/>
					<Route
						path='/blog/:id'
						element={<Blog />}
					/>
					<Route
						path='/blogs'
						element={<Blogs />}
					/>
					<Route
						path='/publish'
						element={<Publish />}
					/>
				</Routes>
			</BrowserRouter>
		</RecoilRoot>
	);
}

export default App;
