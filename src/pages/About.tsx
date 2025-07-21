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
  Mail
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white space-y-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Meet Your Instructor
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">About Tim The Teacher</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              With decades of teaching experience across technical, professional, and life skills, 
              I'm passionate about helping adult learners unlock their full potential.
            </p>
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