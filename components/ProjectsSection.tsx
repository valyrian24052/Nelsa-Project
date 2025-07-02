import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Calendar, MapPin, Users } from "lucide-react"

const completedProjects = [
  {
    title: "Luxury Residential Complex",
    location: "Downtown Mumbai",
    type: "Residential",
    value: "₹45 Crores",
    duration: "18 Months",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Premium 120-unit residential complex with modern amenities and sustainable design features.",
  },
  {
    title: "Corporate Office Tower",
    location: "Bangalore Tech Park",
    type: "Commercial",
    value: "₹78 Crores",
    duration: "24 Months",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "State-of-the-art 25-story office building with LEED Gold certification and smart building features.",
  },
  {
    title: "Shopping Mall Complex",
    location: "Pune Central",
    type: "Retail",
    value: "₹95 Crores",
    duration: "30 Months",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Multi-level retail destination with 200+ stores, entertainment zones, and premium dining options.",
  },
  {
    title: "Industrial Warehouse",
    location: "Chennai Port Area",
    type: "Industrial",
    value: "₹32 Crores",
    duration: "12 Months",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Modern logistics facility with automated systems and eco-friendly design for sustainable operations.",
  },
]

const ongoingProjects = [
  {
    title: "Luxury Hotel & Resort",
    location: "Goa Coastline",
    type: "Hospitality",
    value: "₹120 Crores",
    progress: "65%",
    expectedCompletion: "Dec 2025",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "A luxurious five-star beachfront resort featuring 200 elegantly appointed rooms, world-class spa facilities for ultimate relaxation, and state-of-the-art conference centers.",
  },
  {
    title: "Smart City Housing",
    location: "Hyderabad Outskirts",
    type: "Residential",
    value: "₹85 Crores",
    progress: "40%",
    expectedCompletion: "Jun 2026",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "An integrated township with 500 modern residential units, featuring advanced smart home technology, eco-friendly green infrastructure, landscaped open spaces, and sustainable amenities for a connected lifestyle.",
  },
  {
    title: "Medical Complex",
    location: "Delhi NCR",
    type: "Healthcare",
    value: "₹65 Crores",
    progress: "75%",
    expectedCompletion: "Aug 2025",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "A state-of-the-art multi-specialty hospital equipped with cutting-edge medical technology, specialized treatment facilities, and a patient-centric design focused on comfort, safety, and holistic healing.",
  },
]

function ProjectCard({ project, isOngoing = false }: { project: any; isOngoing?: boolean }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
      <div className="aspect-[16/10] overflow-hidden">
        <ImageWithFallback
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl text-gray-900 group-hover:text-primary transition-colors">{project.title}</h3>
          <Badge variant="secondary">{project.type}</Badge>
        </div>

        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>

        <div className="space-y-2 mt-auto">
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <MapPin className="h-4 w-4" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <Users className="h-4 w-4" />
            <span>Project Value: {project.value}</span>
          </div>
          {isOngoing ? (
            <>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <Calendar className="h-4 w-4" />
                <span>Expected: {project.expectedCompletion}</span>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm text-primary">{project.progress}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: project.progress }}
                  ></div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <Calendar className="h-4 w-4" />
              <span>Duration: {project.duration}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">Our Project Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of successfully completed projects and get insights into our ongoing developments
            across various sectors.
          </p>
        </div>

        <Tabs defaultValue="completed" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="completed">Completed Projects</TabsTrigger>
            <TabsTrigger value="ongoing">Ongoing Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="completed">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {completedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ongoing">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingProjects.map((project, index) => (
                <ProjectCard key={index} project={project} isOngoing />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
