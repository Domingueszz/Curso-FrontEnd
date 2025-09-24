import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getMemories, deleteMemory } from "../services/memoriesApi"; // Funções da API
import MemoryCard from "../components/MemoryCard";
import MemoryModal from '../components/MemoryModal';
import EditMemoryModal from "../components/EditMemoryModal"; // Importa o novo modal de edição
import "./AllMemory.css";

// Define o tipo para a memória
type Memory = {
  _id: string;
  title: string;
  image: string;
  description: string;
};

export default function AllMemories() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [editingMemory, setEditingMemory] = useState<Memory | null>(null); // Estado para controlar o modal de edição

  // Busca os dados iniciais da API
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMemories();
        
        // PASSO DE DEBUG: Verifique o que a API está retornando
        console.log("Dados recebidos na página AllMemories:", data);

        // A API já deve retornar os dados na ordem correta (mais recentes primeiro).
        // Se você precisar reverter no frontend, esta é a forma segura:
        // const reversedData = [...data].reverse();
        
        // Apenas definimos os dados recebidos diretamente no estado.
        setMemories(data);

      } catch (error) {
        console.error("Falha ao buscar memórias na página de coleção:", error);
        setMemories([]); // Em caso de erro, garante que o estado seja um array vazio
      }
    }
    fetchData();
  }, []); // O array de dependências vazio garante que isso rode apenas uma vez

  // Função para deletar uma memória
  async function handleDelete(id: string) {
    try {
      await deleteMemory(id);
      // Remove a memória da lista na tela, sem precisar recarregar a página
      setMemories(memories.filter((memory) => memory._id !== id));
      setSelectedMemory(null); // Fecha o modal de detalhes
    } catch (error) {
      console.error("Erro ao deletar memória:", error);
    }
  }

  // Função para abrir o modal de edição
  function handleEdit(memory: Memory) {
    setSelectedMemory(null); // Fecha o modal de detalhes
    setEditingMemory(memory); // Abre o modal de edição com os dados
  }

  // Função para atualizar a lista após uma edição ser salva
  function handleUpdate(updatedMemory: Memory) {
    // Substitui a memória antiga pela nova na lista
    setMemories(memories.map(m => (m._id === updatedMemory._id ? updatedMemory : m)));
    setEditingMemory(null); // Fecha o modal de edição
  }

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

      {/* Modal de Detalhes */}
      {selectedMemory && (
        <MemoryModal
          memory={selectedMemory}
          onClose={() => setSelectedMemory(null)}
          onEdit={() => handleEdit(selectedMemory)} // Conecta a função de editar
          onDelete={() => handleDelete(selectedMemory._id)} // Conecta a função de deletar
        />
      )}

      {/* Modal de Edição */}
      {editingMemory && (
        <EditMemoryModal
          memory={editingMemory}
          onClose={() => setEditingMemory(null)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}