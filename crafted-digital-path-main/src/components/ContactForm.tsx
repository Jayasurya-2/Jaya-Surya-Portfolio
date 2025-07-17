
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-gray-800/70 border-gray-700 backdrop-blur-sm hover:bg-gray-800/90 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="text-white">Send a Message</CardTitle>
        <CardDescription className="text-gray-400">
          I'll get back to you within 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input 
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name" 
              className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 hover:border-gray-500 transition-colors duration-300" 
              required
            />
            <Input 
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name" 
              className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 hover:border-gray-500 transition-colors duration-300" 
              required
            />
          </div>
          <Input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your@email.com" 
            className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 hover:border-gray-500 transition-colors duration-300" 
            required
          />
          <Input 
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject" 
            className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 hover:border-gray-500 transition-colors duration-300" 
            required
          />
          <Textarea 
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message..." 
            rows={4} 
            className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 hover:border-gray-500 transition-colors duration-300" 
            required
          />
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
