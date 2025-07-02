import { Button } from "./ui/button"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">Let's Discuss Your Project</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to turn your vision into reality? Get in touch with our experts for a free consultation and discover
            how we can help you achieve your real estate goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-6">
                <h3 className="text-2xl text-gray-900">Get Free Consultation</h3>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm text-gray-700">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm text-gray-700">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-700">
                      Email Address *
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm text-gray-700">
                      Phone Number *
                    </label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm text-gray-700">
                      Project Type
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="hospitality">Hospitality</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm text-gray-700">
                      Project Budget
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1cr">Under ₹1 Crore</SelectItem>
                        <SelectItem value="1-5cr">₹1-5 Crores</SelectItem>
                        <SelectItem value="5-10cr">₹5-10 Crores</SelectItem>
                        <SelectItem value="10-25cr">₹10-25 Crores</SelectItem>
                        <SelectItem value="25-50cr">₹25-50 Crores</SelectItem>
                        <SelectItem value="above-50cr">Above ₹50 Crores</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-700">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    rows={5}
                  />
                </div>

                <Button size="lg" className="w-full">
                  Get Free Consultation
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col h-full space-y-8">
            <Card className="border-0 shadow-xl h-full flex flex-col">
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl text-gray-900 mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="text-gray-900">Phone</div>
                      <div className="text-gray-600">+91 98765 43210</div>
                      <div className="text-gray-600">+91 87654 32109</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="text-gray-900">Email</div>
                      <div className="text-gray-600">info@nelsaprojects.com</div>
                      <div className="text-gray-600">projects@nelsaprojects.com</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="text-gray-900">Address</div>
                      <div className="text-gray-600">
                        123 Business District,
                        <br />
                        Mumbai - 400001,
                        <br />
                        Maharashtra, India
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="text-gray-900">Business Hours</div>
                      <div className="text-gray-600">
                        Mon - Fri: 9:00 AM - 6:00 PM
                        <br />
                        Sat: 9:00 AM - 2:00 PM
                        <br />
                        Sun: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-primary text-white h-full flex flex-col">
              <CardContent className="p-6 text-center flex flex-col justify-center flex-grow">
                <h3 className="text-xl mb-px">Emergency Support</h3>
                <p className="text-primary-foreground/90 mb-0.5">Need urgent assistance with your project?</p>
                <Button variant="secondary" size="lg" className="w-full">
                  Call Emergency Line
                </Button>
                <p className="text-sm text-primary-foreground/70 mt-2">Available 24/7 for critical project issues</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
