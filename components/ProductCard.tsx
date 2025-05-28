export default function ProductCard({ title, image }) {
  return (
    <div className="border p-4 text-center">
      <img src={image} alt={title} className="mb-2 mx-auto max-h-64" />
      <div className="text-sm">{title}</div>
    </div>
  );
}
