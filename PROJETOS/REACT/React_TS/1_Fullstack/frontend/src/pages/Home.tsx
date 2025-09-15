import { useEffect, useState } from "react";
// 1. Em vez de 'Link', importe 'useNavigate'
import { useNavigate } from 'react-router-dom'; 
import { getMemories } from "../services/memoriesApi";
import MemoryCard from "../components/MemoryCard";
import AddCard from "../components/AddCard";
import MemoryModal from '../components/MemoryModal';
import "./Home.css";

type Memory = {
  _id: string;
  title: string;
  image: string;
  description: string;
};

export default function Home() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  // 2. Inicialize o hook dentro do componente
  const navigate = useNavigate();

  async function fetchData() {
    const data = await getMemories();
    const lastTwo = [...data].slice(-2).reverse();
    setMemories(lastTwo);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // 3. Crie uma função para lidar com o clique
  const handleNavigateToCollection = () => {
    navigate('/collection');
  };

  return (
    <div className="home">
      <h1 className="title">My Memories</h1>

      <div className="cards-container">
        {memories.map((memory) => (
          <MemoryCard
            key={memory._id}
            title={memory.title}
            image={memory.image}
            onClick={() => setSelectedMemory(memory)}
          />
        ))}
        <AddCard />
      </div>

      {/* 4. Mantenha o <button> original e adicione o onClick */}
      <button 
        className="blob-btn view-collection" 
        onClick={handleNavigateToCollection}
      >
        Ver coleção
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
        </span>
      </button>

      {/* Modal de detalhes */}
      {selectedMemory && (
        <MemoryModal
          memory={selectedMemory}
          onClose={() => setSelectedMemory(null)}
          onEdit={(id) => console.log("Editar", id)}
          onDelete={(id) => console.log("Excluir", id)}
        />
      )}

      {/* SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 21 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
}