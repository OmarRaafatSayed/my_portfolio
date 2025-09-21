"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { SectionAnimator } from '../SectionAnimator';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const newsletterFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
});

export function ContactSection() {
  const { toast } = useToast();
  
  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const newsletterForm = useForm<z.infer<typeof newsletterFormSchema>>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: { email: "" },
  });

  async function onContactSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
      await emailjs.send(
        'service_bhp27sv',
        'template_0p3eyre',
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        'swaYhJ32GZKREHzEp'
      );
      
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      contactForm.reset();
    } catch (error) {
      toast({
        title: "Error!",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  }
  
  async function onNewsletterSubmit(values: z.infer<typeof newsletterFormSchema>) {
    try {
      await emailjs.send(
        'service_bhp27sv',
        'template_0p3eyre',
        {
          from_name: 'Newsletter Subscriber',
          from_email: values.email,
          message: `New newsletter subscription from: ${values.email}`,
        },
        'swaYhJ32GZKREHzEp'
      );
      
      toast({
        title: "Subscribed!",
        description: "You've been added to the newsletter.",
      });
      newsletterForm.reset();
    } catch (error) {
      toast({
        title: "Error!",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive"
      });
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionAnimator className="mb-12 text-center">
          <span className="font-bold text-primary font-headline">GET IN TOUCH</span>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </SectionAnimator>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <SectionAnimator delay={0.2}>
            <Form {...newsletterForm}>
              <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="w-full max-w-sm mx-auto md:mx-0">
                  <div className="group relative w-full bg-background border-4 md:border-[6px] border-black p-5 shadow-[8px_8px_0_#000] md:shadow-[12px_12px_0_#000] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 md:hover:-translate-x-1.5 md:hover:-translate-y-1.5 hover:shadow-[12px_12px_0_#000] md:hover:shadow-[17px_17px_0_#000]">
                      <span className="block text-3xl md:text-4xl font-extrabold uppercase relative overflow-hidden mb-4 font-headline">
                          Newsletter
                          <span className="absolute bottom-0 left-0 h-1 w-[90%] bg-black transition-transform duration-300 -translate-x-[101%] group-hover:translate-x-0" />
                      </span>
                      <p className="text-base leading-snug text-foreground mb-5">
                        Get my latest projects, articles, and AI insights delivered straight to your inbox.
                      </p>
                      <div className="flex flex-col gap-4">
                          <FormField
                              control={newsletterForm.control}
                              name="email"
                              render={({ field }) => (
                                  <FormItem>
                                      <FormLabel className="sr-only">Email</FormLabel>
                                      <FormControl>
                                          <input
                                              type="email"
                                              placeholder="Your Email Address"
                                              {...field}
                                              className="w-full p-2.5 bg-background border-4 border-black text-base font-body transition-transform duration-300 focus:outline-none focus:scale-105 focus:bg-black focus:text-white placeholder:text-muted-foreground"
                                          />
                                      </FormControl>
                                      <FormMessage />
                                  </FormItem>
                              )}
                          />
                          <button type="submit" className="w-1/2 self-start border-4 border-black bg-black text-white p-2.5 text-lg font-bold uppercase relative overflow-hidden transition-transform duration-300 active:scale-95 group/button">
                              <span className="block transition-transform duration-300 group-hover/button:-translate-y-full">Subscribe</span>
                              <span className="absolute inset-0 bg-primary text-primary-foreground flex items-center justify-center font-bold transition-transform duration-300 translate-y-full group-hover/button:translate-y-0">
                                  Let's Go!
                              </span>
                          </button>
                      </div>
                  </div>
              </form>
            </Form>
          </SectionAnimator>
          <SectionAnimator delay={0.4}>
            <Form {...contactForm}>
              <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                <FormField
                  control={contactForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={contactForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={contactForm.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can I help you?" {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                    type="submit"
                    disabled={contactForm.formState.isSubmitting}
                    className="group flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg bg-primary px-8 py-2.5 text-lg font-bold text-primary-foreground transition-all duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <div className="svg-wrapper group-hover:animate-fly-1">
                        <Send className="h-6 w-6 shrink-0 transition-all duration-300 ease-in-out group-hover:translate-x-32 group-hover:rotate-45 group-hover:scale-110" />
                    </div>
                    <span className="block transition-all duration-300 ease-in-out group-hover:-translate-x-40">
                        {contactForm.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                </button>
              </form>
            </Form>
          </SectionAnimator>
        </div>
      </div>
    </section>
  );
}
