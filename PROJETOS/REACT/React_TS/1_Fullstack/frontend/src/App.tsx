import { MemoryCard } from "./components/MemoryCard";
import { AddCard } from "./components/AddCard";

function App() {
  return (
    <div className="min-h-screen bg-[#121212] px-8 py-12">
      <h1 className="text-4xl font-bold text-[#ff9900] mb-10">My Memories</h1>

      <div className="flex gap-6 flex-wrap">
        <MemoryCard
          title="Party house"
          image="https://images.unsplash.com/photo-1592194996308-7b43878e84a6"
        />
        <MemoryCard
          title="Party house"
          image="https://images.unsplash.com/photo-1592194996308-7b43878e84a6"
        />
        <AddCard />
      </div>

      <div className="mt-12">
        <button className="bg-[#ff9900] text-black font-semibold px-6 py-3 rounded-full hover:brightness-110 transition">
          Ver coleção
        </button>
      </div>
    </div>
  );
}

export default App;
