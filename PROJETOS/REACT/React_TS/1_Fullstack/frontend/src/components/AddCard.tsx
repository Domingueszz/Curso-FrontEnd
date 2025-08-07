export function AddCard() {
  return (
    <div className="bg-[#1f1f1f] rounded-2xl p-4 w-[200px] h-[200px] flex flex-col items-center justify-center text-gray-400 hover:cursor-pointer hover:scale-105 transition">
      <div className="border-4 border-gray-500 rounded-full w-16 h-16 flex items-center justify-center text-3xl">
        +
      </div>
      <p className="mt-4 text-sm">Add Card</p>
    </div>
  );
}
