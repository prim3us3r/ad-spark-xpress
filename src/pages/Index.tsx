
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Zap, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: "AI-Powered Design",
      description: "Automated design process menggunakan teknologi AI terkini"
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: "Express Delivery",
      description: "Siap dalam 24-48 jam untuk kempen yang mendesak"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Malaysian Focus",
      description: "Memahami pasaran dan budaya Malaysia dengan mendalam"
    }
  ];

  const packages = [
    {
      name: "Basic",
      price: "RM 99",
      description: "Perfect untuk startup dan bisnes kecil",
      features: [
        "3 Design Variations",
        "1 Revision Round",
        "Basic Copywriting",
        "Standard Resolution",
        "48-72 Hours Delivery"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "RM 199",
      description: "Terbaik untuk bisnes yang sedang berkembang",
      features: [
        "5 Design Variations",
        "2 Revision Rounds",
        "Professional Copywriting",
        "High Resolution + Source Files",
        "24-48 Hours Delivery",
        "A/B Testing Versions"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "RM 399",
      description: "Solution lengkap untuk enterprise",
      features: [
        "10 Design Variations",
        "Unlimited Revisions",
        "Premium Copywriting + Strategy",
        "All File Formats + Source",
        "24 Hours Express Delivery",
        "Video Ad Option",
        "Campaign Strategy Consultation"
      ],
      popular: false
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Pilih Package",
      description: "Pilih package yang sesuai dengan keperluan bisnes anda"
    },
    {
      step: "02",
      title: "Submit Requirements",
      description: "Isi borang dengan maklumat produk dan target audience"
    },
    {
      step: "03",
      title: "Terima Design",
      description: "AI kami akan create design berkualiti tinggi untuk kempen anda"
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
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            🚀 AI-Powered Facebook Ad Design Service
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
            Boost Sales dengan 
            <br />
            <span className="text-blue-600">Facebook Ads</span> yang Convert
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Dapatkan design Facebook ads yang professional dan optimized untuk Malaysian market. 
            AI-powered process yang cepat, murah, dan berkesan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/order">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg">
                Mula Sekarang <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              Lihat Portfolio
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Ads Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">24hr</div>
              <div className="text-gray-600">Average Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">3.2x</div>
              <div className="text-gray-600">ROI Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Kenapa Pilih XpressAdz?
            </h2>
            <p className="text-gray-600 text-lg">
              Platform pertama di Malaysia yang menggabungkan AI technology dengan creative expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Bagaimana Ia Berfungsi
            </h2>
            <p className="text-gray-600 text-lg">
              Process yang mudah dan pantas - dari order hingga siap dalam 3 langkah
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
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Pilih Package Yang Sesuai
            </h2>
            <p className="text-gray-600 text-lg">
              Harga yang berpatutan untuk semua saiz bisnes
            </p>
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready untuk Boost Sales Anda?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join 500+ Malaysian businesses yang dah improve ROI mereka dengan XpressAdz
          </p>
          <Link to="/order">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Tempah Design Sekarang <ArrowRight className="ml-2 h-5 w-5" />
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
          </div>
          <p className="text-gray-400">
            © 2025 XpressAdz. All rights reserved. Made with ❤️ for Malaysian businesses.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
