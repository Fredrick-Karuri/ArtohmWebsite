import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
const Home1 = React.lazy(() => import('pages/Home1'))
const About = React.lazy(() => import('pages/About'))
const TermsAndConditions = React.lazy(() => import('pages/Terms&Conditions'))
const PrivacyPolicy = React.lazy(() => import('pages/PrivacyPolicy'))
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path='/' element={<Home1 />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/about' element={<About />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route
            path='/terms-and-conditions'
            element={<TermsAndConditions />}
          />
          <Route path='/dhiwise-dashboard' element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  )
}
export default ProjectRoutes
