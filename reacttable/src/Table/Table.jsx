import MainHeader from "../TableUpperHead/MainHeader";
import Thead from "../MainTable/Thead";
import Tbody from "../MainTable/Tbody";
import Pagination from "../Pagination/Pagination";

const Table = () => {
  return (
    <div className="App">
      <MainHeader />
      <table className="table">
        <thead>
          <Thead />
        </thead>
        <Tbody />
      </table>
      <Pagination />
    </div>
  );
};

export default Table;
