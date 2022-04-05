import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Custom Components
import Home from '../pages/home';
import HomeTwo from '../pages/home-2';
import HomeThree from '../pages/home-3';
import About from '../pages/about';
import Blog from '../pages/blog';
import BlogDetails from '../pages/blog/blog-details';
import Service from '../pages/service';
import ServiceDetails from '../pages/service/service-details';
import CaseStudy from '../pages/case-study';
import CaseStudyDetails from '../pages/case-study/case-study-details';
import Contact from '../pages/contact';
import Error from '../pages/404';
import LoadTop from '../components/ScrollTop/LoadTop';

const App = () => {
  return (
    <div className='App'>
      <LoadTop />
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home-2' element={<HomeTwo />} />
          <Route path='/home-3' element={<HomeThree />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' exact element={<Blog />} />
          <Route path='/blog/blog-details' element={<BlogDetails />} />
          <Route path='/service' exact element={<Service />} />
          <Route path='/service/service-details' element={<ServiceDetails />} />
          <Route path='/case-study' exact element={<CaseStudy />} />
          <Route
            path='/case-study/case-study-details'
            element={<CaseStudyDetails />}
          />
          <Route path='/contact' element={<Contact />} />
          <Route element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
