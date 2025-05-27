export interface PropertyDetails {
  address: string | null;
  price: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  sqft: number | null;
  propertyType: string | null;
  description: string | null;
  keyFeatures: string[]; // Retained for compatibility, might be merged with amenities
  
  // New fields
  propertyTitle: string | null;
  images: string[]; // Array of image URLs
  purpose: 'For Sale' | 'For Rent' | string | null; // e.g., 'For Sale', 'For Rent'
  furnishingType: 'Furnished' | 'Unfurnished' | 'Partly Furnished' | string | null;
  amenities: string[];
  
  validatedInformation: string[]; // Could be specific claims or badges
  buildingInformation: string | null; // General info or specific like "Floor Number", "Total Floors"
  
  permitNumber: string | null;
  dedNumber: string | null; // DED License number
  reraNumber: string | null; // RERA Registration number
  referenceId: string | null; // Property reference ID from listing site
  brnDld: string | null; // Broker's RERA BRN / DLD Permit No.

  listedBy: {
    name: string | null;
    phone: string | null;
    email: string | null;
    company?: string | null; // Optional: Lister's company
  } | null;
}

export interface GeminiError {
  message: string;
}