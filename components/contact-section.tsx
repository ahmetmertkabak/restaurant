'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, Instagram, Twitter, CheckCircle2 } from 'lucide-react'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/movgndrp', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="iletisim" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-2xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            İletişime Geçin
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
            Sorularınız için bizimle iletişime geçebilirsiniz
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors">
            <Phone className="w-5 h-5" />
            <a href="tel:+905316535175" className="text-xl font-semibold tracking-wide">
              +90 531 653 51 75
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-3">Tüm sorularınız ve rezervasyon için</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Sara Restaurant & Coffee",
              email: "saracoffeerestaurant@gmail.com",
              instagram: "https://www.instagram.com/sara_restaurantcoffee2024?igsh=MWtscm4xOWVwcGV0bw%3D%3D&utm_source=qr",
              twitter: "https://x.com/sararestau83522?s=21",
            },
            {
              title: "Sara Coffee",
              email: "saracoffee2024@gmail.com",
              instagram: "https://www.instagram.com/sara_coffee2024?igsh=cDc1b254bXY4ZTR5&utm_source=qr",
              twitter: "https://x.com/saracoffee2024?s=21",
            },
            {
              title: "Sara Restaurant",
              email: "sararestaurantt@gmail.com",
              instagram: "https://www.instagram.com/sara_restaurant2024?igsh=MWs4OTU4enR6OXAyZw%3D%3D&utm_source=qr",
              twitter: "https://x.com/sararestaurantt?s=21",
            },
          ].map((account, index) => (
            <Card key={account.title} className="border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground text-lg">{account.title}</h3>
                  <p className="text-sm text-muted-foreground">{account.email}</p>
                </div>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <a
                    href={account.instagram}
                    target="_blank"
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-4 h-4 text-primary" />
                  </a>
                  <a
                    href={account.twitter}
                    target="_blank"
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-4 h-4 text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border bg-card max-w-2xl mx-auto">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Adınız Soyadınız"
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="E-posta Adresiniz"
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Telefon Numaranız"
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Mesajınız"
                  required
                  className="min-h-32 bg-background"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  <p className="text-sm font-medium">Mesajınız başarıyla gönderildi!</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-600 bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
                  <p className="text-sm font-medium">Bir hata oluştu. Lütfen tekrar deneyin.</p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
