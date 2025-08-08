import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMemory } from "../services/memoriesApi";
import "./AddMemory.css";

export default function AddMemory() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) return alert("Adicione uma imagem!");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await createMemory(formData);
      navigate("/");
    } catch (err) {
      console.error("Erro ao criar memória", err);
    }
  };

  return (
    <div className="add-memory">
      <h1>Adicionar Memória</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>

        <label>
          Descrição:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>

        <label>
          Imagem:
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} required />
        </label>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
