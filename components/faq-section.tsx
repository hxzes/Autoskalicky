import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqItems } from "@/lib/data"

export function FaqSection() {
  return (
    <div className="mt-16">
      <h2 className="text-center text-3xl font-bold">ČASTO KLADENÉ OTÁZKY</h2>

      <div className="mt-8 max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg mb-4 overflow-hidden">
              <AccordionTrigger className="text-left px-6 py-4 hover:no-underline hover:bg-muted/50 data-[state=open]:text-primary transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
