import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import BodyHome from "../../components/BodyHome";

function Home() {
  return (
    <>
      <Header />
      <BodyHome />
      <Outlet />
    </>
  );
}

export default Home;
