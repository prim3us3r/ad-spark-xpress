
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const OrderForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("pro");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    businessName: "",
    productInfo: "",
    targetAudience: "",
    designStyle: "",
    additionalNotes: "",
    urgentDelivery: false
  });

  const packages = {
    basic: { name: "Basic", price: "RM 99", features: ["3 Design Variations", "1 Revision Round", "48-72 Hours"] },
    pro: { name: "Pro", price: "RM 199", features: ["5 Design Variations", "2 Revision Rounds", "24-48 Hours"] },
    premium: { name: "Premium", price: "RM 399", features: ["10 Design Variations", "Unlimited Revisions", "24 Hours"] }
  };

  const designStyles = [
    "Modern & Minimalist",
    "Bold & Colorful", 
    "Corporate & Professional",
    "Fun & Playful",
    "Luxury & Premium",
    "Local Malaysian Style"
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate webhook call to n8n
    const webhookData = {
      ...formData,
      package: selectedPackage,
      packageDetails: packages[selectedPackage as keyof typeof packages],
      timestamp: new Date().toISOString(),
      orderSource: "XpressAdz Web"
    };

    console.log("Sending to n8n webhook:", webhookData);

    try {
      // Replace with your actual n8n webhook URL
      const webhookUrl = "https://your-n8n-instance.com/webhook/xpressadz-order";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookData),
      });

      if (response.ok) {
        toast({
          title: "Order Submitted Successfully! 🎉",
          description: "Kami akan hubungi anda dalam masa 24 jam. Terima kasih!",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          businessName: "",
          productInfo: "",
          targetAudience: "",
          designStyle: "",
          additionalNotes: "",
          urgentDelivery: false
        });
      } else {
        throw new Error("Webhook call failed");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      toast({
        title: "Order Received!",
        description: "Maklumat anda telah direkodkan. Kami akan hubungi anda segera.",
        variant: "default",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">X</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  XpressAdz
                </span>
              </div>
            </Link>
            <div className="text-sm text-gray-600">
              Step 2 of 2: Order Details
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Borang Tempahan Design
          </h1>
          <p className="text-gray-600 text-lg">
            Isi maklumat di bawah untuk dapatkan Facebook ads design yang perfect untuk bisnes anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Maklumat Order</CardTitle>
                <CardDescription>
                  Sila isi semua maklumat dengan lengkap untuk hasil yang terbaik
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Package Selection */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Pilih Package</Label>
                    <RadioGroup value={selectedPackage} onValueChange={setSelectedPackage}>
                      {Object.entries(packages).map(([key, pkg]) => (
                        <div key={key} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value={key} id={key} />
                          <Label htmlFor={key} className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-semibold">{pkg.name} - {pkg.price}</div>
                                <div className="text-sm text-gray-600">{pkg.features.join(" • ")}</div>
                              </div>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Penuh *</Label>
                      <Input 
                        id="name" 
                        required 
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Ahmad bin Ali" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="ahmad@example.com" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                      <Input 
                        id="whatsapp" 
                        required 
                        value={formData.whatsapp}
                        onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                        placeholder="01X-XXX XXXX" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Nama Bisnes *</Label>
                      <Input 
                        id="businessName" 
                        required 
                        value={formData.businessName}
                        onChange={(e) => handleInputChange("businessName", e.target.value)}
                        placeholder="Ahmad Online Store" 
                      />
                    </div>
                  </div>

                  {/* Product Information */}
                  <div className="space-y-2">
                    <Label htmlFor="productInfo">Maklumat Produk/Servis *</Label>
                    <Textarea 
                      id="productInfo" 
                      required 
                      value={formData.productInfo}
                      onChange={(e) => handleInputChange("productInfo", e.target.value)}
                      placeholder="Describe your product/service, features, benefits, pricing, etc."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="targetAudience">Target Audience *</Label>
                    <Textarea 
                      id="targetAudience" 
                      required 
                      value={formData.targetAudience}
                      onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                      placeholder="Age range, gender, interests, location, etc. Example: Women 25-45, interested in skincare, living in KL/Selangor"
                      rows={3}
                    />
                  </div>

                  {/* Design Preferences */}
                  <div className="space-y-2">
                    <Label htmlFor="designStyle">Design Style Preference</Label>
                    <Select value={formData.designStyle} onValueChange={(value) => handleInputChange("designStyle", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih style design yang anda suka" />
                      </SelectTrigger>
                      <SelectContent>
                        {designStyles.map((style, index) => (
                          <SelectItem key={index} value={style}>{style}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label>Upload Logo/Images (Optional)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        Drag & drop files here or <span className="text-blue-600 cursor-pointer">browse</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Supported: JPG, PNG, PDF (Max 10MB each)
                      </p>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes">Nota Tambahan</Label>
                    <Textarea 
                      id="additionalNotes" 
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                      placeholder="Any specific requirements, color preferences, competitor references, etc."
                      rows={3}
                    />
                  </div>

                  {/* Urgent Delivery */}
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="urgentDelivery" 
                      checked={formData.urgentDelivery}
                      onCheckedChange={(checked) => handleInputChange("urgentDelivery", checked)}
                    />
                    <Label htmlFor="urgentDelivery" className="text-sm">
                      Rush delivery dalam 12-24 jam (+RM 100)
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Order"} 
                    <CheckCircle className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="font-semibold text-lg">{packages[selectedPackage as keyof typeof packages].name} Package</div>
                  <div className="text-2xl font-bold text-blue-600">{packages[selectedPackage as keyof typeof packages].price}</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    {packages[selectedPackage as keyof typeof packages].features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {formData.urgentDelivery && (
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="text-sm font-medium">Rush Delivery</div>
                    <div className="text-lg font-semibold text-orange-600">+RM 100</div>
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-blue-600">
                      RM {parseInt(packages[selectedPackage as keyof typeof packages].price.replace("RM ", "")) + (formData.urgentDelivery ? 100 : 0)}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-gray-500 text-center">
                  Bayaran akan dibuat selepas anda approve design concept
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
