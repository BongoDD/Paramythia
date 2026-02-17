import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export default function PlayStore() {
  return (
    <div className="min-h-screen bg-[#FEFCF5] page-transition">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center">
          <div className="text-5xl sm:text-6xl mb-6 sm:mb-8 animate-bounce">🎲</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#583101] mb-4 animate-fadeIn">
            Play Store
          </h1>
          <p className="text-lg sm:text-xl text-[#583101] mb-8 max-w-2xl mx-auto animate-fadeIn delay-100">
            Discover fun and educational toys that spark creativity and imagination
          </p>
          <div className="bg-[#A3B18A] rounded-lg p-8 sm:p-12 max-w-2xl mx-auto shadow-lg hover-glow animate-scaleIn delay-200">
            <p className="text-xl sm:text-2xl text-[#FEFCF5] font-semibold mb-4">
              Coming Soon!
            </p>
            <p className="text-[#FEFCF5] text-sm sm:text-base">
              We're curating an exciting collection of educational toys and games. 
              Check back soon to explore our playful selection!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
