import { useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubHeading from "../components/SubHeading";
import axios from "axios";

export default function Signup() {
  const [username, setUserName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-[#000517] h-screen w-screen flex justify-center items-center">
      <div className="w-[400px] h-[520px] rounded-lg shadow-2xl shadow-[#000997] bg-white py-3 px-6">
        <div>
          <Heading label={"Signup"} />
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

            <div className="mb-2">
              <Input
                label={"First name"}
                placeholder={"Aman Kumar"}
                type={"text"}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>

            <div className="mb-1">
              <Input
                label={"Last name"}
                placeholder={"Pandey"}
                type={"text"}
                onChange={(e) => {
                  setLastName(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>

            <div className="mb-1">
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
                label={"Signup"}
                onClick={async () => {
                  const response = await axios.post(
                    "http://localhost:3000/api/v1/user/signup",
                    {
                      username,
                      firstname,
                      lastname,
                      password,
                    }
                  );

                  console.log(response.data);
                }}
              />
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
