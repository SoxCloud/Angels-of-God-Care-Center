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
                  <p className="text-gray-600 text-sm">12302 Mkhunya Street<br />Palmridge Ext 1<br />Palmridge 1458</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sunshine-light rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-sunshine-dark" />
                </div>
                <div>
                  <h3 className="font-bold font-poppins text-gray-800">Call Us</h3>
                  <p className="text-gray-600 text-sm">+27 12 345 6789</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-grass-light rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-grass-dark" />
                </div>
                <div>
                  <h3 className="font-bold font-poppins text-gray-800">Email</h3>
                  <p className="text-gray-600 text-sm">info@angelsofgodcare.co.za</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5!2d28.1!3d-26.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE4JzAwLjAiUyAyOMKwMDYnMDAuMCJF!5e0!3m2!1sen!2sza!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
