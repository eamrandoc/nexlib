import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const quotes = [
  {
    quote: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
    author: "George R.R. Martin",
  },
  {
    quote: "Reading is essential for those who seek to rise above the ordinary.",
    author: "Jim Rohn",
  },
  {
    quote: "Once you learn to read, you will be forever free.",
    author: "Frederick Douglass",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    quote: "The only thing you absolutely have to know is the location of the library.",
    author: "Albert Einstein",
  },
];

const Article = () => {
   const navigate = useNavigate();

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (slider.current) {
        slider.current.next();
      }
    }, 4000); // Change quote every 4 seconds
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section className="bg-gradient-to-r from-indigo-800 to-blue-500 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Inspire Daily Reading</h2>

        {/* Quote Slider */}
        <div ref={sliderRef} className="keen-slider mb-10">
          {quotes.map((q, idx) => (
            <div
              key={idx}
              className="keen-slider__slide flex flex-col justify-center items-center px-4"
            >
              <p className="text-xl md:text-2xl font-light max-w-2xl">
                “{q.quote}”
              </p>
              <p className="mt-4 text-sm text-gray-200 italic">— {q.author}</p>
            </div>
          ))}
        </div>

        <Button
          onClick={() => navigate("/all-books")}
          className="bg-white text-indigo-700 hover:bg-gray-100 px-6 py-3 text-base font-semibold rounded-md transition"
        >
          Start Exploring
        </Button>
      </div>
    </section>
  );
};

export default Article;