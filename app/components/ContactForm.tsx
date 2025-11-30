'use client'

import { useRef, useState } from "react"
import { submitContactForm } from "../submitContactForm"
import { Loader } from 'lucide-react'

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setStatus(null)

    const result = await submitContactForm(formData)

    if (result.error) {
      setStatus({ message: result.error, isError: true })
    } else {
      setStatus({ message: result.message || 'Message sent successfully!', isError: false })
      formRef.current?.reset()
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 bg-cream dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue dark:text-gold-light">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Have a question or ready to transform your space? We'd love to hear from you.
        </p>

        <div className="max-w-2xl mx-auto bg-white dark:bg-blue p-8 rounded-lg border border-blue-lightest dark:border-blue-light shadow-sm">
          <form ref={formRef} action={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-blue dark:bg-blue-darker dark:text-white rounded-lg focus:ring-2 focus:ring-blue dark:focus:ring-gold focus:border-blue dark:focus:border-gold outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-blue dark:bg-blue-darker dark:text-white rounded-lg focus:ring-2 focus:ring-blue dark:focus:ring-gold focus:border-blue dark:focus:border-gold outline-none transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="tel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="tel"
                name="tel"
                className="w-full px-4 py-2 border border-gray-300 dark:border-blue dark:bg-blue-darker dark:text-white rounded-lg focus:ring-2 focus:ring-blue dark:focus:ring-gold focus:border-blue dark:focus:border-gold outline-none transition-all"
                placeholder="+44 161 123 4567"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-blue dark:bg-blue-darker dark:text-white rounded-lg focus:ring-2 focus:ring-blue dark:focus:ring-gold focus:border-blue dark:focus:border-gold outline-none transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>

            {status && (
              <div
                className={`p-4 rounded-lg ${
                  status.isError ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue hover:bg-blue-light dark:bg-gold-dark dark:hover:bg-gold text-white dark:text-blue-darker py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
