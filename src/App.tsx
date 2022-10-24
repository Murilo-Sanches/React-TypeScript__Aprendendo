import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

import ToDoHome from "./projects/1-ToDo/ToDoHome";
import ExpenseTrackerHome from "./projects/2-ExpenseTracker/ExpenseTrackerHome";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/to-do" element={<ToDoHome />}></Route>
          <Route path="/controle-de-gastos" element={<ExpenseTrackerHome />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
