import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import FullScreenLoader from './components/FullScreenLoader'
import { AuthProvider } from "@/contexts/AuthContext";
// import ProtectedRoute from '@/components/ProtectedRoute'

const Home = lazy(() => import('@/pages/Home'))
const SideBySideChatTestingPage = lazy(() => import('@/pages/SideBySideChatTestingPage'))
const EvaluationMetricsPage = lazy(() => import('@/pages/EvaluationMetricsPage'))
const PerformanceAnalyticsPage = lazy(() => import('@/pages/PerformanceAnalyticsPage'))
const PromptLibraryPage = lazy(() => import('@/pages/PromptLibraryPage'))
const ExportAndSharePage = lazy(() => import('@/pages/ExportAndSharePage'))
const ApiAndModelSwitchingPage = lazy(() => import('@/pages/ApiAndModelSwitchingPage'))
const ExtraFeaturesForPowerUsersPage = lazy(() => import('@/pages/ExtraFeaturesForPowerUsersPage'))
const VectorDBPage = lazy(() => import('@/pages/VectorDBPage'))



export default function App(){
  return (
    <AuthProvider>
    <BrowserRouter>
      <div className="w-full">
        <Suspense fallback={<FullScreenLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sidebyside-chat-testing" element={<SideBySideChatTestingPage />} />
            <Route path="/evaluation-metrics" element={<EvaluationMetricsPage />} />
            <Route path="/performance-analytics" element={<PerformanceAnalyticsPage />} />
            <Route path="/prompt-library" element={<PromptLibraryPage />} />
            <Route path="/export-and-share" element={<ExportAndSharePage />} />
            <Route path="/api-and-model-switching" element={<ApiAndModelSwitchingPage />} />
            <Route path="/extra-features-for-power-users" element={<ExtraFeaturesForPowerUsersPage />} />
            <Route path="/vector-db" element={<VectorDBPage />} />
            {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
    </AuthProvider>
  )
}