import { useEffect, useState } from "react";
import sunIcon from "../public/icons/icons8-sun-50.png";
import moonIcon from "../public/icons/icons8-moon-50.png";
import "./App.css";

export default function App() {
  const themeDuration = "transition-colors duration-500 ease-in-out";
  const validNumKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", ".", "%"];

  const [result, setResult] = useState<string>("");
  const [display, setDisplay] = useState<string>("");

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (validNumKeys.includes(key)) {
        appendDisplay(key);
      }
      if (key === "Enter") {
        e.preventDefault();
        clacDisplay();
      }
      if (key === "Backspace") {
        clearData();
      }
      if (key === "Escape") {
        clearDisplay();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [display, result]);

  function toggleTheme(isDark: boolean) {
    localStorage.setItem("isDark", isDark ? "dark" : "light");
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function appendDisplay(value: string) {
    setDisplay(display + value);
  }

  function clearDisplay() {
    setDisplay("");
    setResult("");
  }
  function clacDisplay() {
    try {
      const result = eval(display);
      setResult(result.toString());
    } catch (error) {
      setResult("Error");
    }
  }

  function logValues() {
    console.log(`The display value is: ${display}`);
    console.log(`The result value is: ${result}`);
    console.log(`The display type is: ${typeof display}`);
    console.log(`The result type is: ${typeof result}`);
    console.log(`------------------------------------------------`);
  }

  function clearData() {
    setDisplay(display.slice(0, -1));
    setResult("");
  }

  return (
    <>
      <div className={`bg-[#E6E6E6] dark:bg-[#1b1b1f] ${themeDuration} h-[100vh] w-[100%] flex items-center justify-center`}>
        <div className={`bg-[#FFFFFF] dark:bg-[#030822] ${themeDuration} rounded-[20px] overflow-hidden`}>
          <div className="h-12 mb-8 flex items-center justify-center">
            <div className={`bg-[#F0F0F0] dark:bg-[#1E2032] ${themeDuration} rounded-[6px] px-3 py-2 flex gap-6`}>
              <img src={sunIcon} height={22} width={22} onClick={() => toggleTheme(false)} />
              <img src={moonIcon} height={22} width={22} onClick={() => toggleTheme(true)} />
            </div>
          </div>
          <div className={`flex h-8 items-center px-2 text-black dark:text-white ${themeDuration} overflow-hidden tracking-widest`}>{display}</div>
          <div className="flex h-8 items-center px-2 text-[#138EA4] font-bold overflow-hidden">{result}</div>
          <div className={`grid bg-[#F0F0F0] dark:bg-[#181C2F] ${themeDuration} p-2 rounded-t-[18px] grid-cols-4 gap-1`}>
            <button className="text-[#1759A4]" onClick={clearDisplay}>
              AC
            </button>
            <button className="text-[#1759A4]" onClick={clearData}>
              C
            </button>
            <button className="text-[#1759A4]" onClick={() => appendDisplay("%")}>
              %
            </button>
            <button className={`text-[#138EA4] bg-[#F8FAF9] dark:bg-[#1F2130] ${themeDuration}`} onClick={() => appendDisplay("+")}>
              +
            </button>
            <button className={`dark:text-[#b3b6be] ${themeDuration} text-black`} onClick={() => appendDisplay("7")}>
              7
            </button>
            <button className={`dark:text-[#b3b6be] ${themeDuration} text-black`} onClick={() => appendDisplay("8")}>
              8
            </button>
            <button className={`dark:text-[#b3b6be] ${themeDuration} text-black`} onClick={() => appendDisplay("9")}>
              9
            </button>
            <button className={`text-[#138EA4] bg-[#F8FAF9] dark:bg-[#1F2130] ${themeDuration}`} onClick={() => appendDisplay("-")}>
              -
            </button>
            <button className={`dark:text-[#b3b6be] ${themeDuration} text-black`} onClick={() => appendDisplay("4")}>
              4
            </button>
            <button className={`dark:text-[#b3b6be] ${themeDuration} text-black`} onClick={() => appendDisplay("5")}>
              5
            </button>
            <button className={`dark:text-[#b3b6be] ${themeDuration} text-black`} onClick={() => appendDisplay("6")}>
              6
            </button>
            <button className={`text-[#138EA4] bg-[#F8FAF9] dark:bg-[#1F2130] ${themeDuration}`} onClick={() => appendDisplay("*")}>
              *
            </button>
            <button className={`dark:text-[#b3b6be] ${themeDuration} text-black`} onClick={() => appendDisplay("1")}>
              1
            </button>
            <button className={`dark:text-[#b3b6be] ${themeDuration} text-black`} onClick={() => appendDisplay("2")}>
              2
            </button>
            <button className={`dark:text-[#b3b6be] ${themeDuration} text-black`} onClick={() => appendDisplay("3")}>
              3
            </button>
            <button className={`text-[#138EA4] bg-[#F8FAF9] dark:bg-[#1F2130] ${themeDuration}`} onClick={() => appendDisplay("/")}>
              /
            </button>
            <button className={`dark:text-[#b3b6be] ${themeDuration} text-black`} onClick={() => appendDisplay("0")}>
              0
            </button>
            <button className={`dark:text-[#b3b6be] ${themeDuration} text-black`} onClick={() => appendDisplay(".")}>
              .
            </button>
            <button className={`dark:text-[#b3b6be] ${themeDuration} text-black`} onClick={logValues}>
              log
            </button>
            <button className="text-[#A5FFFF] bg-[#00BFDE]" onClick={clacDisplay}>
              =
            </button>
          </div>
        </div>
        <footer className={`absolute flex flex-col items-center justify-center bottom-0 left-0 py-4 w-[100%] bg-[#FFFFFF] dark:bg-[#030822] ${themeDuration}`}>
          <p className={`text-black dark:text-white ${themeDuration}`}>
            Dribbble link:
            <a target="_blank" href="https://dribbble.com/shots/15449357-Daily-UI-004-Calculator-Design">
              Click here
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
