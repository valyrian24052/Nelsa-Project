import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    position: "CEO, Sharma Builders",
    content: "Nelsa Project Consultants transformed our vision into reality. Their attention to detail and project management expertise is unmatched. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Priya Patel",
    position: "Director, Metro Properties",
    content: "Working with Nelsa was a game-changer for our residential project. They delivered on time, within budget, and exceeded our quality expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c265?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Amit Kumar",
    position: "Project Head, Tech Corp",
    content: "The team's professionalism and technical expertise made our complex commercial project seamless. Nelsa is our go-to partner for all future developments.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "20+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Expert Team Members" }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl text-gray-900">
              Why Choose Nelsa Project Consultants?
            </h2>
            <p className="text-xl text-gray-600">
              With over two decades of experience in real estate project management, 
              we bring unparalleled expertise, innovation, and commitment to every project we undertake.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-gray-900 mb-1">Proven Track Record</h4>
                  <p className="text-gray-600">Successfully delivered 500+ projects across residential, commercial, and industrial sectors.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-gray-900 mb-1">Expert Team</h4>
                  <p className="text-gray-600">Licensed professionals with deep industry knowledge and cutting-edge project management methodologies.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-gray-900 mb-1">Quality Assurance</h4>
                  <p className="text-gray-600">Rigorous quality control processes ensuring every project meets the highest standards of excellence.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional team meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-4xl text-gray-900 mb-4">
            What Our Clients Say
          </h3>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
