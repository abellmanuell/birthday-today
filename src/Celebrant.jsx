import $1Pic from "./assets/5d9c6a60c1a11.png";

function Celebrant({ name, age }) {
  return (
    <section className="flex items-center hover:bg-slate-50 rounded cursor-pointer p-2">
      <img
        className="w-16 h-16 object-cover rounded-full shrink-0 "
        src={$1Pic}
        alt=""
      />
      <div className="ml-3">
        <h2>{name}</h2>
        <span className="block text-gray-500">{age} years</span>
      </div>
    </section>
  );
}

export default Celebrant;
