import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
//ルーティング設定をおこなえるライブラリをインポート（インストールはnpm run react-router-dom）
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    //下記のようにRouter直下にRoutesを配置しその直下にRouteを設置
    //Routeの属性のpathにパスを設定。elementに表示したいコンポーネントを設定することでルーティングできる。
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
