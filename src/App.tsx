import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import ExplorePage from "./pages/Explore/"
import CourseDetailPage from "./pages/CourseDetail"
import CheckoutPage from "./pages/Checkout"

function App() {
    return (
        <>
            {/* Provider Router */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/explore" element={<ExplorePage />} />

                    {/* <Route path='/courseDetail' element={<CourseDetailPage />} /> */}
                    {/* courseId = ${course._id} */}
                    {/* courseId = course1 */}
                    {/* :courseId: params */}
                    <Route path='/course/:courseId' element={<CourseDetailPage />} />
                    <Route path="/checkout/:courseId" element={<CheckoutPage />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    )
}

export default App

