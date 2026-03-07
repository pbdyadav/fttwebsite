import Layout from "@/components/layout/layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "2017",
      title: "Company Founded",
      description: "Furtherance Technotree was established with a vision to provide quality refurbished technology."
    },
    {
      year: "2018",
      title: "Expanded Product Range",
      description: "Added desktop computers and IT accessories to our product lineup."
    },
    {
      year: "2019",
      title: "Launched IT Services",
      description: "Started offering comprehensive IT support services for businesses."
    },
    {
      year: "2022",
      title: "New Headquarters",
      description: "Moved to a larger facility to accommodate our growing team and inventory."
    },
    {
      year: "2024",
      title: "Launched New FTT Outlet",
      description: "Started offering wide range of laptops retail shop and IT support services for businesses."
    }
  ];

  const values = [
    {
      title: "Quality",
      description: "We never compromise on the quality of our products and services."
    },
    {
      title: "Integrity",
      description: "Honest business practices and transparency in all our dealings."
    },
    {
      title: "Sustainability",
      description: "Committed to environmentally responsible business practices."
    },
    {
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority in everything we do."
    }
  ];

   const team = [
    {/*{
      name: "Nikhil Siroliya",
      position: "CEO & Founder",
      image: "/images/Nikhil1.jpg"
    },
    {
      name: "Aparna Jain",
      position: "Commercial & Operations Director",
      image: "/images/Aparna1.jpeg"
    },
    {
      name: "Praveen Yadav",
      position: "Business and IT Growth Mentor",
      image: "/images/Praveen11.png"
    },
    {
      name: "Arbaz Khan",
      position: "Senior IT Engineer",
      image: "/images/Arbaz1.jpg"
    },
    {
      name: "Mohammad Zaid",
      position: "Social Media Content Creator",
      image: "/images/Zaid1.png"
    } */}
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-200 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">About Furtherance Technotree</h1>
          <p className="text-xl max-w-2xl mx-auto text-white-100">
            Your trusted partner in refurbished technology solutions since 2017
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-black-700">
                <p>
                  Furtherance Technotree was founded in 2017 with a simple mission: to provide high-quality refurbished technology products at affordable prices while reducing electronic waste and promoting sustainability.
                </p>
                <p>
                  What started as a small operation has grown into a trusted provider of refurbished laptops, desktops, and IT accessories, serving customers across the country. Our team of technical experts ensures that every product we offer meets rigorous quality standards.
                </p>
                <p>
                  Today, we continue to expand our product range and services, always keeping our commitment to quality, affordability, and sustainability at the core of everything we do.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Workspace with laptop" 
                className="rounded-lg shadow-xl" 
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-xl font-bold">10+ years</p>
                <p className="text-sm">of trusted service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12  text-black-700">
            To provide high-quality refurbished technology that meets the needs of our customers while promoting sustainability and reducing electronic waste.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 mx-auto bg-blue-100 text-blue-700 w-12 h-12 flex items-center justify-center rounded-full">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-black-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative z-10 flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                    <div className="p-6 bg-white rounded-lg shadow-md border border-slate-200">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-600 text-white text-lg font-bold w-16 h-16 rounded-full flex items-center justify-center mr-4">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold">{milestone.title}</h3>
                      </div>
                      <p className="text-black-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          {/*<h2 className="text-3xl font-bold mb-6 text-center">Our Leadership Team</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-slate-700">
            Meet the experienced professionals who lead our company with passion and expertise
          </p>*/}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
               {/* } <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-blue-600">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full"
                  />
                </div> */}
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-slate-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}