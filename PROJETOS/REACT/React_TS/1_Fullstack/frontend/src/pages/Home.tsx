import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

interface Memory {
  _id: string;
  title: string;
  image: string;
}

export default function Home() {
  const [memories, setMemories] = useState<Memory[]>([]);

  useEffect(() => {
    api.get('/memories')
      .then(res => setMemories(res.data))
      .catch(err => console.error('Erro ao carregar memórias:', err));
  }, []);

  return (
    <div className="min-h-screen bg-light p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">Minhas Memórias</h1>
        <Link to="/create">
          <button className="bg-accent text-white px-4 py-2 rounded-xl shadow hover:bg-green-600 transition">
            + Adicionar Memória
          </button>
        </Link>
      </header>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {memories.map(memory => (
          <Link to={`/memory/${memory._id}`} key={memory._id}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={`http://localhost:5000/uploads/${memory.image}`}
                alt={memory.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-primary truncate">
                  {memory.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
