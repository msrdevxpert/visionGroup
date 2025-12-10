interface CardProps {
  title: string;
  value: string | number;
}

export default function Card({ title, value }: CardProps) {
  return (
    <div className="admin-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

