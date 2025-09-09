import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// WhatsApp utility function
export function openWhatsAppChat(itemName: string, customMessage?: string) {
  // Business phone number - with country code without +
  const phoneNumber = "918769480205";
  
  // Default message with item name
  const defaultMessage = `Hi, I would like to enquire about ${itemName}.`;
  
  // Use custom message if provided, otherwise use default
  const messageText = customMessage || defaultMessage;
  
  // Properly encode the message for URLs
  const message = encodeURIComponent(messageText);
  
  // Create WhatsApp URL with properly encoded message
  // Using web.whatsapp.com for desktop and api.whatsapp.com for mobile
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  // Open in new tab
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}
