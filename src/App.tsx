import { useState } from "react";
import sunIcon from "../public/icons/icons8-sun-50.png";
import moonIcon from "../public/icons/icons8-moon-50.png";
import "./App.css";

export default function App() {
  const [result, setResult] = useState<string>("");
  const [display, setDisplay] = useState<string>("");

  function appendDisplay(value: string) {
    setDisplay(display + value);
  }
  function clearDisplay() {
    setDisplay("");
    setResult("");
  }
  function clacDisplay() {
    const result = eval(display);
    setResult(result);
  }

  function logValues() {
    console.log(`The display value is: ${display}`);
    console.log(`The result value is: ${result}`);
    console.log(`The display type is: ${typeof display}`);
    console.log(`The result type is: ${typeof result}`);
    // console.log(`The last number value is: ${lastNumber}`);
    // console.log(`The operator value is: ${op}`);
    console.log(`------------------------------------------------`);
  }

  function clearData() {
    setDisplay(display.slice(0, -1));
    setResult(result.slice(0, -1));
  }

  return (
    <div className="main-body">
      <div className="bg-[#030822] rounded-[20px] border-[#040c35] border-4 overflow-hidden">
        <div className="h-12 flex items-center justify-center">
          <div className="border-white border-1 border-solid rounded-[6px] px-3 py-2 flex gap-6">
            <img src={sunIcon} height={22} width={22} />
            <img src={moonIcon} height={22} width={22} />
          </div>
        </div>
        <div className="flex h-8 items-center px-2 text-white overflow-hidden tracking-widest">{display}</div>
        <div className="flex h-8 items-center px-2 text-[#138EA4] font-bold overflow-hidden">{result}</div>
        <div className="grid bg-[#181C2F] p-2 rounded-t-[18px] grid-cols-4 gap-1">
          <button className="text-[#1759A4]" onClick={clearDisplay}>
            AC
          </button>
          <button className="text-[#1759A4]" onClick={clearData}>
            C
          </button>
          <button className="text-[#1759A4]" onClick={() => appendDisplay("%")}>
            %
          </button>
          <button className="text-[#138EA4] bg-[#1F2130]" onClick={() => appendDisplay("+")}>
            +
          </button>
          <button className="numbers" onClick={() => appendDisplay("7")}>
            7
          </button>
          <button className="numbers" onClick={() => appendDisplay("8")}>
            8
          </button>
          <button className="numbers" onClick={() => appendDisplay("9")}>
            9
          </button>
          <button className="text-[#138EA4] bg-[#1F2130]" onClick={() => appendDisplay("-")}>
            -
          </button>
          <button className="numbers" onClick={() => appendDisplay("4")}>
            4
          </button>
          <button className="numbers" onClick={() => appendDisplay("5")}>
            5
          </button>
          <button className="numbers" onClick={() => appendDisplay("6")}>
            6
          </button>
          <button className="text-[#138EA4] bg-[#1F2130]" onClick={() => appendDisplay("*")}>
            *
          </button>
          <button className="numbers" onClick={() => appendDisplay("1")}>
            1
          </button>
          <button className="numbers" onClick={() => appendDisplay("2")}>
            2
          </button>
          <button className="numbers" onClick={() => appendDisplay("3")}>
            3
          </button>
          <button className="text-[#138EA4]  bg-[#1F2130]" onClick={() => appendDisplay("/")}>
            /
          </button>
          <button className="numbers" onClick={() => appendDisplay("0")}>
            0
          </button>
          <button className="numbers" onClick={() => appendDisplay(".")}>
            .
          </button>
          <button className="numbers" onClick={logValues}>
            log
          </button>
          <button className="text-[#A5FFFF] bg-[#00BFDE]" onClick={clacDisplay}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
