import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Send, Instagram, Globe, Youtube, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_bg45roq';
  const EMAILJS_TEMPLATE_ID = 'template_zis563i';
  const EMAILJS_PUBLIC_KEY = 'Hm4Sc1tSTuTWkKdv-';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'JBCNSTARS Team',
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "jbcnstars.parel@jbcnschool.edu.in",
      description: "Get in touch for general inquiries"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "JBCN Parel, Mumbai",
      description: "Come visit our campus"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", url: "https://www.instagram.com/jbcn_parel/?hl=en", handle: "@jbcn_parel" },
    { icon: Globe, name: "Website", url: "https://jbcnschool.edu.in", handle: "jbcnschool.edu.in" },
    { icon: Youtube, name: "YouTube", url: "https://www.youtube.com/c/jbcninternationalschool", handle: "JBCN International School" }
  ];

  const faqs = [
    {
      question: "Who can participate in JBCN Stars?",
      answer: "JBCNSTARS welcomes students from grades 6-12 from all schools. Teams of three students compete together in this exciting mathematical challenge."
    },
    {
      question: "What is the competition format?",
      answer: "Three rounds test different skills: Individual Round (30 questions, 60 minutes), Team Round (10 collaborative problems, 60 minutes), and Quiz Round for the top 4 teams from each grade level."
    },
    {
      question: "What prizes and recognition do winners receive?",
      answer: "Winners receive plaques and certificates recognizing their mathematical excellence. The Math Star trophy goes to Quiz Round champions, and all participants receive participation certificates."
    },
    {
      question: "What mathematical topics are covered?",
      answer: `Junior Level (Grades 6-7): Logical thinking, number patterns, figure patterns, number properties, speed/distance/time, ratios, percentages, and basic geometry.

Intermediate Level (Grades 8-10): Logic problems, arithmetic, number theory, patterns, algebra, geometry, trigonometry, statistics, and probability.

Senior Level (Grades 11-12): Advanced arithmetic, number theory, algebraic concepts, geometric reasoning, trigonometry, statistics, and probability applications.

All questions encourage logical thinking and creative problem-solving using grade-appropriate mathematical concepts.`
    },
    {
      question: "When and where does the competition take place?",
      answer: "Saturday, October 11th, 2025 from 8:00 AM to 3:00 PM at JBCN International School Parel, Mumbai. Join us for an exciting day of mathematical exploration and friendly competition."
    },
    {
      question: "How can students prepare effectively?",
      answer: "Focus on the syllabus topics for your grade level. Practice logical reasoning, work through mathematical problems from your curriculum, and review similar competition formats. Strong preparation comes from consistent practice with the mathematical concepts you've learned in class."
    },
    {
      question: "Is there a registration fee?",
      answer: "Registration details including fees are available in the registration form. The fee covers all competition materials, refreshments during the event, and certificates."
    },
    {
      question: "What tools are allowed during the competition?",
      answer: "Only basic writing materials are permitted. Calculators and electronic devices are not allowed, as the competition focuses on logical reasoning and mathematical thinking skills rather than computational tools."
    }
  ];

  return (
    <Layout>
      <div className="py-16 sm:py-20 grid-bg">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <HelpCircle className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Contact & <span className="text-primary">FAQ</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground-muted max-w-3xl mx-auto px-4">
              Have questions about JBCNSTARS? Want to participate or need more information? 
              Find answers below or get in touch with us directly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 mb-16 sm:mb-20">
            {/* Left Column */}
            <div className="space-y-8 animate-slide-in-left">
              {/* Email Widget */}
              <div className="card-premium p-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <a 
                      href="mailto:jbcnstars.parel@jbcnschool.edu.in"
                      className="text-primary font-medium mb-1 hover:underline"
                    >
                      jbcnstars.parel@jbcnschool.edu.in
                    </a>
                    <p className="text-muted-foreground text-sm">Get in touch for general inquiries</p>
                  </div>
                </div>
              </div>

              {/* Email Us Card and Visit Us Card */}
              <div className="grid gap-6">
                <div className="card-premium p-6 text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground text-sm mb-4">Send us your questions and we'll get back to you soon</p>
                  <Button 
                    className="w-full"
                    onClick={() => window.location.href = 'mailto:jbcnstars.parel@jbcnschool.edu.in'}
                  >
                    Send Email
                  </Button>
                </div>
                
                <div className="card-premium p-6 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground text-sm mb-4">Come visit our campus at JBCN Parel, Mumbai</p>
                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Follow Us */}
              <div className="card-premium p-6">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-primary/10 transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <social.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">{social.name}</p>
                        <p className="text-muted-foreground text-sm">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Location Map */}
              <div className="card-premium p-6">
                <h3 className="text-2xl font-bold mb-6">Our Location</h3>
                <div className="rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3772.493658857545!2d72.8419733!3d18.9979566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf079753be9b%3A0xc31175a8bdada9b6!2sJBCN%20International%20School%20Parel!5e0!3m2!1sen!2sin!4v1758173244976!5m2!1sen!2sin" 
                    width="100%" 
                    height="350" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="JBCN International School Parel Location"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in lg:col-span-2">
              <div className="card-premium p-8">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            
            <div className="card-premium p-8 animate-fade-in">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-2xl px-6 transition-all duration-300 hover:border-primary/30"
                  >
                    <AccordionTrigger className="text-left py-6 hover:text-primary transition-colors duration-300">
                      <span className="text-lg font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Still Have Questions */}
            <div className="mt-16 text-center">
              <div className="card-premium max-w-2xl mx-auto p-8">
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-muted-foreground mb-6">
                  Can't find the answer you're looking for? Our team is here to help you with any additional questions about JBCNSTARS.
                </p>
                <Button 
                  className="px-8 py-4 text-lg font-semibold"
                  onClick={() => window.location.href = 'mailto:jbcnstars.parel@jbcnschool.edu.in'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us Directly
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;