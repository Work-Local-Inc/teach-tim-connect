import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Users, Award, BookOpen, CheckCircle, Star, Download, Calendar, Target, Lightbulb } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Restored original design with theme-aware backgrounds */}
      <section className="relative min-h-[80vh] flex items-center hero-section">
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 relative">
              <Badge variant="secondary" className="w-fit bg-white/20 text-white border-white/30">
                ✨ Decades of Teaching Excellence
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                Unlock Your Potential with 
                <span className="block text-primary"> Expert Training</span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                From technical skills to communication mastery, I help adult learners 
                and corporate teams achieve their professional development goals through 
                proven teaching methods and personalized attention.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Explore Training Programs
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Download Free Resources
                </Button>
              </div>
              
              {/* Tim's Cartoon - Desktop: floating right, Mobile: centered below buttons */}
              <div className="hidden lg:block absolute -right-8 top-32">
                <div className="relative">
                  
                </div>
              </div>
              
              {/* Tim's Cartoon - Mobile: centered below buttons */}
              <div className="lg:hidden flex justify-center pt-4">
                <img src="/lovable-uploads/tim-cartoon.png" alt="Tim - Your friendly professional development instructor" className="w-52 h-auto drop-shadow-lg" style={{
                filter: 'drop-shadow(0 6px 20px rgba(34, 197, 94, 0.15))',
                clipPath: 'ellipse(90% 85% at 50% 20%)'
              }} />
              </div>
              
              {/* Credibility Indicators with Tim's Character */}
              <div className="flex items-center justify-start space-x-6 pt-6 max-w-4xl">
                {/* Tim's Character */}
                <div className="hidden sm:block flex-shrink-0">
                  <img src="/lovable-uploads/e1a072ae-3beb-4c51-908c-e17b4ab545d4.png" alt="Tim - Your Professional Development Expert" className="w-48 h-48 object-contain" />
                </div>
                
                {/* Stats */}
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">20+</div>
                    <div className="text-sm text-white/90">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-white/90">Students Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">multiple</div>
                    <div className="text-sm text-white/90">Corporate Clients</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:justify-self-end">
              <LeadCaptureForm title="Start Your Learning Journey" description="Get a free consultation and discover the perfect training solution for your needs." className="bg-card/50 backdrop-blur-sm shadow-card border border-border" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tim's expertise spans multiple industries with proven results in both 
              public and private sector training programs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{
            icon: GraduationCap,
            label: "Certified Instructor",
            desc: "Multiple Industry Certifications"
          }, {
            icon: Users,
            label: "Team Training",
            desc: "Small Groups to Large Corporations"
          }, {
            icon: Award,
            label: "Excellence Award",
            desc: "Recognition for Outstanding Teaching"
          }, {
            icon: BookOpen,
            label: "Continuous Learning",
            desc: "Always Updated with Latest Methods"
          }].map((item, index) => <Card key={index} className="text-center p-6 bg-card border-border shadow-card hover:border-primary/30 transition-colors">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* What I Teach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">What I Teach</Badge>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Comprehensive Training Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From technical expertise to essential life skills, I offer diverse training 
              programs tailored to adult learners and professional development needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: Target,
            title: "Technical Training",
            desc: "Electrical, mechanical, and industry-specific technical skills with hands-on learning.",
            features: ["Electrical Systems", "Mechanical Operations", "Safety Protocols", "Equipment Training"]
          }, {
            icon: Users,
            title: "Communication Skills",
            desc: "Professional communication, presentation skills, and interpersonal effectiveness.",
            features: ["Public Speaking", "Business Writing", "Team Communication", "Leadership Skills"]
          }, {
            icon: Award,
            title: "Industry Certifications",
            desc: "Preparation for professional certifications and career advancement.",
            features: ["Exam Preparation", "Skill Assessments", "Certification Guidance", "Career Planning"]
          }, {
            icon: Lightbulb,
            title: "Corporate Training",
            desc: "Custom training programs designed for teams and organizations.",
            features: ["Team Building", "Process Improvement", "Skills Development", "Custom Curriculum"]
          }, {
            icon: BookOpen,
            title: "Adult Education",
            desc: "Specialized approaches for adult learners returning to education.",
            features: ["Learning Strategies", "Study Skills", "Goal Setting", "Motivation Techniques"]
          }, {
            icon: GraduationCap,
            title: "Life Skills Training",
            desc: "Practical skills for personal and professional growth including sports instruction.",
            features: ["Snowboarding", "Motorcycling", "Safety Training", "Personal Development"]
          }].map((service, index) => <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-card border-border hover:border-primary/30">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-primary/20">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">What Students Say</h2>
            <p className="text-muted-foreground">Real feedback from learners who've transformed their careers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            text: "Awesome and Encouraging!",
            author: "E.H."
          }, {
            text: "Strong knowledge in area of expertise",
            author: "A.P."
          }, {
            text: "All the knowledge and experience",
            author: "E.D."
          }].map((testimonial, index) => <Card key={index} className="bg-card border-border shadow-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                  </div>
                  <p className="text-muted-foreground mb-4">&quot;{testimonial.text}&quot;</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Ready to Transform Your Skills?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of successful learners who've advanced their careers through 
              personalized, expert-led training programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Download className="mr-2 h-5 w-5" />
                Get Free Training Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;