import Heading from "../components/Heading";
import Input from "../components/Input";

export default function Signin() {
  return (
    <div className="bg-[#000517] h-screen w-screen flex justify-center items-center">
      <div className="w-[400px] h-[450px] rounded-lg shadow-2xl shadow-[#000997] bg-white p-3">
        <div>
          <Heading label={"Signin"} />
          <div className="mt-[40px]">
            <div className="mb-2">
              <Input
                label={"Username"}
                placeholder={"aman@gmail.com"}
                type={"text"}
              />
            </div>
            <div className="mt-[40px]">
              <Input
                label={"Password"}
                placeholder={"Type your password here"}
                type={"password"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
