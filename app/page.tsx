import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"
import TypewriterEffect from "./home-animation"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10">{/* Space for logo */}</div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-500"></div>
            <div>
              <h1 className="font-medium">Ellen Yan</h1>
              <p className="text-sm text-gray-600">Editor</p>
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

      <section className="flex-1 container mx-auto px-4">
        <div className="max-w-6xl mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="justify-self-end">
              <div className="w-[400px] h-[400px] rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/face-portrait.png?height=400&width=400"
                  alt="Profile photo"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            <div className="max-w-md">
              <TypewriterEffect />
              <div>
                <h3 className="text-2xl font-playfair font-semibold mb-4">My name is Ellen</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                I graduated from University of Pennsylvania and am currently working at Microsoft Defender for Endpoint. 
                I am passionate on scaling products and building community. 
             
                </p>

                <div className="flex gap-6">
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-24 h-24 rounded-full flex items-center justify-center bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors"
                  >
                    Resume
                  </Link>
                  <Link
                    href="/projects"
                    className="w-24 h-24 rounded-full flex items-center justify-center bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="w-24 h-24 rounded-full flex items-center justify-center bg-teal-400 text-white font-medium hover:bg-teal-500 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200">
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
            © 2023 By Ellen Yan
            <br />
            Powered and secured by Wix
          </div>
        </div>
      </footer>
    </main>
  )
}

