import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  CheckCircle, 
  Star,
  Download,
  Calendar,
  Target,
  Lightbulb
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/lovable-uploads/a606f90b-1c3b-4734-9cbf-5fcac340d0d1.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <Badge variant="secondary" className="w-fit bg-white/20 text-white border-white/30">
                ✨ Decades of Teaching Excellence
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Unlock Your Potential with 
                <span className="block text-accent"> Expert Training</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                From technical skills to communication mastery, I help adult learners 
                and corporate teams achieve their professional development goals through 
                proven teaching methods and personalized attention.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Explore Training Programs
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Download Free Resources
                </Button>
              </div>
              
              {/* Credibility Indicators */}
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm text-white/80">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm text-white/80">Corporate Clients</div>
                </div>
              </div>
            </div>
            
            <div className="lg:justify-self-end">
              <LeadCaptureForm 
                title="Start Your Learning Journey"
                description="Get a free consultation and discover the perfect training solution for your needs."
                className="bg-white/95 backdrop-blur-sm shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tim's expertise spans multiple industries with proven results in both 
              public and private sector training programs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, label: "Certified Instructor", desc: "Multiple Industry Certifications" },
              { icon: Users, label: "Team Training", desc: "Small Groups to Large Corporations" },
              { icon: Award, label: "Excellence Award", desc: "Recognition for Outstanding Teaching" },
              { icon: BookOpen, label: "Continuous Learning", desc: "Always Updated with Latest Methods" }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-soft">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What I Teach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">What I Teach</Badge>
            <h2 className="text-4xl font-bold mb-6">Comprehensive Training Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From technical expertise to essential life skills, I offer diverse training 
              programs tailored to adult learners and professional development needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Technical Training",
                desc: "Electrical, mechanical, and industry-specific technical skills with hands-on learning.",
                features: ["Electrical Systems", "Mechanical Operations", "Safety Protocols", "Equipment Training"]
              },
              {
                icon: Users,
                title: "Communication Skills",
                desc: "Professional communication, presentation skills, and interpersonal effectiveness.",
                features: ["Public Speaking", "Business Writing", "Team Communication", "Leadership Skills"]
              },
              {
                icon: Award,
                title: "Industry Certifications",
                desc: "Preparation for professional certifications and career advancement.",
                features: ["Exam Preparation", "Skill Assessments", "Certification Guidance", "Career Planning"]
              },
              {
                icon: Lightbulb,
                title: "Corporate Training",
                desc: "Custom training programs designed for teams and organizations.",
                features: ["Team Building", "Process Improvement", "Skills Development", "Custom Curriculum"]
              },
              {
                icon: BookOpen,
                title: "Adult Education",
                desc: "Specialized approaches for adult learners returning to education.",
                features: ["Learning Strategies", "Study Skills", "Goal Setting", "Motivation Techniques"]
              },
              {
                icon: GraduationCap,
                title: "Life Skills Training",
                desc: "Practical skills for personal and professional growth including sports instruction.",
                features: ["Snowboarding", "Motorcycling", "Safety Training", "Personal Development"]
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 shadow-soft">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Students Say</h2>
            <p className="text-muted-foreground">Real feedback from learners who've transformed their careers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Engineering Manager",
                content: "Tim's technical training program was exactly what our team needed. His approach made complex concepts accessible and practical.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Career Changer",
                content: "At 45, I thought it was too late to learn new skills. Tim's patient teaching style gave me the confidence to pursue my certification.",
                rating: 5
              },
              {
                name: "Lisa Rodriguez",
                role: "HR Director",
                content: "We've worked with Tim for corporate communication training. The improvement in our team dynamics has been remarkable.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white space-y-6">
            <h2 className="text-4xl font-bold">Ready to Transform Your Skills?</h2>
            <p className="text-xl text-white/90">
              Join thousands of successful learners who've advanced their careers through 
              personalized, expert-led training programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Download className="mr-2 h-5 w-5" />
                Get Free Training Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
