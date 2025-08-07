interface MemoryCardProps {
  title: string;
  image: string;
}

export function MemoryCard({ title, image }: MemoryCardProps) {
  return (
    <div className="bg-[#1f1f1f] rounded-2xl p-4 w-[200px] flex flex-col items-center shadow-md hover:scale-105 transition">
      <img
        src={image}
        alt={title}
        className="rounded-xl h-[120px] w-full object-cover mb-4"
      />
      <h2 className="text-white text-lg font-semibold mb-2 text-center">
        {title}
      </h2>
      <button className="border border-[#ff9900] text-[#ff9900] px-4 py-1 rounded-full text-sm hover:bg-[#ff9900] hover:text-black transition">
        Ver mais
      </button>
    </div>
  );
}
