export default function ButtonComponent({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-black pt-1 pb-2 px-2 hover:bg-[#000557] rounded-lg text-white mb-[5px] mt-[30px]"
    >
      {label}
    </button>
  );
}
