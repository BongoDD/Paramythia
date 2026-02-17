import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FEFCF5] page-transition">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <section className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#583101] mb-4 animate-fadeIn">
            Welcome to Paramythia
          </h2>
          <p className="text-lg sm:text-xl text-[#583101] mb-8 max-w-2xl mx-auto animate-fadeIn delay-200">
            An educational book and play store for children, where imagination comes alive
          </p>
        </section>

        {/* Theme Showcase */}
        <section className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#583101] mb-6 sm:mb-8 text-center animate-slideInLeft">
            Our Fairytale Theme
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-[#FEFCF5] border-4 border-[#F4E1D2] rounded-lg p-4 sm:p-6 text-center shadow-md hover-lift card-entrance">
              <div className="w-full h-20 sm:h-24 bg-[#FEFCF5] rounded mb-4 border-2 border-[#D4A373]"></div>
              <h4 className="font-bold text-[#583101] mb-2 text-sm sm:text-base">Fairytale Cream</h4>
              <p className="text-xs sm:text-sm text-[#583101]">#FEFCF5</p>
            </div>
            <div className="bg-[#F4E1D2] border-4 border-[#D4A373] rounded-lg p-4 sm:p-6 text-center shadow-md hover-lift card-entrance delay-100">
              <div className="w-full h-20 sm:h-24 bg-[#F4E1D2] rounded mb-4 border-2 border-[#583101]"></div>
              <h4 className="font-bold text-[#583101] mb-2 text-sm sm:text-base">Fairytale Sand</h4>
              <p className="text-xs sm:text-sm text-[#583101]">#F4E1D2</p>
            </div>
            <div className="bg-[#A3B18A] border-4 border-[#F4E1D2] rounded-lg p-4 sm:p-6 text-center shadow-md hover-lift card-entrance delay-200">
              <div className="w-full h-20 sm:h-24 bg-[#A3B18A] rounded mb-4 border-2 border-[#FEFCF5]"></div>
              <h4 className="font-bold text-[#FEFCF5] mb-2 text-sm sm:text-base">Fairytale Sage</h4>
              <p className="text-xs sm:text-sm text-[#FEFCF5]">#A3B18A</p>
            </div>
            <div className="bg-[#D4A373] border-4 border-[#A3B18A] rounded-lg p-4 sm:p-6 text-center shadow-md hover-lift card-entrance delay-300">
              <div className="w-full h-20 sm:h-24 bg-[#D4A373] rounded mb-4 border-2 border-[#583101]"></div>
              <h4 className="font-bold text-[#583101] mb-2 text-sm sm:text-base">Fairytale Terracotta</h4>
              <p className="text-xs sm:text-sm text-[#583101]">#D4A373</p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#583101] mb-6 sm:mb-8 text-center animate-slideInRight">
            Explore Our Store
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Link
              href="/book-store"
              className="bg-[#F4E1D2] rounded-lg p-6 sm:p-8 hover:bg-[#D4A373] transition-all duration-300 shadow-lg hover-lift animate-scaleIn"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-[#583101] mb-2">📚 Book Store</h4>
              <p className="text-[#583101] text-sm sm:text-base">
                Discover enchanting stories and educational books for children
              </p>
            </Link>
            <Link
              href="/play-store"
              className="bg-[#A3B18A] rounded-lg p-6 sm:p-8 hover:bg-[#D4A373] transition-all duration-300 shadow-lg hover-lift animate-scaleIn delay-200"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-[#FEFCF5] mb-2">🎲 Play Store</h4>
              <p className="text-[#FEFCF5] text-sm sm:text-base">
                Find fun and educational toys that spark creativity
              </p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
