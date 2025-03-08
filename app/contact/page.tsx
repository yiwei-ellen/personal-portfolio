import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
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

      <section className="flex-1 relative">
        {/* Background image container */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center bg-no-repeat opacity-10" />

        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h2 className="text-4xl font-bold mb-4 text-center">Contact</h2>
            <p className="text-gray-700 mb-8 text-center text-sm">Looking forward to hearing from you</p>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <Input id="firstName" required className="w-full bg-white/80" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <Input id="lastName" required className="w-full bg-white/80" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input id="email" type="email" required className="w-full bg-white/80" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" className="w-full bg-white/80" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" rows={6} className="w-full bg-white/80" />
              </div>

              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-full">
                Submit
              </Button>
            </form>
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

