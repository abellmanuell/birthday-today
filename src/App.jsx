import { useState, useEffect } from "react";
// Components
import Celebrant from "./Celebrant";
import ClearAll from "./ClearAll";

const App = function () {
  const [celebrants, setCelebrants] = useState([]);

  // Fetch Data from local server
  async function fetchData() {
    let data = await fetch("http://localhost:3000/api/birthday-celebrants");
    let response = await data.json();
    setCelebrants(response);
  }

  useEffect(() => {
    document.title = "Birthday Today";
    fetchData();
  }, []);

  return (
    <>
      <article className="bg-white px-6 py-3 md:w-2/5 m-auto md:my-10 md:rounded-sm sm:max-w-screen-sm">
        <h1 className="text-xl">{celebrants.length} birthdays today</h1>
        <main className="my-4">
          {celebrants.map((celebrant) => {
            return <Celebrant key={celebrant.id} {...celebrant} />;
          })}
        </main>
        <ClearAll setCelebrants={setCelebrants} />
      </article>
    </>
  );
};

export default App;
