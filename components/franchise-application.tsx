"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle2, Building2, Wallet, Briefcase } from "lucide-react"

export function FranchiseApplication() {
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
    <section id="bayilik-basvuru" className="py-24 lg:py-32 relative bg-background overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">
            Bize Katılın
          </span>
          <h2 className="font-serif text-4xl lg:text-6xl text-foreground mb-6">
            Bayilik Başvuru Formu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Sara Coffee ailesinin bir parçası olmak ve karlı bir yatırım yolculuğuna başlamak için ilk adımı atın.
          </p>
        </div>

        <div className="glass-panel border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden group">
          {/* Subtle shimmer effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="firstName" className="text-base text-foreground/80 font-medium">Ad *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Adınız"
                  required
                  className="bg-background/40 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12 text-lg font-light transition-all placeholder:text-muted-foreground/50"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="lastName" className="text-base text-foreground/80 font-medium">Soyad *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Soyadınız"
                  required
                  className="bg-background/40 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12 text-lg font-light transition-all placeholder:text-muted-foreground/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="email" className="text-base text-foreground/80 font-medium">E-posta *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ornek@email.com"
                  required
                  className="bg-background/40 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12 text-lg font-light transition-all placeholder:text-muted-foreground/50"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="phone" className="text-base text-foreground/80 font-medium">Telefon *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="0555 555 55 55"
                  required
                  className="bg-background/40 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12 text-lg font-light transition-all placeholder:text-muted-foreground/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="city" className="text-base text-foreground/80 font-medium flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" /> Şehir *
                </Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="Bayilik açmak istediğiniz şehir"
                  required
                  className="bg-background/40 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12 text-lg font-light transition-all placeholder:text-muted-foreground/50"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="investment" className="text-base text-foreground/80 font-medium flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-primary" /> Yatırım Bütçesi
                </Label>
                <Input
                  id="investment"
                  name="investment"
                  placeholder="Tahmini yatırım bütçeniz"
                  className="bg-background/40 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12 text-lg font-light transition-all placeholder:text-muted-foreground/50"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="experience" className="text-base text-foreground/80 font-medium flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" /> İş Deneyimi
              </Label>
              <Textarea
                id="experience"
                name="experience"
                placeholder="Daha önce işletme deneyiminiz var mı? Lütfen kısaca açıklayın."
                rows={4}
                className="bg-background/40 border-white/10 focus:border-primary/50 focus:ring-primary/20 resize-none font-light transition-all placeholder:text-muted-foreground/50"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-base text-foreground/80 font-medium">Mesajınız</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Bize söylemek istedikleriniz..."
                rows={4}
                className="bg-background/40 border-white/10 focus:border-primary/50 focus:ring-primary/20 resize-none font-light transition-all placeholder:text-muted-foreground/50"
              />
            </div>

            {submitStatus === 'success' && (
              <div className="flex items-center gap-3 text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 p-4 rounded-xl animate-fade-in">
                <div className="h-8 w-8 rounded-full bg-emerald-900/50 flex items-center justify-center border border-emerald-800">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-sm font-medium">Başvurunuz başarıyla alındı. Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="text-red-400 bg-red-950/30 border border-red-900/50 p-4 rounded-xl animate-fade-in">
                <p className="text-sm font-medium">Bir hata oluştu. Lütfen bağlantınızı kontrol edip tekrar deneyin.</p>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full h-14 bg-gradient-to-r from-primary to-amber-600 hover:from-primary/90 hover:to-amber-600/90 text-white shadow-lg hover:shadow-primary/25 rounded-xl text-lg font-medium transition-all duration-300"
            >
              <Send className="mr-2 h-5 w-5" />
              {isSubmitting ? 'Gönderiliyor...' : 'Başvuruyu Tamamla'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

