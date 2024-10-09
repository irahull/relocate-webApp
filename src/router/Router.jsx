import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Blogs from "../pages/blogs/Blogs";
import Shop from "../pages/shop/Shop";
import ProductDetails from "../pages/shop/ProductDetails";
import BlogDetails from "../pages/blogs/BlogDetails";
import Services from "../pages/services/Services";
import ServiceDetails from "../pages/services/ServiceDetails";
import About from "../pages/about/About";
import OurTeam from "../pages/team/OurTeam";
import Pricing from "../pages/pricing/Pricing";
import Career from "../pages/career/Career";
import FAQPage from "../pages/faq/FAQPage";
import Testimonials from "../pages/testimonials/Testimonials";
import ContactUs from "../pages/contact/ContactUs";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/blogs",
          element: <Blogs/>
        },
        {
          path: "/blog-posts/:postLink",
          element: <BlogDetails/>
        }
        ,
        {
          path: "/shop",
          element: <Shop/>,
        },
        {
          path: "/product/:link",
          element: <ProductDetails/>
        },
        {
          path: "/services",
          element: <Services/>
        },
        {
          path: "/services/:serviceLink",
          element: <ServiceDetails/>
        },
        {
          path: "/about-us",
          element: <About/>
        },
        {
          path: "/our-team",
          element: <OurTeam/>
        },
        {
          path: "/pricing",
          element: <Pricing/>
        },
        {
          path: "/career",
          element: <Career/>
        },
        {
          path: "/faq",
          element: <FAQPage/>
        },
        {
          path: "/testimonials",
          element: <Testimonials/>
        },
        {
          path: "/contact-us",
          element: <ContactUs/>
        }
        
      ]
    },
  ]);