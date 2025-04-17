import { useEffect, useState } from "react";

export default function useTypeWriter(text, speed = 50) {
  const [displayTyping, setTyping] = useState("");
  let i = 0;

  useEffect(() => {
    if (i < text.length) {
      setDisplayText((previousText) => previousText + text.charAt(i));
      i++;
    }
  });
  return displayTyping;
}

export default function typeWriter(text) {
	if (i < text.length) {
	  document.getElementById("text").innerHTML += txt.charAt(i);
	  i++;
	  setTimeout(typeWriter, speed);
	}
  }