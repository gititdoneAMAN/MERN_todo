export default function ButtonComponent({ label }) {
  return (
    <button className="w-full bg-black pt-1 pb-2 px-2 hover:bg-[#000557] rounded-lg text-white mb-[10px] mt-[30px]">
      {label}
    </button>
  );
}
