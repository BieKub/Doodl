import Button from './Button.jsx'
import ProfilePicture from './ProfilePicture.jsx';
import MyComponent from './MyComponent.jsx';
import Counter from './Counter.jsx';
import ColorPicker from './ColorPicker.jsx';
import MyComponent2 from './MyComponent2.jsx';
import MyComponent3 from './MyComponent3.jsx';
import MyComponent4 from './MyComponent4.jsx';
import ToDoList from './ToDoList.jsx';
import MyComponent5 from './MyComponent5.jsx';
import ChooseAvatar from './ChooseAvatar.jsx';
import Background from './Background.jsx';
import PlayBox from './PlayBox.jsx';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes.jsx";

function App() {

  return(
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
  
}

export default App;
