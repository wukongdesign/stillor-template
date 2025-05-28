export default function Header() {
  return (
    <header className="px-6 py-4 flex justify-between items-center border-b">
      <div className="text-xl font-bold">STILLOR</div>
      <nav className="space-x-4 text-sm">
        <a href="/products">Shop</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}
