
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { 
  Building2, 
  Users, 
  Award, 
  BookOpen, 
  CheckCircle,
  Clock,
  MapPin,
  Target,
  Lightbulb,
  Zap,
  MessageSquare,
  GraduationCap,
  Calendar
} from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white space-y-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Professional Training Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">Transform Your Team's Potential</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive training solutions designed for adult learners, corporate teams, 
              and professional development needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Core Training Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From technical expertise to leadership development, our programs are tailored 
              to meet the unique needs of adult learners and corporate environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Corporate Training */}
            <Card className="border-0 shadow-card group hover:shadow-soft transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Corporate Training Programs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Custom-designed training programs for organizations seeking to enhance their team's 
                  skills, productivity, and professional development.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">What's Included:</h4>
                  <ul className="space-y-2">
                    {[
                      "Skills assessment and gap analysis",
                      "Custom curriculum development",
                      "On-site or virtual delivery options",
                      "Progress tracking and reporting",
                      "Follow-up coaching and support",
                      "Certification programs available"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <Clock className="h-5 w-5 mx-auto mb-1 text-primary" />
                    <div className="text-sm font-medium">Flexible Duration</div>
                    <div className="text-xs text-muted-foreground">Half-day to multi-week</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <Users className="h-5 w-5 mx-auto mb-1 text-primary" />
                    <div className="text-sm font-medium">Group Size</div>
                    <div className="text-xs text-muted-foreground">5-50 participants</div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Request Corporate Proposal
                </Button>
              </CardContent>
            </Card>

            {/* Adult Education */}
            <Card className="border-0 shadow-card group hover:shadow-soft transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Adult Education Courses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Specialized programs designed for adult learners seeking personal and 
                  professional growth, career transitions, or new skill development.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Course Options:</h4>
                  <ul className="space-y-2">
                    {[
                      "Individual coaching sessions",
                      "Small group workshops",
                      "Online learning modules",
                      "Certification preparation",
                      "Career transition support",
                      "Skills portfolio development"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <Calendar className="h-5 w-5 mx-auto mb-1 text-primary" />
                    <div className="text-sm font-medium">Flexible Schedule</div>
                    <div className="text-xs text-muted-foreground">Evening & weekends</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <MapPin className="h-5 w-5 mx-auto mb-1 text-primary" />
                    <div className="text-sm font-medium">Multiple Formats</div>
                    <div className="text-xs text-muted-foreground">In-person & online</div>
                  </div>
                </div>

                <Button variant="outline" className="w-full" size="lg">
                  Explore Course Catalog
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialized Training Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Specialized Training Areas</h2>
            <p className="text-xl text-muted-foreground">
              Expert instruction across diverse skill areas with proven methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Technical Skills",
                description: "Electrical systems, mechanical operations, safety protocols, and equipment training",
                highlights: ["Hands-on Learning", "Industry Standards", "Safety First", "Certification Prep"]
              },
              {
                icon: MessageSquare,
                title: "Communication Skills",
                description: "Professional communication, presentation skills, and interpersonal effectiveness",
                highlights: ["Public Speaking", "Business Writing", "Active Listening", "Conflict Resolution"]
              },
              {
                icon: Award,
                title: "Industry Certifications",
                description: "Preparation for professional certifications and career advancement opportunities",
                highlights: ["Exam Strategies", "Study Plans", "Practice Tests", "Career Guidance"]
              },
              {
                icon: Target,
                title: "Leadership Development",
                description: "Management skills, team building, and organizational leadership capabilities",
                highlights: ["Team Management", "Decision Making", "Strategic Thinking", "Performance Management"]
              },
              {
                icon: Lightbulb,
                title: "Problem Solving",
                description: "Critical thinking, analytical skills, and creative problem-solving techniques",
                highlights: ["Root Cause Analysis", "Creative Solutions", "Decision Trees", "Process Improvement"]
              },
              {
                icon: BookOpen,
                title: "Life Skills Training",
                description: "Practical skills including recreational activities like snowboarding and motorcycling",
                highlights: ["Safety Training", "Skill Progression", "Confidence Building", "Equipment Knowledge"]
              }
            ].map((area, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{area.description}</p>
                  <div className="space-y-2">
                    {area.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Training Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that ensures maximum learning retention and practical application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "We start by understanding your current skill level, learning goals, and preferred methods."
              },
              {
                step: "02",
                title: "Design",
                description: "Custom curriculum development tailored to your specific needs and learning objectives."
              },
              {
                step: "03",
                title: "Delivery",
                description: "Engaging, interactive training sessions using proven adult learning principles."
              },
              {
                step: "04",
                title: "Follow-up",
                description: "Ongoing support, practice opportunities, and progress tracking to ensure success."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground">
                Contact us today to discuss your training needs and create a custom program 
                that delivers real results for your team or personal development goals.
              </p>
            </div>
            
            <LeadCaptureForm 
              title="Schedule Your Free Consultation"
              description="Let's discuss your training needs and design the perfect learning solution."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
