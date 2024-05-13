import ButtonComponent from "../components/ButtonComponent";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubHeading from "../components/SubHeading";

export default function Signin() {
  return (
    <div className="bg-[#000517] h-screen w-screen flex justify-center items-center">
      <div className="w-[400px] h-[400px] rounded-lg shadow-2xl shadow-[#000997] bg-white p-3">
        <div>
          <Heading label={"Signin"} />
          <div className="mt-[25px]">
            <div className="mb-2">
              <Input
                label={"Username"}
                placeholder={"aman@gmail.com"}
                type={"text"}
              />
            </div>
            <div className="mt-[20px]">
              <Input
                label={"Password"}
                placeholder={"Type your password here."}
                type={"password"}
              />
            </div>
            <div>
              <ButtonComponent label={"Signin"} />
            </div>
            <div>
              <SubHeading value={"Not a user yet? Signup."} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
