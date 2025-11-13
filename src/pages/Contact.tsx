import { useState } from "react";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { PhoneIcon, Mail, MapPin, MessageSquare } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Your message has been sent successfully!");
    reset();
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Get in touch with our team for inquiries, quotes, or technical support
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-white/50">
              <CardContent className="pt-6">
                <div className="mx-auto bg-blue-100 text-blue-700 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                +91 92001 11400,<br />
                +91 97525 32581,<br />
                Laptop/Desktop Service: +91 73897 21991<br />
                Server/Networking/Apple: +91 98935 67595,
                </a>
                <p className="text-slate-500 mt-2">
                  Mon-Sat: 11:00 AM - 7:00 PM
                </p>
                <Button className="mt-4" variant="outline" size="sm" asChild>
                  <a href="tel:+1234567890">
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    Call Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/50">
              <CardContent className="pt-6">
                <div className="mx-auto bg-blue-100 text-blue-700 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:fttpvtltd@gmail.com" className="text-blue-600 hover:underline">
                fttpvtltd@gmail.com
                </a>
                <p className="text-slate-500 mt-2">
                  We usually respond within 24 hours
                </p>
                <Button className="mt-4" variant="outline" size="sm" asChild>
                  <a href="mailto:fttpvtltd@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/50">
              <CardContent className="pt-6">
                <div className="mx-auto bg-blue-100 text-blue-700 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-slate-500">
                  Chat with us directly on WhatsApp
                </p>
                <Button className="mt-4" variant="outline" size="sm" asChild>
                  <a href="https://wa.me/9200111400" target="_blank" rel="noreferrer">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="mb-6 text-slate-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required" })}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message?.toString()}</p>
                  )}
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Please enter a valid email"
                      }
                    })}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message?.toString()}</p>
                  )}
                </div>
                
                <div>
                  <Input
                    placeholder="Phone Number"
                    {...register("phone")}
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Subject"
                    {...register("subject", { required: "Subject is required" })}
                    className={errors.subject ? "border-red-500" : ""}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message?.toString()}</p>
                  )}
                </div>
                
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    {...register("message", { required: "Message is required" })}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message?.toString()}</p>
                  )}
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            {/* Map and Address */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Location</h2>
              <p className="mb-6 text-slate-600">
                Visit our office or get in touch through the contact form.
              </p>
              
              <div className="mb-6 h-80 overflow-hidden rounded-lg">
                {/* Embed Google Map */}
                <iframe
  title="Furtherance Technotree Office Location"
  className="w-full h-full border-0"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.044050621864!2d75.8680202752921!3d22.693011828818065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303daabf771f3%3A0x278512bde1e8a8f!2sFurtherance%20Technotree%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1691500000000!5m2!1sen!2sin"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Office Address</h4>
                    <p className="text-slate-600">
                    A -Block, Silver mall,<br />
                    UG-13, RNT Marg, South Tukoganj, Indore,<br />
                    Madhya Pradesh 452010
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <PhoneIcon className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                    +91 92001 11400,<br />
                    +91 97525 32581
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:fttpvtltd@gmail.com" className="text-blue-600 hover:underline">
                    fttpvtltd@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What is your warranty policy?",
                answer: "Your purchase is backed by our 1-month hassle-free replacement guarantee (excluding burn, physical, part replacement, or liquid damage) and 1 year of free service, because we care about your long-term satisfaction."
              },
              {
                question: "Do you offer bulk discounts?",
                answer: "Yes, we provide special pricing for bulk orders. Please contact our sales team for a customized quote."
              },
              {
                question: "How can I check the status of my order?",
                answer: "You can contact our customer service team via email or phone with your order number for status updates."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, bank transfers, and digital payment methods. Contact us for more details."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm border border-slate-200">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}