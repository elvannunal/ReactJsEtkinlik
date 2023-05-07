import {useState} from "react";

function TextComponent({ text }) {
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText((prev) => !prev);

        console.log("setShowFullText",setShowFullText)
    };

    return (
        <div className="flex flex-wrap 2xl:w-9/12 2xl:h-32">
      <span
          className={`${
              showFullText ? "h-auto" : "h-16"
          } transition-all duration-500 ease-in-out overflow-hidden`}
      >
        {text}
      </span>
            {text.length > 12 && (
                <span
                    className="cursor-pointer ml-2 text-cpink"
                    onClick={toggleText}
                >
          {showFullText ? "Daha Az Göster" : "Devamını Oku"}
        </span>
            )}
        </div>
    );
}
export default TextComponent