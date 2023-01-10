import "./_app.scss";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Sidebar from "./components/SildeBar/Sidebar";
import HomeScreen from "./components/Screen/HomeScreen/HomeScreen";
import { useEffect, useState } from "react";
import LoginScreen from "./components/Screen/login/LoginScreen";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container  ">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main ">
          {/* <HomeScreen/> */}
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
    }
  }, [accessToken, loading, navigate]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      ></Route>
      <Route
        path="/search"
        element={
          <Layout>
            <h1>Search _Page</h1>
          </Layout>
        }
      ></Route>
      <Route path="/auth" element={<LoginScreen />}></Route>
    </Routes>
  );
}

export default App;
