// import { useState } from "react";

// const Body = () => {
//   const [wishlist, setWishlist] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Save wishlist to your backend/cloud (not included here)
//     setWishlist("");
//   };

//   return (
//     <div className="flex justify-center items-center gap-6 flex-col mt-20">
//       <h1 className="text-4xl font-bold">Enter WishList</h1>
//       <form className="flex gap-4" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Add WishList Link"
//           className="border p-2 rounded-lg"
//           value={wishlist}
//           onChange={(e) => setWishlist(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Body;
