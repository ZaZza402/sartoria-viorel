// Common TypeScript interfaces and types for the application

export interface Service {
  id: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  image?: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating?: number;
  image?: string;
}
