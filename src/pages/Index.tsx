import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Zap, Users, Clock, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: "Express Delivery (24–48 jam)",
      description: "Siap cepat, hidupkan iklan anda segera"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: "AI + Creative Experts",
      description: "Teknologi generatif & kepakaran lokal untuk hasil mantap"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      title: "3.2x ROI Improvement",
      description: "Maksimakan pulangan setiap ringgit iklan"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Fokus Malaysia",
      description: "Copy & visual yang memang mengena hati rakyat kita"
    }
  ];

  const packages = [
    {
      name: "Basic",
      price: "RM 99",
      description: "Perfect untuk startup yang nak test market cepat",
      features: [
        "3 Variasi Design",
        "1 Revision Round",
        "Basic Copywriting",
        "Standard Resolution",
        "48-72 jam Delivery"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "RM 199",
      description: "ROI padu, risiko rendah - Most Popular!",
      features: [
        "5 Variasi Design",
        "2 Revision Rounds",
        "Professional Copywriting",
        "High Resolution + Source Files",
        "24-48 jam Delivery",
        "A/B Testing Versions"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "RM 399",
      description: "Full-service ads solution untuk enterprise",
      features: [
        "10 Variasi Design",
        "Unlimited Revisions",
        "Premium Copywriting + Strategy",
        "All File Formats + Source",
        "24 jam Express Delivery",
        "Video Ad Option",
        "Campaign Strategy Consultation"
      ],
      popular: false
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Pilih Pakej",
      description: "Basic / Pro / Premium - pilih yang sesuai dengan budget anda"
    },
    {
      step: "02",
      title: "Hantar Brief",
      description: "Ceritakan produk & sasaran anda dengan mudah"
    },
    {
      step: "03",
      title: "Terima Design",
      description: "Design power dari AI + sentuhan pro siap untuk live"
    }
  ];

  const testimonials = [
    {
      name: "Siti @ HijabChic",
      feedback: "Budget iklan dulu bocor, sekarang CTR meletup & sales jejar!"
    },
    {
      name: "Rizal @ FitCrew",
      feedback: "24 jam siap, 48 jam live, result? RM3 untuk setiap RM1!"
    },
    {
      name: "Nora @ HomeDecoMY",
      feedback: "Copywriting Malaysia gila, engagement terus naik!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                XpressAdz
              </span>
            </div>
            <Link to="/order">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                Tempah Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
            🚀 Selamat Datang ke XpressAdz
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
            Stop Buang Duit,
            <br />
            <span className="text-red-600">Mulakan Iklan Yang Betul-Betul Melekat!</span>
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Bayangkan duit iklan anda menguap begitu saja sebab design tak menarik. Klien ignore, pesaing melangkah jauh—rasanya sakit kan?
          </p>
          <p className="text-2xl font-bold text-blue-600 mb-4">
            Tukar Buang Duit Jadi Untung Berganda!
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Tempah AI-Powered Facebook Ad Design yang <strong>terbukti naikkan ROI</strong> untuk market Malaysia.
          </p>
          
          {/* Social Proof */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-green-700">
              <Users className="h-6 w-6" />
              <span className="text-lg font-semibold">
                500++ usahawan telah dibantu oleh servis kami
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/order">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg">
                Mula Sekarang <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                Lihat Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why XpressAdz */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Kenapa XpressAdz Jadi Pilihan #1?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Testimonial Quote */}
          <div className="mt-16 text-center bg-blue-50 p-8 rounded-lg">
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "Leverage design XpressAdz, CTR naik mendadak, sales follow!"
            </blockquote>
            <cite className="font-bold text-blue-600">– Aiman, Founder @ GadgetGo</cite>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Proses Ringkas: 3 Langkah Je!
            </h2>
            <p className="text-gray-600 text-lg">
              Mudah, pantas & tanpa stress.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-block w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Pakej & Harga (RM)
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 my-4">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/order" className="block">
                    <Button 
                      className={`w-full mt-6 ${pkg.popular 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                      }`}
                    >
                      Pilih {pkg.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Testimoni Real: Mereka Dah Ubah Rugi Jadi Untung
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.feedback}"
                  </blockquote>
                  <cite className="font-bold text-blue-600">– {testimonial.name}</cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Siapa Sesuai?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Startup</h3>
              <p className="text-gray-600">Nak test market cepat</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">SME</h3>
              <p className="text-gray-600">Cari growth optimum</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <p className="text-gray-600">Perlukan full-service ads solution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ⚠️ Slot Terhad – Bertindak Sekarang!
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Delay = rugi lagi. Tempah segera & lihat keuntungan anda naik.
          </p>
          <Link to="/order">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Tempah Sekarang – Ubah Duit Melayang Jadi Sales <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">X</span>
            </div>
            <span className="text-xl font-bold">XpressAdz</span>
            <span className="text-gray-400">– Pakar Iklan FB Anda 🚀</span>
          </div>
          <p className="text-gray-400">
            © 2025 XpressAdz. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
