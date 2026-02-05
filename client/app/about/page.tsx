import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FEFCF5]">
      {/* Header */}
      <header className="bg-[#F4E1D2] shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-3xl font-bold text-[#583101] hover:text-[#D4A373]">
              Paramythia
            </Link>
            <div className="flex gap-6">
              <Link href="/" className="text-[#583101] hover:text-[#D4A373] transition-colors">
                Home
              </Link>
              <Link href="/book-store" className="text-[#583101] hover:text-[#D4A373] transition-colors">
                Books
              </Link>
              <Link href="/play-store" className="text-[#583101] hover:text-[#D4A373] transition-colors">
                Toys
              </Link>
              <Link href="/events" className="text-[#583101] hover:text-[#D4A373] transition-colors">
                Events
              </Link>
              <Link href="/about" className="text-[#D4A373] font-semibold transition-colors">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#583101] mb-4">About Paramythia</h1>
          <p className="text-xl text-[#583101] max-w-2xl mx-auto">
            Where stories come to life and learning is an adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#F4E1D2] rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#583101] mb-4">Our Mission</h2>
            <p className="text-[#583101]">
              Paramythia is dedicated to providing high-quality educational books and toys for children. 
              We believe in the power of stories and play to inspire young minds and foster a love of learning.
            </p>
          </div>
          <div className="bg-[#A3B18A] rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#FEFCF5] mb-4">Our Vision</h2>
            <p className="text-[#FEFCF5]">
              We envision a world where every child has access to enriching stories and educational resources 
              that spark curiosity, creativity, and a lifelong passion for learning.
            </p>
          </div>
        </div>

        <div className="bg-[#D4A373] rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#583101] mb-4 text-center">What Makes Us Special</h2>
          <ul className="space-y-3 text-[#583101]">
            <li className="flex items-start">
              <span className="mr-2">📖</span>
              <span>Carefully curated selection of age-appropriate books</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🎨</span>
              <span>Educational toys that promote creativity and critical thinking</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">👨‍👩‍👧‍👦</span>
              <span>Family-friendly environment with welcoming atmosphere</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🌟</span>
              <span>Expert recommendations from educators and child development specialists</span>
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#F4E1D2] mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#583101]">
            © 2026 Paramythia - An educational book and play store for children
          </p>
        </div>
      </footer>
    </div>
  );
}
