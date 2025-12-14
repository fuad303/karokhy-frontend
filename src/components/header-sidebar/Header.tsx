import { Menu, Search, User } from 'lucide-react';
import { useApp } from '../../context/Context';

export default function Header() {
  const { openSidebar, setOpenSidebar } = useApp();

  return (
    <header className="h-16 bg-white shadow fixed right-0 left-0 top-0 sm:mr-70 z-30 flex items-center justify-between px-6">
      <div className="flex gap-4 items-center">
        {!openSidebar ? (
          <button onClick={() => setOpenSidebar(true)} className="sm:hidden">
            <Menu />
          </button>
        ) : (
          ''
        )}

        {openSidebar && (
          <div
            className="fixed inset-0 bg-black/40 z-40 sm:hidden"
            onClick={() => setOpenSidebar(false)}
          />
        )}
        <h1 className="sm:text-lg font-semibold sm:text-gray-600  ">
          آیدیا افغان
        </h1>
      </div>
      <div dir="rtl" className="relative sm:w-full sm:max-w-md hidden sm:block">
        <Search
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="جستجو..."
          className="
          w-full
          rounded-lg
          border
          border-gray-300
          py-2
          pr-10
          pl-4
          text-sm
          text-right
          focus:border-blue-500
          focus:outline-none
          focus:ring-2
          focus:ring-blue-200
        "
        />
      </div>

      <div className="flex gap-5 items-center">
        <button className=" border border-primary text-gray-500 px-3 py-2 text-sm rounded-[5px] cursor-pointer">
          قفل سیستم
        </button>
        <User className="text-gray-700" size={25} />
      </div>
    </header>
  );
}
