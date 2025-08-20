import * as React from "react";
import { Accordion as ArkAccordionPrimitive } from "@ark-ui/react"; // Import the main Accordion namespace

import { cn } from "@/lib/utils";

const Accordion = React.forwardRef<
  React.ElementRef<typeof ArkAccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ArkAccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ArkAccordionPrimitive.Root
    className={cn("w-full", className)}
    ref={ref}
    {...props}
  />
));
Accordion.displayName = "Accordion"; // Or ArkAccordionPrimitive.Root.displayName if available and preferred

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof ArkAccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ArkAccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <ArkAccordionPrimitive.Item
    className={cn("border-b border-border last:border-b-0", className)} // Adjusted border class for consistency
    ref={ref}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem"; // Or ArkAccordionPrimitive.Item.displayName

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof ArkAccordionPrimitive.ItemTrigger>,
  React.ComponentPropsWithoutRef<typeof ArkAccordionPrimitive.ItemTrigger>
>(({ className, children, ...props }, ref) => (
  // The AccordionHeader concept is implicitly part of the Item. The Trigger is the clickable element.
  // We apply header-like styling to the trigger itself if needed, or to a div within AccordionItem if more structure is required before the trigger.
  // For shadcn/ui, the trigger itself usually spans the header area.
  <ArkAccordionPrimitive.ItemTrigger
    className={cn(
      "flex w-full flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
    {/* The ChevronDown icon is typically part of the children passed to AccordionTrigger in the consuming component,
      or it could be added here if it's always desired. The user's conference-rooms.tsx adds it.
      The class [&[data-state=open]>svg]:rotate-180 targets an SVG passed as a child.
  */}
  </ArkAccordionPrimitive.ItemTrigger>
));
AccordionTrigger.displayName = "AccordionTrigger"; // Or ArkAccordionPrimitive.ItemTrigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof ArkAccordionPrimitive.ItemContent>,
  React.ComponentPropsWithoutRef<typeof ArkAccordionPrimitive.ItemContent>
>(({ className, children, ...props }, ref) => (
  <ArkAccordionPrimitive.ItemContent
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    ref={ref}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </ArkAccordionPrimitive.ItemContent>
));
AccordionContent.displayName = "AccordionContent"; // Or ArkAccordionPrimitive.ItemContent.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
