import { Link } from "react-router-dom";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Server, 
  Shield, 
  HardDrive, 
  Network, 
  Laptop, 
  MonitorSmartphone, 
  Cloud, 
  BarChart 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "IT Infrastructure Setup",
      description: "Complete setup and configuration of your IT infrastructure including networks, servers, and workstations.",
      icon: <Server className="h-10 w-10 text-blue-600" />,
      details: [
        "Network design and implementation",
        "Server installation and configuration",
        "Workstation setup and deployment",
        "Printer and peripheral integration"
      ]
    },
    {
      title: "IT Security Solutions",
      description: "Comprehensive security solutions to protect your business data and IT assets from threats.",
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      details: [
        "Firewall implementation and management",
        "Anti-virus and anti-malware solutions",
        "Security audits and vulnerability assessments",
        "Employee security training"
      ]
    },
    {
      title: "Data Backup & Recovery",
      description: "Reliable backup solutions and recovery services to safeguard your critical business data.",
      icon: <HardDrive className="h-10 w-10 text-blue-600" />,
      details: [
        "Automated backup systems",
        "Cloud backup solutions",
        "Disaster recovery planning",
        "Data restoration services"
      ]
    },
    {
      title: "Networking Solutions",
      description: "Design and implementation of secure, reliable, and high-performance network infrastructure.",
      icon: <Network className="h-10 w-10 text-blue-600" />,
      details: [
        "LAN/WAN configuration",
        "Wi-Fi network setup and optimization",
        "VPN implementation",
        "Network monitoring and maintenance"
      ]
    },
    {
      title: "Hardware Support",
      description: "Expert support for all your hardware needs, from troubleshooting to upgrades.",
      icon: <Laptop className="h-10 w-10 text-blue-600" />,
      details: [
        "Hardware diagnostics and repair",
        "Component upgrades",
        "Performance optimization",
        "Hardware lifecycle management"
      ]
    },
    {
      title: "Managed IT Services",
      description: "Proactive management and support of your entire IT environment for a fixed monthly fee.",
      icon: <MonitorSmartphone className="h-10 w-10 text-blue-600" />,
      details: [
        "24/7 system monitoring",
        "Regular maintenance and updates",
        "Help desk and technical support",
        "IT strategy consulting"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "Migration, management, and optimization of cloud-based services and applications.",
      icon: <Cloud className="h-10 w-10 text-blue-600" />,
      details: [
        "Cloud migration services",
        "SaaS implementation and management",
        "Cloud infrastructure optimization",
        "Hybrid cloud solutions"
      ]
    },
    {
      title: "Business IT Consulting",
      description: "Strategic IT consulting to align technology with your business goals and improve operations.",
      icon: <BarChart className="h-10 w-10 text-blue-600" />,
      details: [
        "IT strategy development",
        "Technology roadmap planning",
        "Digital transformation guidance",
        "IT budget planning"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">IT Services</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Comprehensive IT solutions to support your business technology needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our IT Services</h2>
            <p className="text-xl text-black-600 max-w-3xl mx-auto">
              From infrastructure setup to ongoing support, we provide the IT services you need to keep your business running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/contact">
                    <Button variant="outline">Request Quote</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
            <p className="text-black-600 max-w-2xl mx-auto">
              We follow a structured approach to deliver IT services that meet your specific requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We start by understanding your business and IT needs through a detailed consultation.",
                icon: "🤝"
              },
              {
                step: "2",
                title: "Assessment",
                description: "Our experts assess your current IT infrastructure and identify areas for improvement.",
                icon: "🔍"
              },
              {
                step: "3",
                title: "Implementation",
                description: "We implement the agreed-upon solutions with minimal disruption to your operations.",
                icon: "⚙️"
              },
              {
                step: "4",
                title: "Ongoing Support",
                description: "We provide continuous support and monitoring to ensure optimal performance.",
                icon: "🛡️"
              }
            ].map((step, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm border border-slate-200 relative">
                <div className="absolute top-4 right-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-black-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Packages</h2>
            <p className="text-black-600 max-w-2xl mx-auto">
              Choose the IT service package that best suits your business needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                description: "Essential IT support for small businesses",
                features: [
                  "8/5 Help Desk Support",
                  "Remote Troubleshooting",
                  "Monthly System Updates",
                  "Basic Security Monitoring"
                ]
              },
              {
                name: "Professional",
                description: "Comprehensive IT services for growing businesses",
                features: [
                  "12/6 Help Desk Support",
                  "Remote & Onsite Support",
                  "Weekly System Maintenance",
                  "Enhanced Security Suite",
                  "Quarterly IT Reviews"
                ],
                highlighted: true
              },
              {
                name: "Enterprise",
                description: "Full-scale IT management for larger organizations",
                features: [
                  "24/7 Priority Support",
                  "Unlimited Onsite Support",
                  "Proactive System Monitoring",
                  "Advanced Security Solutions",
                  "Dedicated IT Manager",
                  "Monthly Strategy Sessions"
                ]
              }
            ].map((package_, index) => (
              <Card key={index} className={`relative ${package_.highlighted ? "border-blue-600 shadow-lg" : ""}`}>
                {package_.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className={`text-center ${package_.highlighted ? "bg-blue-50" : ""}`}>
                  <CardTitle className="text-2xl">{package_.name}</CardTitle>
                  <p className="text-black-600">{package_.description}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {package_.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Link to="/contact">
                    <Button 
                      variant={package_.highlighted ? "default" : "outline"}
                      className="w-full"
                    >
                      Request Quote
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your IT Infrastructure?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
            Get in touch with our team today for a consultation and personalized IT service quote.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Contact Our IT Team
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}