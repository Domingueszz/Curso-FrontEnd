import { useState, type FormEvent } from "react";import "./EditMemoryModal.css";
import { updateMemory } from "../services/memoriesApi";

type Memory = {
  _id: string;
  title: string;
  image: string;
  description: string;
};

type Props = {
  memory: Memory;
  onClose: () => void;
  onUpdate: (updatedMemory: Memory) => void;
};

export default function EditMemoryModal({ memory, onClose, onUpdate }: Props) {
  const [title, setTitle] = useState(memory.title);
  const [description, setDescription] = useState(memory.description);
  
  // NOVO: Estado para controlar o carregamento durante o envio do formulário
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true); // Inicia o carregamento, desabilita o botão

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    try {
      const updatedData = await updateMemory(memory._id, formData);
      onUpdate(updatedData);
      onClose();
    } catch (error) {
      console.error("Falha ao atualizar a memória", error);
      // NOVO: Feedback de erro para o usuário
      alert("Não foi possível salvar as alterações. Tente novamente.");
    } finally {
      // NOVO: Garante que o carregamento termine, mesmo se der erro
      setIsLoading(false);
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content edit-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Editar Memória</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Título:</label>
          <input 
            id="title"
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            disabled={isLoading} // Desabilita o campo durante o carregamento
          />
          
          <label htmlFor="description">Descrição:</label>
          <textarea 
            id="description"
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
            disabled={isLoading} // Desabilita o campo durante o carregamento
          />

          <div className="modal-actions">
            <button type="submit" className="btn-save" disabled={isLoading}>
              {/* NOVO: Muda o texto do botão durante o carregamento */}
              {isLoading ? "Salvando..." : "Salvar Alterações"}
            </button>
            <button type="button" onClick={onClose} className="btn-cancel" disabled={isLoading}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}