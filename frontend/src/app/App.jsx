import React, { useState, useEffect } from 'react';
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
import AutoScrollToTop from '../components/ScrollTop/AutoScrollToTop';
import PageLoading from '../components/Loader/PageLoading';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* using a ternary operator to determine which component to display
    based on the loaded state. If loaded is false the Loader is rendered */}
      {!loaded ? (
        <PageLoading />
      ) : (
        <div className='App'>
          <Router>
            <Routes>
              <Route
                path='/'
                exact
                element={
                  <AutoScrollToTop>
                    <Home />
                  </AutoScrollToTop>
                }
              />
              <Route
                path='/home'
                element={
                  <AutoScrollToTop>
                    <Home />
                  </AutoScrollToTop>
                }
              />
              <Route
                path='/home-2'
                element={
                  <AutoScrollToTop>
                    <HomeTwo />
                  </AutoScrollToTop>
                }
              />
              <Route
                path='/home-3'
                element={
                  <AutoScrollToTop>
                    <HomeThree />
                  </AutoScrollToTop>
                }
              />
              <Route
                path='/about'
                element={
                  <AutoScrollToTop>
                    <About />
                  </AutoScrollToTop>
                }
              />
              <Route
                path='/blog'
                exact
                element={
                  <AutoScrollToTop>
                    <Blog />
                  </AutoScrollToTop>
                }
              />
              <Route
                path='/blog/blog-details'
                element={
                  <AutoScrollToTop>
                    <BlogDetails />
                  </AutoScrollToTop>
                }
              />
              <Route
                path='/services'
                exact
                element={
                  <AutoScrollToTop>
                    <Service />
                  </AutoScrollToTop>
                }
              />
              <Route
                path='/service/service-details'
                element={
                  <AutoScrollToTop>
                    <ServiceDetails />
                  </AutoScrollToTop>
                }
              />
              <Route
                path='/case-study'
                exact
                element={
                  <AutoScrollToTop>
                    <CaseStudy />
                  </AutoScrollToTop>
                }
              />
              <Route
                path='/case-study/case-study-details'
                element={
                  <AutoScrollToTop>
                    <CaseStudyDetails />
                  </AutoScrollToTop>
                }
              />
              <Route
                path='/contact'
                element={
                  <AutoScrollToTop>
                    <Contact />
                  </AutoScrollToTop>
                }
              />
              <Route
                element={
                  <AutoScrollToTop>
                    <Error />
                  </AutoScrollToTop>
                }
              />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
};

export default App;
