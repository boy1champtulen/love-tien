import { useState } from "react";

export default function GiftBox() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center py-32">

      {!open && (
        <div
          onClick={() => setOpen(true)}
          className="text-8xl cursor-pointer animate-bounce"
        >
          🎁
        </div>
      )}

      {open && (
        <div className="bg-black p-6 rounded-2xl shadow-xl text-center max-w-md">

<img
src="/memories/gift.jpg"
alt="gift"
className="rounded-xl mb-4 w-full max-w-xs md:max-w-sm mx-auto"
/>


          <h2 className="text-2xl font-bold mb-2">
            Món quà dành cho em ❤️
          </h2>

          <p className="text-white">
            Anh đã chọn món quà này rất kỹ.
Không phải vì nó hoàn hảo,
mà vì anh nghĩ em xứng đáng với những điều đặc biệt nhất.
          </p>

        </div>
      )}

    </div>
  );
}