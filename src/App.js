import Category from "./components/Category/Category";
import CategoryList from "./components/CategoryList/CategoryList";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmptyPage from "./components/EmptyPage/EmptyPage";
import CreatePost from "./components/CreatePost/CreatePost";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/create_post" element={<CreatePost />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
