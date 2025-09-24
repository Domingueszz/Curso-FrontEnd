import { api } from "./api";

// READ - Busca todas as memórias
export async function getMemories() {
  const res = await api.get("/memories");
  return res.data;
}

// CREATE - Cria uma nova memória
export async function createMemory(data: FormData) {
  const res = await api.post("/memories", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
}

// UPDATE - Atualiza uma memória existente
export async function updateMemory(id: string, data: FormData) {
  const res = await api.put(`/memories/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
}

// DELETE - Deleta uma memória existente
export async function deleteMemory(id: string) {
  const res = await api.delete(`/memories/${id}`);
  return res.data;
}