import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqData = [
    {
      question: "What should I do if I feel unsafe walking alone?",
      answer: "Trust your instincts immediately. If possible, go to a well-lit, populated area like a store or restaurant. Call someone you trust and stay on the phone. Use ride-sharing services instead of walking. If you feel you're being followed, change direction or cross the street. Don't hesitate to call for help or contact authorities if needed."
    },
    {
      question: "How can I improve safety in my neighborhood?",
      answer: "Start by building relationships with neighbors and creating a support network. Organize or join neighborhood watch programs. Report safety concerns to local authorities. Advocate for better lighting and infrastructure improvements. Share safety information and resources with community members."
    },
    {
      question: "What are some common myths about personal safety?",
      answer: "Myth: 'Attacks only happen in dark alleys' - Reality: Most assaults occur in familiar places by known individuals. Myth: 'Fighting back makes things worse' - Reality: Studies show resistance often reduces injury. Myth: 'Only certain types of people are targeted' - Reality: Anyone can be a victim regardless of appearance, behavior, or lifestyle."
    },
    {
      question: "How do I create a personal safety plan?",
      answer: "Identify trusted contacts and share your plans with them. Establish check-in protocols for different situations. Know your escape routes at home, work, and frequently visited places. Keep emergency supplies accessible. Practice your plan and update it regularly. Consider taking self-defense classes."
    },
    {
      question: "What should I include in a safety kit?",
      answer: "Essential items include a charged phone with emergency contacts, personal alarm or whistle, small flashlight, basic first aid supplies, and some cash. Consider adding a portable phone charger, pepper spray (where legal), and any personal medications. Keep kits in your car, purse, and at home."
    },
    {
      question: "How can I help a friend who is in an unsafe situation?",
      answer: "Listen without judgment and believe their experience. Help them develop a safety plan and provide emotional support. Assist with gathering resources and information about available services. Respect their decisions and timeline - they know their situation best. Maintain confidentiality and be patient with the process."
    },
    {
      question: "What are the warning signs of an abusive relationship?",
      answer: "Red flags include controlling behavior, isolation from friends/family, extreme jealousy, threats or intimidation, physical violence, financial control, constant criticism, and monitoring activities. Trust your instincts if something feels wrong. Professional counselors can help assess concerning behaviors."
    },
    {
      question: "Is this website secure and private?",
      answer: "We prioritize your privacy and security. This is a frontend-only information resource - we don't store personal data or track individual users. For sensitive situations, always use private/incognito browsing modes and consider using a trusted device. For confidential support, contact professional hotlines directly."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about personal safety, community resources, and getting help.
          </p>
        </div>

        <Card className="p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors duration-200">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Can't find what you're looking for? Contact local support organizations or 
            professional counselors for personalized guidance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;