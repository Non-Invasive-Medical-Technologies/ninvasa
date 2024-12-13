import AnesaPlatform from "../components/AnesaPlatform";
import AnesaTechnology from "../components/anesa/AnesaTechnology";

const Anesa = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="section-fade-in">
        <h1 className="text-4xl font-bold mb-8 text-center">ANESA Platform</h1>
        <AnesaTechnology />
        <div className="mt-8">
          <AnesaPlatform />
        </div>
      </div>
    </div>
  );
};

export default Anesa;