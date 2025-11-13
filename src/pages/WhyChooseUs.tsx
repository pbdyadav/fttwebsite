import Layout from "@/components/layout/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, IndianRupee, Truck, Recycle, ShieldCheck, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Quality Assurance",
      description: "Every product undergoes rigorous testing and quality checks",
      icon: <CheckCircle className="h-10 w-10 text-green-600" />,
      details: "Our refurbished products go through a comprehensive 20-point inspection process to ensure they meet our high-quality standards. All components are tested for functionality, and any defective parts are replaced with genuine components."
    },
    {
      title: "Warranty Coverage",
      description: "All products come with a minimum 1-month warranty",
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      details: "Your purchase is backed by our 1-month hassle-free replacement guarantee (excluding burn, physical, part replacement, or liquid damage) and 1 year of free service, because we care about your long-term satisfaction."
    },
    {
      title: "Eco-Friendly",
      description: "Reducing e-waste through responsible refurbishment",
      icon: <Recycle className="h-10 w-10 text-green-600" />,
      details: "By choosing refurbished technology, you're helping to reduce electronic waste and conserve valuable resources. Our refurbishment process follows environmentally responsible practices and extends the useful life of electronic devices."
    },
    {
      title: "Cost Savings",
      description: "Premium technology at a fraction of the new price",
      icon: <IndianRupee className="h-10 w-10 text-yellow-600" />,
      details: "Our refurbished products offer the same functionality and performance as new items but at significantly lower prices. Businesses and individuals can save 30-50% compared to buying new equipment."
    },
    {
      title: "Fast Delivery",
      description: "Prompt shipping and flexible delivery options",
      icon: <Truck className="h-10 w-10 text-red-600" />,
      details: "We maintain a large inventory of ready-to-ship products and offer various shipping options to meet your timeline. Most orders are processed within 24 hours of confirmation."
    },
    {
      title: "Expert Support",
      description: "Technical assistance before and after your purchase",
      icon: <Headphones className="h-10 w-10 text-violet-600" />,
      details: "Our team of technical experts is available to help with product selection, answer questions, and provide after-sales support. We're committed to ensuring your complete satisfaction with our products and services."
    }
  ];

  const faqs = [
    {
      question: "What does 'refurbished' really mean?",
      answer: "Refurbished products are pre-owned devices that have been professionally restored to working condition. At Furtherance Technotree, our refurbishment process includes thorough cleaning, component testing, repairs or replacements of defective parts, software reinstallation, and comprehensive quality assurance testing. The result is a fully functional product that meets our rigorous performance standards."
    },
    {
      question: "Are refurbished products reliable?",
      answer: "Yes, when properly refurbished by professionals like our team at Furtherance Technotree, these products are highly reliable. We only release products for sale after they've passed our comprehensive testing process. Additionally, all our refurbished products come with a warranty, demonstrating our confidence in their reliability."
    },
    {
      question: "What's the difference between refurbished and used products?",
      answer: "Used products are typically sold as-is with no repairs, testing, or warranty. Refurbished products, on the other hand, undergo a thorough restoration process by qualified technicians. They are cleaned, tested, repaired, and restored to proper working condition. At Furtherance Technotree, we also provide a warranty with all refurbished products, unlike most used products."
    },
    {
      question: "Do refurbished products come with all accessories?",
      answer: "Most of our refurbished products come with essential accessories such as power adapters. The specific accessories included are listed in each product description. If you need additional accessories, we also sell those separately."
    },
    {
      question: "Can businesses purchase in bulk?",
      answer: "Absolutely! We work with many businesses to provide refurbished technology in bulk quantities. We offer special pricing for bulk orders and can also work with you to source specific models or configurations that meet your business requirements."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Why Choose Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Discover the Furtherance Technotree advantage for all your refurbished technology needs
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Furtherance Advantage</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              We go above and beyond to provide exceptional products and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-black-600 mb-4">{benefit.description}</p>
                  <p className="text-sm text-black-500">{benefit.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Refurbishment Process</h2>
              <p className="text-black-600 mb-6">
                Every product we sell goes through our comprehensive refurbishment process to ensure the highest quality and reliability.
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Initial Assessment",
                    description: "Each device undergoes thorough inspection to assess its condition and identify any issues."
                  },
                  {
                    step: "2",
                    title: "Cleaning & Cosmetic Work",
                    description: "Devices are professionally cleaned and cosmetic issues are addressed."
                  },
                  {
                    step: "3",
                    title: "Component Testing & Replacement",
                    description: "All components are tested and any defective parts are replaced with quality components."
                  },
                  {
                    step: "4",
                    title: "Software Installation",
                    description: "Operating systems and essential software are cleanly installed and updated."
                  },
                  {
                    step: "5",
                    title: "Quality Assurance",
                    description: "Final testing to ensure the device meets our performance and reliability standards."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-blue-800">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab20fa78fb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Quality inspection process" 
                className="rounded-lg shadow-xl" 
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-xl font-bold">100%</p>
                <p className="text-sm">Quality Tested</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-black-800 max-w-2xl mx-auto">
              Get answers to common questions about refurbished technology
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from some of our satisfied customers.
          </p>
          
          <div className="bg-white p-8 max-w-2xl mx-auto rounded-lg shadow-sm border border-slate-200 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                JD
              </div>
              <div className="text-left">
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-slate-500 text-sm">Small Business Owner</p>
              </div>
            </div>
            <p className="text-slate-600 italic">
              "We equipped our entire office with refurbished laptops and desktops from Furtherance Technotree. Not only did we save significantly on our IT budget, but the equipment has been extremely reliable. Their customer service is also exceptional!"
            </p>
          </div>
          
          <Link to="/testimonials">
            <Button>View All Testimonials</Button>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
            Browse our selection of quality refurbished technology products or get in touch with our team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/products/laptops">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Browse Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}