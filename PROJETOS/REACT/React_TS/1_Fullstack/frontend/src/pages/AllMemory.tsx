// /frontend/src/pages/AllMemories.tsx

import { useEffect, useState } from "react";
import { getMemories } from "../services/memoriesApi";
import MemoryCard from "../components/MemoryCard";
import MemoryModal from '../components/MemoryModal';
import { Link } from 'react-router-dom'; // Para o botão de voltar
import "./AllMemories.css"; // Vamos criar este CSS

type Memory = {
  _id: string;
  title: string;
  image: string;
  description: string;
};

export default function AllMemories() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getMemories();
      setMemories(data.reverse()); // Exibe todas, as mais recentes primeiro
    }
    fetchData();
  }, []);

  return (
    <div className="all-memories-page">
      <h1>Minha Coleção</h1>
      <div className="memories-grid">
        {memories.map((memory) => (
          <MemoryCard
            key={memory._id}
            title={memory.title}
            image={memory.image}
            onClick={() => setSelectedMemory(memory)}
          />
        ))}
      </div>
      <Link to="/" className="back-button">Voltar</Link>

      {/* O mesmo modal da Home */}
      {selectedMemory && (
        <MemoryModal
          memory={selectedMemory}
          onClose={() => setSelectedMemory(null)}
          onEdit={(id) => console.log("Editar", id)}
          onDelete={(id) => console.log("Excluir", id)}
        />
      )}
    </div>
  );
}