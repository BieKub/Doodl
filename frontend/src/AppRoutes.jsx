import { Routes, Route } from "react-router-dom";
import ChooseAvatar from './ChooseAvatar.jsx';
import Background from './Background.jsx';
import PlayBox from './PlayBox.jsx';
import ToDoList from "./ToDoList.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Background><PlayBox/></Background>} />
      <Route path="/play" element={<ToDoList />} />
    </Routes>
  );
}

