import { useState } from "react";
// Components
import Celebrant from "./Celebrant";
import ClearAll from "./ClearAll";

import { data } from "./data";

document.title = "Birthday Today";
const App = function () {
  const [celebrants, setCelebrants] = useState(data);

  return (
    <>
      <article className="bg-white px-6 py-3 md:w-2/5 m-auto md:my-10 md:rounded-sm">
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
