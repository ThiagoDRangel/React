import Filter from "../Filter";
import Header from "../Header";
import Listing from "../Listing";
import './styles.css';

function ListingBody() {
  return (
    <>
      <Header />
      <main className="listing-body">
          <Filter />
          <Listing />
      </main>
    </>
  );
}

export default ListingBody;
