import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SurveyForm from "./components/SurveyForm";
import AdminView from "./components/AdminView";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SurveyForm />} />
        <Route path="/admin" element={<AdminView />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
