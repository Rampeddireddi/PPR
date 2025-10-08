import { useEffect, useState } from "react";

const greetings = ["Namaskar", "Hello", "Vanakkam", "Bonjour", "Hola", "こんにちは", "नमस्ते"];

export default function WelcomeScreen({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 700); // change greeting every 0.7s

    // hide welcome screen after 4 seconds
    const timeout = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center text-white text-2xl font-semibold transition-opacity duration-400 z-50">
     <span className="animate-cinematic">{greetings[index]}</span>
    </div>
  );
}
