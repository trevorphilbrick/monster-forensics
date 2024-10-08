import { useContext } from "react";
import { CurrentDisplayContext } from "../App";

function Intro() {
  const { setCurrentDisplay } = useContext(CurrentDisplayContext);
  return (
    <div className="container mx-auto my-12 flex flex-col ">
      <h1 className="text-3xl mb-8 text-center">Monster Forensics Team</h1>
      <p>
        Hello, We are the Monster Forensics Team! With all the new monsters
        invading planet earth, it's hard for us to keep track of what they look
        like. With your help, our sketch artist will create an image based on
        your description. Ready to help us out?
      </p>
      <p className="text-sm mb-4 font-bold">
        (Just a head's up, our team is a little... stubborn and may not be able
        to create a likeness on the first try.)
      </p>
      <button
        className="self-end px-4 py-2 bg-green-400 text-white font-bold"
        onClick={() => setCurrentDisplay("questionnaire")}
      >
        Let's Get Started!
      </button>
    </div>
  );
}

export default Intro;
