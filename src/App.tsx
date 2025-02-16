import React from 'react'
import { 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Code2, 
  Cpu, 
  BookOpen,
  Calendar,
  Languages,
  MapPin,
  User
} from 'lucide-react'
import sound from './img/panda.jpeg'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
            <div className="flex space-x-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="max-w-3xl mx-auto text-center">
              {/* Profile Photo */}
              <img
                src={sound}
                alt="Sowndaray Laskshmi M"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              {/* Profile Name */}
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Sowndaray Laskshmi M</h1>
              
              <div className="flex justify-center space-x-4 mb-6">
                <a
                  href="mailto:example@gmail.com"
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  vsowndaryalakshmi@gmail.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +49 15213630352
                </a>
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/sowndarya-lakshmi-5133851b8/"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* About Section */} 
        <section id="about" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-gray-600 mb-8">
              Versatile engineer with expertise in Embedded Systems, Solution Development, and end-to-end project execution. 
              Proficient in agile methodologies, GUI development, test automation, and cross-functional collaboration to deliver impactful solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Freiburg(Germany)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Date of Birth</h3>
                  <p className="text-gray-600">25 June 2002</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Languages className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Languages</h3>
                  <p className="text-gray-600">English, Tamil, Hindi, Telugu</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Code2 className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Programming Languages</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>C, C++</li>
                  <li>Python</li>
                  <li>LabVIEW</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Software & Tools</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>MATLAB, MPLAB</li>
                  <li>Proteus</li>
                  <li>Arduino</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Project Management</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>Agile Practices</li>
                  <li>Azure, JIRA, Confluence</li>
                  <li>GIT, Perforce</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-gray-900">Project Engineer</h3>
                <p className="text-gray-600">Soliton Technologies | Jun '23 - Sept '24</p>
                <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                  <li>Agile process work: customer interfacing, requirement gathering, backlog refinement, development, testing, release.</li>
                  <li>GUI development for customer-provided chips/devices; hardware and software testing.</li>
                  <li>Developed tools and test automation scripts; streamlined processes using no-code tools.</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-gray-900">Project Intern</h3>
                <p className="text-gray-600">Soliton Technologies | Jan '23 - May '23</p>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>LabVIEW training and internal software development/testing.</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-gray-900">Student Intern</h3>
                <p className="text-gray-600">Samsung Prism | Nov '21 - Mar '23</p>
                <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                  <li>Mobile application development for UAV control; custom path tracking and automatic navigation.</li>
                  <li>Developed the mathematical model for the UAV.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">USB Redriver Circuits</h3>
                <p className="text-gray-600 mb-4">Texas Instruments | May '23 - Sept '23</p>
                <p className="text-gray-600">GUI development for USB Redriver devices; comprehensive hardware and software testing.</p>
              </div>
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Falcon - Company Management Tool</h3>
                <p className="text-gray-600 mb-4">Jun '23 - Mar '24</p>
                <p className="text-gray-600">Developed a project management website including people allocation, finance tracking, PO and invoice management.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-gray-900">MS-Embedded System Engineering</h3>
                </div>
                <p className="text-gray-600">Oct'24 - Now</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-gray-900">Bachelor of Engineering</h3>
                </div>
                <p className="text-gray-600">Jul '19 - May '23</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Courses Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800">AI and ML</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800">Microelectronics</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800">Micro-systems Product Design</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800">Power Electronics and Micro-controllers</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800">Modelling and System Identification</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800">Electrical Machines and Control Systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a href="mailto:example@gmail.com" 
                 className="flex items-center space-x-3 p-4 rounded-lg border hover:border-blue-600 hover:text-blue-600 transition-colors">
                <Mail className="w-6 h-6" />
                <span>vsowndaryalakshmi@gmail.com</span>
              </a>
              <a href="tel:+1234567890" 
                 className="flex items-center space-x-3 p-4 rounded-lg border hover:border-blue-600 hover:text-blue-600 transition-colors">
                <Phone className="w-6 h-6" />
                <span>+49 15213630352</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
