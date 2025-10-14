import { useState } from "react";

export default function Browse() {
  const [wishlistItem, setWishlistItem] = useState("");
  const [wishlist, setWishlist] = useState([]);

  const handleAddLink = (e) => {
    e.preventDefault();

    if (wishlistItem.trim() === "") {
      alert("Please enter a valid link");
      return;
    }

    setWishlist([...wishlist, wishlistItem]);

    setWishlistItem("");
  };

  return (
    <div className="flex flex-col items-center mt-20 gap-6">
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

      <div className="flex flex-col items-start gap-2 mt-4">
        <h2 className="text-lg font-semibold">My Wishlist:</h2>
        {wishlist.length === 0 ? (
          <p className="text-gray-500">No items added yet</p>
        ) : (
          <ul className="list-disc ml-6">
            {wishlist.map((item, index) => (
              <li key={index}>
                <a
                  href={item}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
