import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10">{/* Space for logo */}</div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-500"></div>
            <div>
              <h1 className="font-medium">Ellen Yan</h1>
              <p className="text-sm text-gray-600">Product Manager</p>
            </div>
          </div>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/resume.pdf" className="hover:underline" target="_blank" rel="noopener noreferrer">
                Resume
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="inline-block w-4 h-4 bg-blue-600 mr-2"></span>
            Personal Projects
          </h2>

          <p className="text-gray-700 mb-12 max-w-xl mx-auto text-center text-sm leading-relaxed">
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double
            click me to add your own content and make changes to the font.
          </p>

          <div className="space-y-8">
            <div className="bg-white shadow-sm rounded-lg overflow-hidden max-w-2xl mx-auto">
              <div className="grid grid-cols-2">
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-1 h-8 bg-blue-600 mr-3"></div>
                    <div>
                      <h3 className="text-lg font-bold">Stellabridge</h3>
                      <p className="text-sm text-gray-600">Chief Operating Officer</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    Dabbled in venture capitalism in 2024. Invested in a foundational LLM model. 
                  </p>
                </div>
                <div className="bg-gray-100">
                  <Image
                    src="/personal-portfolio/stellabridge-logo.png"
                    alt="Project 1"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white shadow-sm rounded-lg overflow-hidden max-w-2xl mx-auto">
              <div className="grid grid-cols-2">
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-1 h-8 bg-blue-600 mr-3"></div>
                    <div>
                      <h3 className="text-lg font-bold">Global Shapers Seattle</h3>
                      <p className="text-sm text-gray-600">Curator</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    Bringing in business for immigrant-owned restaurants, cumulative order value reached 10k within 3 months and growing.
                  </p>
                </div>
                <div className="bg-gray-100">
                  <Image
                    src="/personal-portfolio/seattleshapers.jpg"
                    alt="Project 2"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium mb-2">Phone</h4>
              <p className="text-gray-600">123-456-7890</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Email</h4>
              <p className="text-gray-600">info@mysite.com</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Follow Me</h4>
              <div className="flex gap-4">
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                </Link>
                <Link href="#" aria-label="Calendly">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-gray-600 hover:text-gray-900 fill-current"
                  >
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5z" />
                    <path d="M16.5 12.75h-4.5a.75.75 0 01-.75-.75V6a.75.75 0 011.5 0v5.25H16.5a.75.75 0 010 1.5z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-sm text-gray-600 text-right">
            © 2025 By Ellen Yan
          </div>
        </div>
      </footer>
    </main>
  )
}

