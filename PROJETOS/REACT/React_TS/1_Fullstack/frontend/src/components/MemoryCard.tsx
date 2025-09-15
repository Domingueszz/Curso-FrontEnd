import "./MemoryCard.css";

type Props = {
  title: string;
  image: string;
  onClick: () => void;
};

export default function MemoryCard({ title, image, onClick }: Props) {
  const API_URL = import.meta.env.VITE_API_URL;

  return (
    // A função onClick volta para o container principal
    <div className="memory-card" onClick={onClick}>
      <img
        src={`${API_URL}/uploads/${image}`}
        alt={title}
      />
      <div className="card-content">
        <h3>{title}</h3>
        {/* O botão foi removido daqui */}
      </div>
    </div>
  );
}