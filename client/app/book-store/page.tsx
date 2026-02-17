import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export default function BookStore() {
  return (
    <div className="min-h-screen bg-[#FEFCF5] page-transition flex flex-col">
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <div className="text-center">
          <div className="text-5xl sm:text-6xl mb-6 sm:mb-8 animate-bounce">📚</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#583101] mb-4 animate-fadeIn">
            Book Store
          </h1>
          <p className="text-lg sm:text-xl text-[#583101] mb-8 max-w-2xl mx-auto animate-fadeIn delay-100">
            Welcome to our enchanting collection of educational books for children
          </p>
          <div className="bg-[#F4E1D2] rounded-lg p-8 sm:p-12 max-w-2xl mx-auto shadow-lg hover-glow animate-scaleIn delay-200">
            <p className="text-xl sm:text-2xl text-[#583101] font-semibold mb-4">
              Coming Soon!
            </p>
            <p className="text-[#583101] text-sm sm:text-base">
              We're preparing a magical selection of books that will inspire and educate young minds. 
              Stay tuned for our grand opening!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
