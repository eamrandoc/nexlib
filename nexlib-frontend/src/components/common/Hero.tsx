import { Button } from "@/components/ui/button"; // adjust path if needed

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 to-blue-600 text-white py-20 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome to NexLib
        </h1>
        <p className="text-lg mb-8 drop-shadow-sm">
          Manage and borrow books easily with our minimal library management system.
        </p>
        <Button
          variant="default"
          size="lg"
          onClick={() => window.location.href = "/all-books"}
          className="shadow-lg hover:shadow-xl transition-shadow"
        >
          Explore Books
        </Button>
      </div>
    </section>
  );
};

export default Hero;
