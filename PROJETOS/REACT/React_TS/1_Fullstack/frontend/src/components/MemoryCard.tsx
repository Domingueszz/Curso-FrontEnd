// src/components/MemoryCard.tsx
import "./MemoryCard.css";

type Props = {
  title: string;
  image: string;
  onClick: () => void;
};

export default function MemoryCard({ title, image, onClick }: Props) {
  return (
    <>
    <div className="memory-card" onClick={onClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <button>Ver mais</button>
    </div>
    </>
  );
}
