import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Calendar,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white space-y-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">Let's Start Your Learning Journey</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Ready to transform your skills? Contact me today to discuss your training needs 
              and discover how I can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Send Me a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours to discuss 
                  your training needs and how we can work together.
                </p>
              </div>
              
              <LeadCaptureForm 
                title="Ready to Get Started?"
                description="Tell me about your training goals and I'll design a custom solution for you."
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">tim@timtheteacher.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-sm text-muted-foreground">(555) 123-4567</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-sm text-muted-foreground">Available nationwide for corporate training</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Available Hours</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Monday - Friday</div>
                        <div className="text-sm text-muted-foreground">8:00 AM - 6:00 PM</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Weekends</div>
                        <div className="text-sm text-muted-foreground">By appointment for special programs</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Response Time</div>
                        <div className="text-sm text-muted-foreground">Within 24 hours guaranteed</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">What to Expect</h3>
                  <div className="space-y-3">
                    {[
                      "Free initial consultation to discuss your needs",
                      "Custom training proposal within 48 hours",
                      "Flexible scheduling options to fit your timeline",
                      "Ongoing support throughout your learning journey",
                      "Follow-up sessions to ensure skill retention"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions about training programs and services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "What types of training do you offer?",
                  answer: "I offer comprehensive training in technical skills, communication, industry certifications, corporate development, and life skills including recreational activities."
                },
                {
                  question: "Do you provide corporate training?",
                  answer: "Yes, I specialize in corporate training programs with custom curriculum design, on-site delivery, and ongoing support for teams of all sizes."
                },
                {
                  question: "What is your teaching approach?",
                  answer: "I use adult learning principles with hands-on, practical applications. Every program is tailored to individual learning styles and specific goals."
                },
                {
                  question: "Do you offer online training?",
                  answer: "Yes, I provide both in-person and virtual training options, including hybrid programs that combine both delivery methods."
                },
                {
                  question: "How long are typical training programs?",
                  answer: "Programs range from half-day workshops to multi-week comprehensive courses, depending on the subject matter and learning objectives."
                },
                {
                  question: "Do you provide certification?",
                  answer: "Yes, I offer completion certificates for all programs and can help prepare students for industry-specific certifications."
                }
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-3">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;