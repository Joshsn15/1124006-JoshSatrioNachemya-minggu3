import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
// import './App.css'
// MODUL 3
// import LoginPage from './pages/LoginPage'
// import { StrictMode } from 'react'
// import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
// import { Provider } from 'react-redux'
// import { store } from './redux/store'
// const theme = createTheme();
// import { StrictMode } from 'react'


// import './index.css'
import { lazy } from 'react' 
const LearningHookPage = lazy(() => import('./LearningHooks')); // Export Default Component
const PostList = lazy(() => import('./PostList'));
const PostDetailPage = lazy(() => import('./PostDetail'));

createRoot(document.getElementById('root')!).render(
  // <StrictMode> MODUL 3
  //   <CssBaseline />
  //   <ThemeProvider theme={theme}>
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <Route path="/" element={<LoginPage />} />
  //       </BrowserRouter>
  //     </Provider>

  //   </ThemeProvider>


  // </StrictMode> 


  <BrowserRouter>
    <Routes>
      <Route path ="/" element={
        <div>
          <h1>Home</h1>
          <p>This is the Main routes, you can type</p>
          <ul>
            <li>/learnigHooks</li>
            <li>/pots</li>
            <li>/post/:id</li>
          </ul>
        </div>
      } 
      />
      <Route path="/learningHooks" element={
        <LearningHookPage />
      }
      />
      <Route path="/post" element={
        <PostList />
      }
      />
      <Route path="/post/:id" element={
        <PostDetailPage />
      }
      />
    </Routes>
  </BrowserRouter>
 

)


