export default function TextAreaComponent({ label, placeholder, onChange }) {
  return (
    <div>
      <div className="font-bold mb-1 text-lg">{label}</div>
      <div>
        <textarea
          placeholder={placeholder}
          className="border-solid border-2 rounded-lg border-[#000997] hover:border-red-500 w-full h-[200px] pt-1 pb-2 px-2"
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
}
