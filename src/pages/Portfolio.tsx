
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    title: "Serenity Bali Spa",
    category: "Spa & Wellness",
    image: "/lovable-uploads/fa9a2e20-863d-43e4-9436-d199bbbaf517.png",
    description: "Luxury spa treatment promotion targeting Malaysian travelers",
    tags: ["Travel", "Spa", "Luxury"]
  },
  {
    id: 2,
    title: "Premium Organic Coffee",
    category: "F&B",
    image: "/lovable-uploads/5c669111-8d51-4a8f-9527-4ff5d252dbeb.png",
    description: "Morning coffee campaign with discount offer",
    tags: ["Coffee", "Organic", "Discount"]
  },
  {
    id: 3,
    title: "Exama Minda Supplement",
    category: "Health & Wellness",
    image: "/lovable-uploads/96879888-241b-4d69-aa11-2f61e1abd03e.png",
    description: "Educational supplement for children's focus and learning",
    tags: ["Health", "Education", "Kids"]
  },
  {
    id: 4,
    title: "Ouson Aromatherapy Spray",
    category: "Wellness",
    image: "/lovable-uploads/ae93116c-9c63-441e-9893-9367828b9480.png",
    description: "Home spa aromatherapy spray for relaxation",
    tags: ["Aromatherapy", "Home", "Wellness"]
  },
  {
    id: 5,
    title: "Ouson Sleep Spray",
    category: "Wellness",
    image: "/lovable-uploads/cc8838f0-4783-463e-bde5-7d737994005e.png",
    description: "Natural sleep aid spray with lavender",
    tags: ["Sleep", "Natural", "Health"]
  },
  {
    id: 6,
    title: "MAA Gold Investment",
    category: "Finance",
    image: "/lovable-uploads/335277aa-6a0a-406f-83a7-e7e55e159175.png",
    description: "Professional investment consultant portrait",
    tags: ["Investment", "Gold", "Professional"]
  },
  {
    id: 7,
    title: "MAA Jewelry Collection",
    category: "Fashion",
    image: "/lovable-uploads/ff1b9bdc-6a32-49d2-8708-2049606db9ab.png",
    description: "Elegant jewelry showcase for special occasions",
    tags: ["Jewelry", "Fashion", "Elegant"]
  },
  {
    id: 8,
    title: "MAA Fine Gold Bar",
    category: "Finance",
    image: "/lovable-uploads/5eef8003-005a-47eb-8e5f-c4981a96d52d.png",
    description: "Premium gold investment product display",
    tags: ["Gold", "Investment", "Premium"]
  },
  {
    id: 9,
    title: "ZUS Coffee Shop",
    category: "F&B",
    image: "/lovable-uploads/2145db35-eeeb-45ef-93fe-63f4d0c28b63.png",
    description: "3D rendered coffee shop brand visualization",
    tags: ["Coffee", "3D", "Branding"]
  },
  {
    id: 10,
    title: "Healthy Meal Plan",
    category: "Health & Food",
    image: "/lovable-uploads/3bfa7f07-879b-4ae2-aace-e922af8d9c17.png",
    description: "Nutritious meal planning with balanced components",
    tags: ["Health", "Nutrition", "Food"]
  }
];

const categories = ["All", "Spa & Wellness", "F&B", "Health & Wellness", "Wellness", "Finance", "Fashion", "Health & Food"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">X</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  XpressAdz
                </span>
              </div>
            </Link>
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Portfolio Kami
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Lihat hasil kerja terbaik kami dalam menghasilkan Facebook ads yang menarik dan berkesan untuk pelbagai industri
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary" className="px-4 py-2">
              500+ Ads Created
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              200+ Happy Clients
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              98% Satisfaction Rate
            </Badge>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center text-gray-600 mr-4">
            <Filter className="h-4 w-4 mr-2" />
            <span className="font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden ${
                index % 3 === 0 ? 'animate-fade-in' : 
                index % 3 === 1 ? 'animate-fade-in animation-delay-100' : 
                'animate-fade-in animation-delay-200'
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                {hoveredItem === item.id && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                      <ExternalLink className="h-4 w-4 text-gray-700" />
                    </div>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Suka dengan kerja kami?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Mari buat Facebook ads yang amazing untuk business anda juga!
          </p>
          <Link to="/order">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg font-semibold">
              Tempah Sekarang
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
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

export default Portfolio;
