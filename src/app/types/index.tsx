import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  type: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Template {
  name: string;
  benefits: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface SalesData {
  month: string;
  revenue: number;
  target: number;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}