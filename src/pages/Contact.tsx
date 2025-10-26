import { useRef, useState, FormEvent, ChangeEvent } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, Award } from "lucide-react";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { motion } from "framer-motion";
import heroBg from "@/assets/contact.jpg";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_821de98", // ✅ Replace with your EmailJS Service ID
        "template_whpfjsi", // ✅ Replace with your Template ID
        form.current,
        "N4PFTNQbKcFBGKYbo" // ✅ Replace with your Public Key
      )
      .then(
        () => {
          toast.success("Message sent! I'll get back to you soon.");
          setFormData({ name: "", email: "", subject: "", message: "" });
          form.current?.reset();
        },
        () => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "sailavishnu12@gmail.com",
      link: "mailto:sailavishnu12@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 7989099709",
      link: "tel:+917989099709",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Available for Remote Work | Onsite | Hybrid",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="-mt-24 py-24 md:py-32 text-center relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-3xl px-4 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6 mx-auto">
            <Award className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love
            to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <main className="pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left: Contact Info */}
            <motion.div className="space-y-6" variants={fadeUp} custom={1}>
              <Card className="border-border hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4"
                        variants={fadeUp}
                        custom={index + 1.4}
                      >
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm mb-1">
                            {info.title}
                          </p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground text-sm">
                              {info.content}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Why Work With Me?</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {[
                      "Fast response time and clear communication",
                      "Commitment to quality and best practices",
                      "Flexible and adaptable to your needs",
                      "Passionate about creating great user experiences",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div className="lg:col-span-2" variants={fadeUp} custom={1.6}>
              <Card className="border-border hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-8">
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      variants={fadeUp}
                      custom={1.8}
                    >
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={fadeUp} custom={2}>
                      <Label htmlFor="subject">Position *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>

                    <motion.div variants={fadeUp} custom={2.2}>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                      />
                    </motion.div>

                    <motion.div variants={fadeUp} custom={2.4}>
                      <Button type="submit" size="lg" className="w-full group">
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            custom={2.8}
          >
            <Card className="border-border max-w-3xl mx-auto hover:shadow-2xl transition-shadow duration-500">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Open to Opportunities
                </h2>
                <p className="text-muted-foreground mb-6">
                  I'm currently seeking frontend developer and React engineer
                  positions. If you have an opportunity that matches my skills,
                  I'd love to discuss how I can contribute to your team.
                </p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  variants={fadeUp}
                  custom={3}
                >
                  <Button variant="default" asChild>
                    <a href="mailto:sailavishnu12@gmail.com">
                      Email Me Directly
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/projects">View My Work</a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
