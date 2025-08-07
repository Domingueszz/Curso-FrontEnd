import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function CreateMemory() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !image) {
      alert('Título e imagem são obrigatórios!');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      await api.post('/memories', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/'); // redireciona para a Home
    } catch (error) {
      console.error('Erro ao criar memória:', error);
      alert('Erro ao criar memória. Verifique o console.');
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] flex items-center justify-center px-4 py-10">
    <div className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-10">
      <h1 className="text-3xl font-bold text-[#2f2e41] mb-6 text-center">📸 Adicionar Nova Memória</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Título <span className="text-red-500">*</span></label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Ex: Viagem para as montanhas"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Descrição</label>
          <textarea
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Algo especial que você quer lembrar..."
            rows={4}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Imagem <span className="text-red-500">*</span></label>
          <input
            type="file"
            accept="image/*"
            onChange={e => setImage(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-green-50 file:text-green-700
                       hover:file:bg-green-100 transition"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition"
        >
          Salvar Memória
        </button>
      </form>
    </div>
  </div>
);
}
