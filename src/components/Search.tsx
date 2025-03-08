export default function Search() {
  return (
    <div class="relative">
      <input
        type="text"
        class="
          rounded-xl
          border-2
          placeholder:text-[#BDBFCB]
          text-[#C6DFEC]
          hover:text-white
          hover:bg-[#1D202B]
          hover:border-[#878996]
          shadow-2xl
          transition-all
          duration-300
          relative
          h-[50px]
          w-[250px]
          px-8
          overflow-hidden
          bg-[#4A4D59]
          focus:outline-none
        "
        placeholder="Potraži aplikacije"
      />
    </div>
  );
}
