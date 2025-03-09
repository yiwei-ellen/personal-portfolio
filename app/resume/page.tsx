import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"
import "../globals.css"

export default function Resume() {
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
          <h2 className="text-4xl font-bold mb-8">Resume</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold">Senior Editor</h4>
                  <p className="text-gray-600">Publishing House Name | 2020 - Present</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                    <li>Managed editorial team of 5 people</li>
                    <li>Edited over 50 manuscripts per year</li>
                    <li>Developed new editorial guidelines</li>
                    <li>Collaborated with authors to refine manuscripts</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold">Editor</h4>
                  <p className="text-gray-600">Publishing House Name | 2015 - 2020</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                    <li>Edited fiction and non-fiction manuscripts</li>
                    <li>Provided developmental and line editing</li>
                    <li>Worked with authors to meet publishing deadlines</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold">Master of Arts in English Literature</h4>
                  <p className="text-gray-600">University Name | 2013 - 2015</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold">Bachelor of Arts in English</h4>
                  <p className="text-gray-600">University Name | 2009 - 2013</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Developmental Editing</li>
                    <li>Line Editing</li>
                    <li>Copy Editing</li>
                    <li>Proofreading</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Project Management</li>
                    <li>Team Leadership</li>
                    <li>Microsoft Office Suite</li>
                    <li>Adobe InDesign</li>
                  </ul>
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

