import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/login/LoginForm";
import { AuthProvider } from "./context/AuthContext";
import { QuestionProvider } from "./context/QuestionContext";
import { useAuth } from "./hooks/useAuth";
import QuestionList from "./components/question/QuestionList";
import QuestionDetail from "./components/question/QuestionDetail";

const AppRoutes = () => {
  const { user } = useAuth();

  if (!user) return <LoginForm />;

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/questions" element={<QuestionList />} />
      <Route path="/questions/:id" element={<QuestionDetail />} />
    </Routes>
  );
};

export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <AuthProvider>
        <QuestionProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </QuestionProvider>
      </AuthProvider>
    </div>
  );
}
