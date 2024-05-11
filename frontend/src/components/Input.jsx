export default function Input({ placeholder, type, label }) {
  return (
    <div className="border-solid border-lime-300 border-5 w-[500px]">
      <div className="text-white w-[100%] pt-4 pb-2">{label}</div>
      <div className="w-[100%]">
        <input
          type={type}
          placeholder={placeholder}
          className="border rounded-lg border-red-500 w-full border-5 pt-2 pb-3"
        />
      </div>
    </div>
  );
}
