import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FEFCF5] page-transition flex flex-col">
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#583101] mb-4 animate-fadeIn">
            About Paramythia
          </h1>
          <p className="text-lg sm:text-xl text-[#583101] max-w-2xl mx-auto animate-fadeIn delay-100">
            Where stories come to life and learning is an adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-[#F4E1D2] rounded-lg p-6 sm:p-8 shadow-lg hover-lift animate-slideInLeft">
            <h2 className="text-xl sm:text-2xl font-bold text-[#583101] mb-4">Our Mission</h2>
            <p className="text-[#583101] text-sm sm:text-base">
              Paramythia is dedicated to providing high-quality educational books and toys for children. 
              We believe in the power of stories and play to inspire young minds and foster a love of learning.
            </p>
          </div>
          <div className="bg-[#A3B18A] rounded-lg p-6 sm:p-8 shadow-lg hover-lift animate-slideInRight">
            <h2 className="text-xl sm:text-2xl font-bold text-[#FEFCF5] mb-4">Our Vision</h2>
            <p className="text-[#FEFCF5] text-sm sm:text-base">
              We envision a world where every child has access to enriching stories and educational resources 
              that spark curiosity, creativity, and a lifelong passion for learning.
            </p>
          </div>
        </div>

        <div className="bg-[#D4A373] rounded-lg p-6 sm:p-8 max-w-3xl mx-auto shadow-lg hover-glow animate-scaleIn delay-300">
          <h2 className="text-xl sm:text-2xl font-bold text-[#583101] mb-4 text-center">
            What Makes Us Special
          </h2>
          <ul className="space-y-3 text-[#583101] text-sm sm:text-base">
            <li className="flex items-start">
              <span className="mr-2 text-lg">📖</span>
              <span>Carefully curated selection of age-appropriate books</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-lg">🎨</span>
              <span>Educational toys that promote creativity and critical thinking</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-lg">👨‍👩‍👧‍👦</span>
              <span>Family-friendly environment with welcoming atmosphere</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-lg">🌟</span>
              <span>Expert recommendations from educators and child development specialists</span>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
