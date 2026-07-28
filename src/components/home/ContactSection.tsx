import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 text-center mb-3">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-grass rounded-full mx-auto mb-4" />
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We'd love to hear from you! Visit us, give us a call, or send us a message.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-light rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-sky-dark" />
                </div>
                <div>
                  <h3 className="font-bold font-poppins text-gray-800">Our Address</h3>
                  <p className="text-gray-600 text-sm">12296 Mkunya Street<br />Palmridge Ext 7<br />Palmridge 1458</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sunshine-light rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-sunshine-dark" />
                </div>
                <div>
                  <h3 className="font-bold font-poppins text-gray-800">Call Us</h3>
                  <p className="text-gray-600 text-sm">+27 83 846 0529</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-grass-light rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-grass-dark" />
                </div>
                <div>
                  <h3 className="font-bold font-poppins text-gray-800">Email</h3>
                  <p className="text-gray-600 text-sm">shabalalalungile47@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-bold font-poppins text-gray-800">Operating Hours</h3>
                  <p className="text-gray-600 text-sm">Monday – Friday: 06:30 – 16:00</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[300px] lg:h-full min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.0981496204186!2d28.15418467421183!3d-26.403258672108244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951d08671d5e85%3A0x8daa0d4652035a63!2s12296%20Mkunya%20St%2C%20Palm%20Ridge%2C%20Katlehong%2C%201488%2C%20South%20Africa!5e1!3m2!1sen!2snl!4v1785223421025!5m2!1sen!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="School Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
