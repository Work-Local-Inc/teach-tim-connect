import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
interface LeadCaptureFormProps {
  title?: string;
  description?: string;
  variant?: "compact" | "full";
  className?: string;
}
const LeadCaptureForm = ({
  title = "Ready to Start Learning?",
  description = "Get in touch to discuss your training needs or download our free resources.",
  variant = "full",
  className = ""
}: LeadCaptureFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    interest: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch within 24 hours to discuss your training needs."
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      interest: ""
    });
    setIsSubmitting(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  if (variant === "compact") {
    return <Card className={`w-full max-w-md ${className}`}>
        <CardHeader className="text-center">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Get Free Resources"}
            </Button>
          </form>
        </CardContent>
      </Card>;
  }
  return <Card className={`w-full ${className}`}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} required />
            <Input name="email" type="email" placeholder="Your Email *" value={formData.email} onChange={handleChange} required />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input name="company" placeholder="Company/Organization" value={formData.company} onChange={handleChange} />
            <Input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          </div>

          <div>
            <select name="interest" value={formData.interest} onChange={handleChange} className="w-full p-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" required>
              <option value="">What are you interested in? *</option>
              <option value="corporate-training">Corporate Training</option>
              <option value="technical-skills">Technical Skills Development</option>
              <option value="communication-skills">Communication Skills</option>
              <option value="industry-certifications">Industry Certifications</option>
              <option value="custom-training">Custom Training Program</option>
              <option value="consultation">Training Consultation</option>
            </select>
          </div>

          <Textarea name="message" placeholder="Tell us about your training needs or goals..." value={formData.message} onChange={handleChange} rows={4} />

          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-emerald-600 hover:bg-emerald-500">
            {isSubmitting ? "Sending Your Request..." : "Send Inquiry"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            * Required fields. We respect your privacy and will never share your information.
          </p>
        </form>
      </CardContent>
    </Card>;
};
export default LeadCaptureForm;