import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Article = lazy(() => import("./pages/Article"));
const Publish = lazy(() => import("./pages/Publish"));
const MyLayout = lazy(() => import("./pages/Layout"));


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div style={{ color: 'green', fontSize: '30px', textAlign: 'center' }}>laoding...</div>}>
          <Routes>
            <Route path="/" element={<MyLayout />}>
              <Route index element={<Home />} />
              <Route path="article" element={<Article />} />
              <Route path="publish" element={<Publish />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App;
