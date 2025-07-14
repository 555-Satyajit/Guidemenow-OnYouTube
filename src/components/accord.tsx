import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger> Do I need expensive gear to start YouTube?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Nope! Start with what you have — even a smartphone works. As you grow, you can upgrade with the tools we recommend to improve quality step by step.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger> Can I use these tools even if I'm just a beginner?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
           Absolutely. Every tool here is beginner-friendly. Most have free trials or free plans, so you can try them without risk.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do these tools help my channel grow?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
           From SEO tools that find the best keywords to music libraries that keep your videos monetized, these tools remove guesswork and save hours — letting you focus on creating.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Do you earn commissions from these recommendations?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
Yes — we may earn a small affiliate commission at no extra cost to you. This helps keep our guides free and constantly updated.

          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
