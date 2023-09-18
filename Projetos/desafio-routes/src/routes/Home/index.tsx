import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import HomeBody from "../../components/HomeBody";

function Home() {
  return (
    <>
      <Header />
      <HomeBody />
      <Outlet />
    </>
  );
}

export default Home;
