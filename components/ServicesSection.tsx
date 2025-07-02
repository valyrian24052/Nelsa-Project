import { Card, CardHeader, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Building2, PenTool, Hammer, Settings } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Development Management",
    description: "Comprehensive oversight of your real estate development from initial planning to final delivery, ensuring optimal outcomes and maximum value.",
    features: ["Project Planning", "Risk Assessment", "Timeline Management", "Quality Control"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: PenTool,
    title: "Design Management",
    description: "Expert coordination of architectural and design processes, ensuring creative vision aligns with practical execution and regulatory requirements.",
    features: ["Design Coordination", "Regulatory Compliance", "Technical Reviews", "Design Optimization"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Hammer,
    title: "Construction Management",
    description: "End-to-end construction oversight with focus on quality, safety, and timely delivery while maintaining budget control and stakeholder communication.",
    features: ["Site Supervision", "Quality Assurance", "Safety Management", "Progress Monitoring"],
    image: "https://images.unsplash.com/photo-1590725175992-78bb6d7bd3dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Settings,
    title: "Other Services",
    description: "Additional specialized services including feasibility studies, due diligence, project advisory, and post-completion facility management support.",
    features: ["Feasibility Studies", "Due Diligence", "Project Advisory", "Facility Management"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">
            Comprehensive Project Management Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end project management solutions tailored to meet the unique demands 
            of modern real estate development and construction projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="aspect-[16/10] overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
