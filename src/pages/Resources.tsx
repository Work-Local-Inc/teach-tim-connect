import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { 
  Download, 
  FileText, 
  Video,
  BookOpen,
  CheckCircle,
  Star,
  Users,
  Clock,
  Target,
  Lightbulb,
  Award,
  Play
} from "lucide-react";

const Resources = () => {
  const freeResources = [
    {
      title: "Complete Guide to Adult Learning Principles",
      description: "A comprehensive 25-page guide covering the fundamentals of how adults learn best, with practical applications for trainers and educators.",
      type: "PDF Guide",
      pages: "25 pages",
      downloads: "2,847",
      icon: BookOpen,
      featured: true
    },
    {
      title: "Corporate Training Needs Assessment Template",
      description: "Ready-to-use template for identifying skill gaps and designing effective training programs for your organization.",
      type: "Excel Template",
      pages: "5 worksheets",
      downloads: "1,923",
      icon: FileText
    },
    {
      title: "Communication Skills Self-Assessment Checklist",
      description: "Evaluate your current communication abilities and identify areas for improvement with this comprehensive checklist.",
      type: "PDF Checklist",
      pages: "8 pages",
      downloads: "3,156",
      icon: CheckCircle
    },
    {
      title: "Technical Training Safety Protocols",
      description: "Essential safety guidelines and best practices for hands-on technical training environments.",
      type: "PDF Guide",
      pages: "15 pages",
      downloads: "1,642",
      icon: Award
    }
  ];

  const videoResources = [
    {
      title: "The 5 Principles of Effective Adult Learning",
      description: "Learn the key principles that make adult education successful, with real-world examples and applications.",
      duration: "12 minutes",
      views: "8,432",
      icon: Play
    },
    {
      title: "Building Confidence in Public Speaking",
      description: "Practical techniques to overcome speaking anxiety and deliver compelling presentations.",
      duration: "18 minutes",
      views: "12,156",
      icon: Play
    },
    {
      title: "Creating Engaging Training Materials",
      description: "How to design training content that keeps learners engaged and improves retention.",
      duration: "15 minutes",
      views: "6,789",
      icon: Play
    }
  ];

  const webinars = [
    {
      title: "Corporate Training ROI: Measuring What Matters",
      date: "February 15, 2024",
      time: "2:00 PM EST",
      status: "upcoming",
      attendees: 156
    },
    {
      title: "Advanced Communication Techniques for Leaders",
      date: "January 25, 2024",
      time: "1:00 PM EST",
      status: "past",
      attendees: 243,
      recording: true
    },
    {
      title: "Technical Training in the Digital Age",
      date: "January 10, 2024",
      time: "3:00 PM EST",
      status: "past",
      attendees: 189,
      recording: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white space-y-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Free Learning Resources
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">Unlock Your Learning Potential</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Access our comprehensive library of free training materials, guides, and tools 
              designed to accelerate your professional development journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Featured Resource</h2>
            <p className="text-xl text-muted-foreground">
              Our most popular download - essential reading for anyone in education or training
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-card overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-primary p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <BookOpen className="h-20 w-20 mx-auto mb-4" />
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      🔥 Most Popular
                    </Badge>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">Complete Guide to Adult Learning Principles</h3>
                      <p className="text-muted-foreground text-lg">
                        This comprehensive guide covers everything you need to know about how adults learn 
                        differently from children, with practical applications for trainers, educators, and 
                        corporate learning professionals.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <FileText className="h-5 w-5 mx-auto mb-1 text-primary" />
                        <div className="text-sm font-medium">25 Pages</div>
                        <div className="text-xs text-muted-foreground">Comprehensive</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <Download className="h-5 w-5 mx-auto mb-1 text-primary" />
                        <div className="text-sm font-medium">2,847</div>
                        <div className="text-xs text-muted-foreground">Downloads</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <Star className="h-5 w-5 mx-auto mb-1 text-primary" />
                        <div className="text-sm font-medium">4.9/5</div>
                        <div className="text-xs text-muted-foreground">Rating</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        {[
                          "The 6 principles of adult learning theory",
                          "How to design age-appropriate training programs",
                          "Motivation techniques for adult learners",
                          "Creating supportive learning environments",
                          "Assessment strategies that work"
                        ].map((item, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button size="lg" className="w-full md:w-auto">
                      <Download className="mr-2 h-5 w-5" />
                      Download Free Guide
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Downloads */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Free Downloads</h2>
            <p className="text-xl text-muted-foreground">
              Practical tools and guides to enhance your teaching and learning effectiveness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeResources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-card transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <resource.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                    {resource.featured && (
                      <Badge className="text-xs bg-accent text-accent-foreground">Featured</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl leading-tight">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{resource.pages}</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Video Learning Library</h2>
            <p className="text-xl text-muted-foreground">
              Watch and learn from expert training sessions and educational content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoResources.map((video, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-card transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 bg-gradient-primary flex items-center justify-center">
                  <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform cursor-pointer" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg leading-tight">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{video.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{video.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{video.views} views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Upcoming & Past Webinars</h2>
            <p className="text-xl text-muted-foreground">
              Join our live sessions or access recordings of previous webinars
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {webinars.map((webinar, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold">{webinar.title}</h3>
                        <Badge 
                          variant={webinar.status === 'upcoming' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {webinar.status === 'upcoming' ? 'Upcoming' : 'Past'}
                        </Badge>
                        {webinar.recording && (
                          <Badge variant="outline" className="text-xs">
                            Recording Available
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{webinar.date}</span>
                        <span>{webinar.time}</span>
                        <span>{webinar.attendees} attendees</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {webinar.status === 'upcoming' ? (
                        <Button>Register Free</Button>
                      ) : (
                        <Button variant="outline">
                          {webinar.recording ? 'Watch Recording' : 'View Details'}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Ready for Personalized Training?</h2>
              <p className="text-xl text-muted-foreground">
                While our free resources are a great start, nothing beats personalized training 
                designed specifically for your needs and goals.
              </p>
            </div>
            
            <LeadCaptureForm 
              title="Get Custom Training Solutions"
              description="Contact us to discuss how we can create a training program tailored to your specific requirements."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;