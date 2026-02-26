import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'


// MODUL 3
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { store } from './redux/store'
import { AppRoutes } from './config/AppRouters'
import { Layout } from './components/layout'

// ------------------------------------------------------------------------------------ //
// import './index.css'
// import { AppRoutes } from './config/AppRouters'
// import { Routes  } from 'react-router'
// import { lazy } from 'react' 
// const LearningHookPage = lazy(() => import('./LearningHooks')); // Export Default Component
// const PostList = lazy(() => import('./PostList'));
// const PostDetailPage = lazy(() => import('./PostDetail'));

createRoot(document.getElementById('root')!).render(
  //  MODUL 3
  <StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </Provider>



  </StrictMode>




  // ------------------------------------------------------------------------------------------------ //
  // <BrowserRouter>
  //   <Routes>
  //     <Route path ="/" element={
  //       <div>
  //         <h1>Home</h1>
  //         <p>This is the Main routes, you can type</p>
  //         <ul>
  //           <li>/learnigHooks</li>
  //           <li>/pots</li>
  //           <li>/post/:id</li>
  //         </ul>
  //       </div>
  //     } 
  //     />
  //     <Route path="/learningHooks" element={
  //       <LearningHookPage />
  //     }
  //     />
  //     <Route path="/post" element={
  //       <PostList />
  //     }
  //     />
  //     <Route path="/post/:id" element={
  //       <PostDetailPage />
  //     }
  //     />
  //   </Routes>
  // </BrowserRouter>


)


