import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { 
  Calendar, 
  Clock, 
  User,
  ArrowRight,
  BookOpen,
  Target,
  Users,
  Lightbulb
} from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Adult Learning Revolution: Why Traditional Teaching Methods Don't Work",
    excerpt: "Discover the key differences between teaching adults and children, and why understanding these principles is crucial for effective corporate training and professional development.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Adult Learning",
    image: "/api/placeholder/600/300"
  };

  const blogPosts = [
    {
      title: "5 Essential Communication Skills Every Professional Needs",
      excerpt: "From public speaking to active listening, these communication skills will transform your career trajectory and workplace relationships.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Communication",
      tags: ["Professional Development", "Soft Skills"]
    },
    {
      title: "Technical Training Best Practices: Making Complex Concepts Accessible",
      excerpt: "Learn how to break down technical subjects into digestible lessons that stick, whether you're teaching electrical systems or mechanical operations.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Technical Training",
      tags: ["Teaching Methods", "Technical Skills"]
    },
    {
      title: "Corporate Training ROI: Measuring Success Beyond Test Scores",
      excerpt: "Discover the metrics that matter when evaluating training effectiveness and how to demonstrate real business impact from learning initiatives.",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Corporate Training",
      tags: ["Business Impact", "ROI"]
    },
    {
      title: "Learning at 50+: Debunking Myths About Age and Skill Acquisition",
      excerpt: "Why it's never too late to learn new skills and how to optimize learning strategies for mature professionals seeking career advancement.",
      date: "2023-12-20",
      readTime: "5 min read",
      category: "Adult Learning",
      tags: ["Career Change", "Lifelong Learning"]
    },
    {
      title: "Safety First: Building a Culture of Learning in High-Risk Industries",
      excerpt: "How effective training programs can prevent accidents and create lasting behavioral change in manufacturing, construction, and technical fields.",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Safety Training",
      tags: ["Workplace Safety", "Behavioral Change"]
    },
    {
      title: "From Classroom to Boardroom: Adapting Teaching Skills for Corporate Success",
      excerpt: "The transferable skills that make educators excellent corporate trainers and how to leverage teaching experience in business environments.",
      date: "2023-12-10",
      readTime: "6 min read",
      category: "Career Development",
      tags: ["Career Transition", "Teaching Skills"]
    }
  ];

  const categories = [
    { name: "All Posts", count: 24, icon: BookOpen },
    { name: "Adult Learning", count: 8, icon: Target },
    { name: "Corporate Training", count: 6, icon: Users },
    { name: "Communication", count: 5, icon: Lightbulb },
    { name: "Technical Training", count: 5, icon: Target }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 gradient-hero-banner">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white space-y-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Educational Insights
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">Learning & Development Blog</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Weekly insights on adult learning, corporate training, and professional development 
              from decades of teaching experience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Article</h2>
            <Card className="border-0 shadow-card overflow-hidden max-w-4xl mx-auto">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-primary"></div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="space-y-4">
                    <Badge variant="outline">{featuredPost.category}</Badge>
                    <h3 className="text-2xl font-bold leading-tight">{featuredPost.title}</h3>
                    <p className="text-muted-foreground">{featuredPost.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Jan 15, 2024</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button className="mt-4">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
                <p className="text-muted-foreground">
                  Practical insights and proven strategies for effective learning and development
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-card transition-all duration-300 group">
                    <div className="h-48 bg-gradient-primary rounded-t-lg"></div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">{post.category}</Badge>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" className="p-0 h-auto font-semibold text-sm group-hover:text-primary">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                      <div className="flex items-center space-x-3">
                        <category.icon className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <LeadCaptureForm 
                title="Weekly Learning Tips"
                description="Get practical teaching and learning insights delivered to your inbox every week."
                variant="compact"
              />

              {/* Popular Tags */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Adult Learning", "Corporate Training", "Communication Skills", 
                      "Technical Training", "Professional Development", "Teaching Methods",
                      "Workplace Learning", "Skill Building", "Career Development", "Safety Training"
                    ].map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
