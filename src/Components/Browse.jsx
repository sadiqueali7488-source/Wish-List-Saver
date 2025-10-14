export default function Browse() {
  return (
    <div className="flex justify-center items-center gap-6 flex-col mt-20">
        <form action="">
            <input type="text" placeholder="Add a new item" className="border p-2 rounded mr-4" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add WishList</button>
        </form>
    </div>
  );
}
