import Layout from "@/components/layout/layout";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      position: "IT Manager",
      company: "GreenTech Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      stars: 5,
      testimonial: "We've been purchasing refurbished laptops from Furtherance Technotree for our entire team for the past three years. The quality is exceptional, and their customer service is outstanding. We've saved over 40% on our IT budget without compromising on performance."
    },
    {
      name: "Sarah Johnson",
      position: "Small Business Owner",
      company: "Creative Design Studio",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      stars: 5,
      testimonial: "As a startup, every dollar counts. Furtherance Technotree provided us with high-quality refurbished MacBooks that look and perform like new at a price we could afford. Their team was incredibly helpful in finding the right specs for our design work."
    },
    {
      name: "David Chen",
      position: "Network Administrator",
      company: "Regional Hospital",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      stars: 4,
      testimonial: "We needed to upgrade our IT infrastructure while staying within budget. The team at Furtherance Technotree provided excellent recommendations and delivered high-quality refurbished servers and workstations. Their IT support service has also been invaluable."
    },
    {
      name: "Emily Wilson",
      position: "School Principal",
      company: "Westside Elementary",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      stars: 5,
      testimonial: "Equipping our computer lab with limited funds seemed impossible until we found Furtherance Technotree. They provided 25 refurbished desktops that have been running flawlessly for two years. Their educational discount and ongoing support have been a blessing for our school."
    },
    {
      name: "Michael Rodriguez",
      position: "Freelance Developer",
      company: "Self-employed",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      stars: 4,
      testimonial: "I was skeptical about buying refurbished at first, but my Dell XPS from Furtherance Technotree has been perfect for my development work. Great performance, looks almost new, and saved me hundreds. Will definitely purchase from them again."
    },
    {
      name: "Jennifer Taylor",
      position: "Office Manager",
      company: "Accounting Partners LLC",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      stars: 5,
      testimonial: "Our accounting firm needed to upgrade 10 workstations simultaneously, which would have been cost-prohibitive with new computers. Furtherance Technotree provided perfectly matched refurbished systems with excellent specs. The ordering process was smooth and their follow-up support has been excellent."
    },
    {
      name: "Robert Kim",
      position: "Director of Operations",
      company: "Global Logistics Co.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      stars: 5,
      testimonial: "We've been working with Furtherance Technotree for our IT needs for over four years. Their refurbished laptops and desktops have been just as reliable as new equipment, and their IT support team is always responsive and knowledgeable. Highly recommend them for businesses of any size."
    },
    {
      name: "Lisa Patel",
      position: "Graphic Designer",
      company: "Creative Visuals",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      stars: 4,
      testimonial: "I needed a powerful MacBook Pro for my design work but couldn't afford a brand new one. The refurbished model I got from Furtherance Technotree has been fantastic. It handles all my Adobe software smoothly and looks pristine. Their customer service was also very helpful in finding the right specifications for my needs."
    }
  ];

  const renderStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => (
        <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Customer Testimonials</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            See what our customers have to say about their experience with Furtherance Technotree
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We take pride in delivering exceptional products and services. Here's what our customers have to say about their experience with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-slate-500">{testimonial.position}</p>
                      <p className="text-sm text-slate-500">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {renderStars(testimonial.stars)}
                  </div>
                  
                  <blockquote className="text-slate-600 italic">
                    "{testimonial.testimonial}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Watch what some of our customers have to say about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Video placeholders - In a real implementation, these would be actual embedded videos */}
            <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                    <path d="M8 5.14v14l11-7-11-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold">GreenTech Solutions</h3>
                <p className="text-sm text-slate-600">IT Infrastructure Upgrade Case Study</p>
              </div>
            </div>

            <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                    <path d="M8 5.14v14l11-7-11-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold">Westside Elementary</h3>
                <p className="text-sm text-slate-600">Educational Lab Transformation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted By</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We're proud to work with businesses and organizations across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {/* Client logo placeholders - In a real implementation, these would be actual client logos */}
            {[...Array(8)].map((_, index) => (
              <div key={index} className="h-24 bg-slate-100 rounded-md flex items-center justify-center">
                <span className="text-slate-400 font-medium">Client Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Success Story CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Become Our Next Success Story</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
            Join the growing number of satisfied customers who trust Furtherance Technotree for their technology needs.
          </p>
          <a href="/contact">
            <button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium">
              Contact Us Today
            </button>
          </a>
        </div>
      </section>
    </Layout>
  );
}