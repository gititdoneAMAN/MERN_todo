import ButtonComponent from "../components/ButtonComponent";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubHeading from "../components/SubHeading";
import { useState } from "react";
import axios from "axios";

export default function Signin() {
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  return (
    <div className="bg-[#000517] h-screen w-screen flex justify-center items-center">
      <div className="w-[400px] h-[400px] rounded-lg shadow-2xl shadow-[#000997] bg-white py-3 px-6">
        <div>
          <Heading label={"Signin"} />
          <div className="mt-[25px]">
            <div className="mb-2">
              <Input
                label={"Username"}
                placeholder={"aman@gmail.com"}
                type={"text"}
                onChange={(e) => {
                  setUserName(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="mt-[20px]">
              <Input
                label={"Password"}
                placeholder={"Type your password here."}
                type={"password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div>
              <ButtonComponent
                label={"Signin"}
                onClick={async () => {
                  const response = await axios.post(
                    "http://localhost:3000/api/v1/user/signin",
                    {
                      username,
                      password,
                    }
                  );

                  localStorage.setItem(
                    "token",
                    `Bearer ${response.data.token}`
                  );
                  console.log(response.data.token);
                }}
              />
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
