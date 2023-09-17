import Card from "../../components/Card/Card";
import CardComments from "../../components/CardComments";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './styles.css';

function Catalog() {
  return(
    <form>
      <Header />
      <h2> Venha nos visitar</h2>
      <Card />
      <Card />
      <Card />
      <h3>O que estão dizendo</h3>
      <CardComments />
      <CardComments />
      <CardComments />
      <CardComments />
      <CardComments />
      <CardComments />
      <Footer />
    </form>
  );
}

export default Catalog;
