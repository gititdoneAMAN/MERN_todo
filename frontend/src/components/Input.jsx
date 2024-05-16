export default function Input({ placeholder, type, label, onChange }) {
  return (
    <div>
      <div className="font-bold mb-1 text-lg">{label}</div>
      <div>
        <input
          className="border-solid border-2 rounded-lg border-[#000997] hover:border-red-500 w-full pt-1 pb-2 px-2"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
