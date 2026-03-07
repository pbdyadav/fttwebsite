import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Layout from "@/components/layout/layout";
import { CheckCircle, Monitor, Laptop, Server, Headphones } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <CheckCircle className="h-10 w-10 text-blue-500" />,
      title: "Quality Assured",
      description: "All our refurbished products undergo rigorous testing and quality checks"
    },
    {
      icon: <Server className="h-10 w-10 text-blue-500" />,
      title: "Extensive Inventory",
      description: "Choose from a wide range of refurbished laptops, desktops, and accessories"
    },
    {
      icon: <Headphones className="h-10 w-10 text-blue-500" />,
      title: "Expert Support",
      description: "Our technical team provides comprehensive support for all products"
    }
  ];

  const categories = [
    {
      title: "Laptops",
      icon: <Laptop className="h-12 w-12 mb-4 text-blue-600" />,
      description: "Refurbished laptops from top brands like Dell, HP, Lenovo, and Apple",
      link: "/products/laptops"
    },
    {
      title: "Desktops",
      icon: <Monitor className="h-12 w-12 mb-4 text-blue-600" />,
      description: "High-performance desktop computers for your office and home needs",
      link: "/products/desktops"
    },
    {
      title: "IT Services",
      icon: <Server className="h-12 w-12 mb-4 text-blue-600" />,
      description: "Comprehensive IT support and services for businesses",
      link: "/services"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Premium Refurbished Laptops/Desktops
              </h1>
              <p className="text-lg text-blue-100">
                Furtherance Technotree provides high-quality refurbished laptops, desktops, and IT accessories with exceptional service and support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link to="/products/laptops">Browse Laptops</Link>
                </Button>
                <Button asChild size="lg" className="bg-white" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/images/Home.gif" 
                alt="Modern laptop" 
                className="rounded-lg shadow-xl object-cover" 
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Furtherance Technotree</h2>
            <p className="text-black-600 max-w-2xl mx-auto">
              We deliver the highest quality refurbished technology products with comprehensive warranties and exceptional customer service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-black-50 p-6 rounded-lg border border-blue-200 shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-black-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Carousel */}
      <section className="py-16 bg-blue-60">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-black-800 font-bold max-w-2xl mx-auto">
              Explore our selection of premium refurbished laptops and desktops from top brands
            </p>
          </div>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((item) => (
                <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <img 
                          src={`https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80&w=350&h=350&fit=crop`} 
                          alt="Product" 
                          className="w-full h-48 object-cover rounded-md mb-4" 
                        />
                        <div className="text-center">
                          <h4 className="font-semibold">Dell Latitude {item}430</h4>
                          <p className="text-sm text-black-500">Intel Core i5, 16GB RAM, 512GB SSD</p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-center">
                        <Button asChild variant="outline" size="sm">
                          <Link to="/products/laptops/dell">View Details</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Categories</h2>
            <p className="text-black-600 max-w-2xl mx-auto">
              Explore our range of products and services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center">
                    {category.icon}
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-center">
                  <Button asChild>
                    <Link to={category.link}>Explore {category.title}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Tech Solution?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover our wide range of refurbished products or get in touch for personalized recommendations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link to="/products/laptops">Browse Products</Link>
            </Button>
            <Button asChild size="lg" className="bg-white" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}