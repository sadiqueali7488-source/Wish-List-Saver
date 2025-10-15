import { useEffect, useState } from "react";

export default function Browse() {

  const [wishlistItem, setWishlistItem] = useState("");
  const [wishlist, setWishlist] = useState(() => {

    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const handleAddLink = (e) => {
    e.preventDefault();
    if (!wishlistItem.trim()) return;

    const updatedWishlist = [...wishlist, wishlistItem];
    setWishlist(updatedWishlist);
    setWishlistItem("");
  };

  const handleClear = () => {
    setWishlist([]);
    localStorage.removeItem("wishlist");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-6">
      <form onSubmit={handleAddLink} className="flex gap-4">
        <input
          type="url"
          placeholder="Enter your wishlist link"
          className="border p-2 rounded w-72"
          value={wishlistItem}
          onChange={(e) => setWishlistItem(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Wishlist
        </button>
      </form>

      <div className="flex flex-col items-center gap-3 mt-4">
        <h2 className="text-lg font-semibold">Saved Wishlist:</h2>

        {wishlist.length === 0 ? (
          <p className="text-gray-500">Nothing saved yet</p>
        ) : (
          <ul className="list-disc ml-10">
            {wishlist.map((item, index) => (
              <li key={index}>
                <a
                  href={item}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}

        {wishlist.length > 0 && (
          <button
            onClick={handleClear}
            className="text-red-600 px-4 py-2 border rounded mt-3 hover:bg-red-100"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}
