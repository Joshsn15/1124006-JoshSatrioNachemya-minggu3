// import { lazy } from "react"
import { Routes, Route, Navigate } from "react-router"
import { useAppSelector } from "../hooks/useAppSelector"
import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/HomePage"
import PostListPage from "../pages/PostListPage/PostListPage"
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage"
import LearningHooks from "../LearningHooks"
import { PostCreatePage } from "../pages/PostCreatePage/PostCreatePage"

export const AppRoutes = () => {
  const { isLoading, userInfo } = useAppSelector(state => state.auth)
  if (isLoading) {
    return <div>Loading...</div> 
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post" element={<PostListPage />} />
      <Route path="/post/:id" element={<PostDetailPage />} />
      <Route path="/learn" element={<LearningHooks />} />
      <Route path="/post/create" element={<PostCreatePage />} />
      {!userInfo && <Route path="/login" element={<LoginPage />} />}
      {!userInfo && <Route path="*" element={<Navigate to="/login" replace />} />}
    </Routes>
  )
}
