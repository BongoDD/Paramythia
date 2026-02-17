import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FEFCF5]">
      {/* Header */}
      <header className="bg-[#F4E1D2] shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-[#583101]">Paramythia</h1>
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
              <Link href="/about" className="text-[#583101] hover:text-[#D4A373] transition-colors">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#583101] mb-4">
            Welcome to Paramythia
          </h2>
          <p className="text-xl text-[#583101] mb-8 max-w-2xl mx-auto">
            An educational book and play store for children, where imagination comes alive
          </p>
        </section>

        {/* Theme Showcase */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-[#583101] mb-8 text-center">
            Our Fairytale Theme
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FEFCF5] border-4 border-[#F4E1D2] rounded-lg p-6 text-center shadow-md">
              <div className="w-full h-24 bg-[#FEFCF5] rounded mb-4 border-2 border-[#D4A373]"></div>
              <h4 className="font-bold text-[#583101] mb-2">Fairytale Cream</h4>
              <p className="text-sm text-[#583101]">#FEFCF5</p>
            </div>
            <div className="bg-[#F4E1D2] border-4 border-[#D4A373] rounded-lg p-6 text-center shadow-md">
              <div className="w-full h-24 bg-[#F4E1D2] rounded mb-4 border-2 border-[#583101]"></div>
              <h4 className="font-bold text-[#583101] mb-2">Fairytale Sand</h4>
              <p className="text-sm text-[#583101]">#F4E1D2</p>
            </div>
            <div className="bg-[#A3B18A] border-4 border-[#F4E1D2] rounded-lg p-6 text-center shadow-md">
              <div className="w-full h-24 bg-[#A3B18A] rounded mb-4 border-2 border-[#FEFCF5]"></div>
              <h4 className="font-bold text-[#FEFCF5] mb-2">Fairytale Sage</h4>
              <p className="text-sm text-[#FEFCF5]">#A3B18A</p>
            </div>
            <div className="bg-[#D4A373] border-4 border-[#A3B18A] rounded-lg p-6 text-center shadow-md">
              <div className="w-full h-24 bg-[#D4A373] rounded mb-4 border-2 border-[#583101]"></div>
              <h4 className="font-bold text-[#583101] mb-2">Fairytale Terracotta</h4>
              <p className="text-sm text-[#583101]">#D4A373</p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h3 className="text-3xl font-bold text-[#583101] mb-8 text-center">
            Explore Our Store
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/book-store"
              className="bg-[#F4E1D2] rounded-lg p-8 hover:bg-[#D4A373] transition-colors shadow-lg"
            >
              <h4 className="text-2xl font-bold text-[#583101] mb-2">📚 Book Store</h4>
              <p className="text-[#583101]">
                Discover enchanting stories and educational books for children
              </p>
            </Link>
            <Link
              href="/play-store"
              className="bg-[#A3B18A] rounded-lg p-8 hover:bg-[#D4A373] transition-colors shadow-lg"
            >
              <h4 className="text-2xl font-bold text-[#FEFCF5] mb-2">🎲 Play Store</h4>
              <p className="text-[#FEFCF5]">
                Find fun and educational toys that spark creativity
              </p>
            </Link>
          </div>
        </section>
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
