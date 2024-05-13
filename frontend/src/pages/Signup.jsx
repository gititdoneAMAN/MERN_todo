import ButtonComponent from "../components/ButtonComponent";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubHeading from "../components/SubHeading";

export default function Signup() {
  return (
    <div className="bg-[#000517] h-screen w-screen flex justify-center items-center">
      <div className="w-[400px] h-[480px] rounded-lg shadow-2xl shadow-[#000997] bg-white py-3 px-6">
        <div>
          <Heading label={"Signup"} />
          <div className="mt-[25px]">
            <div className="mb-2">
              <Input
                label={"Username"}
                placeholder={"aman@gmail.com"}
                type={"text"}
              />
            </div>

            <div className="mb-2">
              <Input
                label={"Full name"}
                placeholder={"Aman Kumar Pandey"}
                type={"text"}
              />
            </div>
            <div className="mb-1">
              <Input
                label={"Password"}
                placeholder={"Type your password here."}
                type={"password"}
              />
            </div>
            <div>
              <ButtonComponent label={"Signup"} />
            </div>
            <div>
              <SubHeading value={"Already a user? Signin"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
