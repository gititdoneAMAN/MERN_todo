import Heading from "../components/Heading";
import Input from "../components/Input";

export default function Todos() {
  return (
    <div className="bg-[#000537] h-screen flex justify-center">
      <div>
        <div>
          <Heading label={"Hello"} />
          <Input placeholder={"Enter here"} label={"Username"} type={"text"} />
        </div>
      </div>
    </div>
  );
}
