"use server"

import { z } from "zod"

// Define validation schema
const ContactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
})

type ContactFormData = z.infer<typeof ContactFormSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedData = ContactFormSchema.safeParse(data)

    if (!validatedData.success) {
      return {
        success: false,
        errors: validatedData.error.flatten().fieldErrors,
        message: "Please check the form for errors",
      }
    }

    // In a real application, you would send an email here
    // For example, using a service like SendGrid, Mailgun, or AWS SES
    // Example (commented out as it requires actual API keys):
    /*
    const emailSent = await sendEmail({
      to: 'info@solbien.com',
      subject: `Contact Form: ${validatedData.data.firstName} ${validatedData.data.lastName}`,
      text: `
        Name: ${validatedData.data.firstName} ${validatedData.data.lastName}
        Email: ${validatedData.data.email}
        Company: ${validatedData.data.company || 'Not provided'}
        Message: ${validatedData.data.message}
      `,
    });
    */

    // For now, we'll simulate a successful email send
    // In production, you would check if the email was actually sent
    const emailSent = true

    if (emailSent) {
      return {
        success: true,
        message: "Your message has been sent successfully. We will get back to you soon!",
      }
    } else {
      return {
        success: false,
        message: "Failed to send your message. Please try again later or contact us directly.",
      }
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
