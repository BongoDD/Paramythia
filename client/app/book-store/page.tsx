import Link from "next/link";

export default function BookStore() {
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
              <Link href="/book-store" className="text-[#D4A373] font-semibold transition-colors">
                Books
              </Link>
              <Link href="/play-store" className="text-[#583101] hover:text-[#D4A373] transition-colors">
                Toys
              </Link>
              <Link href="/events" className="text-[#583101] hover:text-[#D4A373] transition-colors">
                Events
              </Link>
              <Link href="/about" className="text-[#583101] hover:text-[#D4A373] transition-colors">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="text-6xl mb-8">📚</div>
          <h1 className="text-5xl font-bold text-[#583101] mb-4">Book Store</h1>
          <p className="text-xl text-[#583101] mb-8 max-w-2xl mx-auto">
            Welcome to our enchanting collection of educational books for children
          </p>
          <div className="bg-[#F4E1D2] rounded-lg p-12 max-w-2xl mx-auto">
            <p className="text-2xl text-[#583101] font-semibold mb-4">Coming Soon!</p>
            <p className="text-[#583101]">
              We're preparing a magical selection of books that will inspire and educate young minds. 
              Stay tuned for our grand opening!
            </p>
          </div>
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
