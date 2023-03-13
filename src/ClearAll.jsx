// Clear All Button
const ClearAll = function ({ setCelebrants }) {
  return (
    <button
      className="block bg-pink-500 px-6 py-2 font-medium text-white rounded cursor-pointer w-full shadow-md shadow-pink-500/20 hover:bg-pink-400 focus:bg-pink-600 select-none focus:ring ring-offset-1 ring-offset-pink-200 ring-pink-200"
      type="button"
      onClick={() => setCelebrants([])}
    >
      Clear All
    </button>
  );
};
export default ClearAll;
