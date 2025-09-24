import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMemory } from "../services/memoriesApi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import "./AddMemory.css";

export default function AddMemory() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();

  // NOVO: Estado de carregamento para feedback visual
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !image) {
      return alert("Por favor, preencha todos os campos e selecione uma imagem.");
    }

    setIsLoading(true); // Inicia o carregamento

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await createMemory(formData);
      // SUGESTÃO: Navegar para a coleção para ver a nova memória
      navigate("/collection"); 
    } catch (err) {
      console.error("Erro ao criar memória", err);
      alert("Não foi possível criar a memória. Tente novamente.");
      setIsLoading(false); // Para o carregamento em caso de erro
    }

    // REMOVIDO: A linha 'return <FontAwesomeIcon icon={faReply} />' foi removida daqui.
  };

  return (
    <div className="add-memory">
      {/* Botão de voltar funcional, ótimo! */}
      <button
        type="button"
        className="btn-back"
        onClick={() => navigate(-1)}
        disabled={isLoading}
      >
        <FontAwesomeIcon icon={faReply} />
      </button>

      {/* Título animado, muito legal! */}
      <h1 className="cool">
        {"Adicionar Memória".split(" ").map((letter, index) => (
          <span key={index} data-text={letter === " " ? "\u00A0" : letter}>
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>

      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={isLoading}
          />
        </label>

        <label>
          Descrição:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            disabled={isLoading}
          />
        </label>

        <label>
          Imagem:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            required
            disabled={isLoading}
          />
        </label>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Salvando..." : "Salvar"}
        </button>
      </form>
    </div>
  );
}