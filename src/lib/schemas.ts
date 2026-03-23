import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[\d\s\-\+\(\)]*$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long (max 2000 characters)"),
});

export const leagueSignupSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long"),
  skillLevel: z.enum(["beginner", "intermediate", "advanced", "professional"],
    "Please select your skill level"
  ),
  preferredDays: z
    .array(z.string())
    .min(1, "Please select at least one preferred day"),
  teamName: z.string().max(100, "Team name is too long").optional(),
  additionalNotes: z
    .string()
    .max(500, "Notes are too long (max 500 characters)")
    .optional(),
});

export const bookingRequestSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  duration: z.enum(["1", "2", "3", "4"],
    "Please select a duration"
  ),
  tablePreference: z.enum(["standard", "slate", "vip", "any"],
    "Please select a table preference"
  ),
  groupSize: z
    .number()
    .min(1, "Group size must be at least 1")
    .max(10, "Please contact us for groups larger than 10"),
  occasion: z.string().max(200, "Description is too long").optional(),
  specialRequests: z
    .string()
    .max(500, "Special requests are too long")
    .optional(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
export type LeagueSignupSchema = z.infer<typeof leagueSignupSchema>;
export type BookingRequestSchema = z.infer<typeof bookingRequestSchema>;
