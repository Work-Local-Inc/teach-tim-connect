
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  CheckCircle,
  Calendar,
  MapPin,
  Mail,
  Lightbulb,
  Target,
  Star
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Graphics */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 animate-bounce">
            <BookOpen className="h-8 w-8 text-white/30" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          </div>
          <div className="absolute top-32 right-20 animate-bounce">
            <Lightbulb className="h-6 w-6 text-white/20" style={{ animationDelay: '1s', animationDuration: '4s' }} />
          </div>
          <div className="absolute bottom-20 left-20 animate-bounce">
            <Target className="h-7 w-7 text-white/25" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
          </div>
          <div className="absolute top-40 left-1/4 animate-bounce">
            <Star className="h-5 w-5 text-white/20" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }} />
          </div>
          <div className="absolute bottom-32 right-1/3 animate-bounce">
            <Award className="h-6 w-6 text-white/30" style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white space-y-6 order-2 lg:order-1">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Meet Your Instructor
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold">About Tim The Teacher</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                With decades of teaching experience across technical, professional, and life skills, 
                I'm passionate about helping adult learners unlock their full potential.
              </p>
            </div>

            {/* Tim's Character Image */}
            <div className="order-1 lg:order-2 flex justify-center relative">
              <div className="relative">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-110"></div>
                
                {/* Main character image */}
                <img 
                  src="/lovable-uploads/c9474d7e-8126-421a-a927-cbb485d9aa10.png" 
                  alt="Tim The Teacher - Professional Educator and Trainer"
                  className="relative z-10 w-[480px] h-[480px] lg:w-[576px] lg:h-[576px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
                
                {/* Decorative floating icons around Tim */}
                <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 animate-bounce" style={{ animationDelay: '0.3s' }}>
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-4 bg-white/20 backdrop-blur-sm rounded-full p-3 animate-bounce" style={{ animationDelay: '1.2s' }}>
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="absolute top-1/2 -right-8 bg-white/20 backdrop-blur-sm rounded-full p-2 animate-bounce" style={{ animationDelay: '2.1s' }}>
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Story */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">My Teaching Journey</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Teaching isn't just what I do—it's who I am. For over 25 years, I've had the privilege 
                    of helping people discover their potential and achieve their goals through education and training.
                  </p>
                  <p>
                    My journey began in technical education, where I developed expertise in electrical and 
                    mechanical systems. What started as technical instruction evolved into a comprehensive 
                    approach to adult learning that encompasses professional skills, communication, and even 
                    recreational pursuits like snowboarding and motorcycling.
                  </p>
                  <p>
                    What makes me unique is my ability to connect with students of all ages and backgrounds. 
                    Whether I'm working with a recent graduate seeking their first certification or a 
                    post-retirement learner exploring new interests, I adapt my teaching style to meet 
                    each individual where they are.
                  </p>
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Experience & Credentials</h2>
                <div className="space-y-6">
                  {[
                    {
                      period: "2020 - Present",
                      title: "Corporate Training Specialist",
                      description: "Leading custom training programs for Fortune 500 companies, focusing on technical skills and professional development."
                    },
                    {
                      period: "2010 - 2020",
                      title: "Senior Technical Instructor",
                      description: "Developed and delivered comprehensive technical education programs in both public and private sector environments."
                    },
                    {
                      period: "2000 - 2010",
                      title: "Adult Education Coordinator",
                      description: "Specialized in creating accessible learning environments for adult learners returning to education."
                    },
                    {
                      period: "1998 - 2000",
                      title: "Technical Trainer",
                      description: "Started career in technical training, developing foundational teaching methodologies still used today."
                    }
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6 pb-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <Badge variant="outline" className="w-fit">{item.period}</Badge>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teaching Philosophy */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">My Teaching Philosophy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Users,
                      title: "Student-Centered Approach",
                      desc: "Every student is unique. I adapt my teaching methods to match individual learning styles and goals."
                    },
                    {
                      icon: BookOpen,
                      title: "Practical Application",
                      desc: "Theory is important, but real learning happens when you can apply knowledge to real-world situations."
                    },
                    {
                      icon: Award,
                      title: "Continuous Improvement",
                      desc: "I stay current with the latest teaching methods and industry developments to provide the best education."
                    },
                    {
                      icon: GraduationCap,
                      title: "Lifelong Learning",
                      desc: "Learning doesn't stop at graduation. I encourage continuous growth and skill development."
                    }
                  ].map((principle, index) => (
                    <Card key={index} className="border-0 shadow-soft">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <principle.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">{principle.title}</h3>
                        <p className="text-sm text-muted-foreground">{principle.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* What Sets Me Apart */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">What Sets Me Apart</h2>
                <div className="space-y-4">
                  {[
                    "Decades of hands-on teaching experience across multiple industries",
                    "Proven ability to work with diverse age groups from elementary to post-retirement",
                    "Expertise in both technical subjects and soft skills development",
                    "Track record of success in both public and private sector training",
                    "Passion for connecting with students and making learning enjoyable",
                    "Continuous professional development and certification maintenance",
                    "Flexible teaching approaches adapted to adult learning principles"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Stats */}
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">25+</div>
                      <div className="text-sm text-muted-foreground">Years Teaching</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">1000+</div>
                      <div className="text-sm text-muted-foreground">Students Trained</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">100+</div>
                      <div className="text-sm text-muted-foreground">Corporate Programs</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Certifications</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Certifications</h3>
                  <div className="space-y-3">
                    {[
                      "Master Instructor Certification",
                      "Technical Training Specialist",
                      "Adult Education Credential",
                      "Corporate Training Certified",
                      "Safety Training Instructor",
                      "Communication Skills Trainer"
                    ].map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <LeadCaptureForm 
                title="Work With Tim"
                description="Ready to start your learning journey? Let's discuss your training needs."
                variant="compact"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
