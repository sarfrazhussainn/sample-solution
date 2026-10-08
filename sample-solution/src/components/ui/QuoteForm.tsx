"use client";

import { useState } from "react";
import { validateForm, type FormData, type FormErrors, isValid } from "@/lib/validation";
import Button from "./Button";

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (!isValid(validationErrors)) return;

    setStatus("submitting");
    try {
      // Simulation or actual API call if /api/contact is active
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", location: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center gap-4 bg-surface-container-lowest rounded-xl shadow-md">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
          <span className="material-symbols-outlined text-[32px] text-emerald-600">check_circle</span>
        </div>
        <h3 className="text-headline-sm text-primary-container">Inquiry Submitted Successfully</h3>
        <p className="text-body-md text-on-surface-variant max-w-sm">
          A Jubail estimation lead will review your requirements and contact you within 4 business hours.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")} className="mt-4">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-label-caps text-on-surface-variant">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-input"
            placeholder="Eng. Fahad Al-Qahtani"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-label-code text-error">{errors.name}</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-label-caps text-on-surface-variant">Corporate Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            placeholder="name@company.com.sa"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-label-code text-error">{errors.email}</span>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-label-caps text-on-surface-variant">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="form-input"
            placeholder="+966 5X XXX XXXX"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="text-label-code text-error">{errors.phone}</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-label-caps text-on-surface-variant">Service Required</label>
          <select
            id="service"
            name="service"
            className="form-input"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a service...</option>
            <option value="mep">MEP Contracting &amp; Piping</option>
            <option value="construction">General Construction &amp; Civil</option>
            <option value="waste">Waste Management &amp; Remediation</option>
            <option value="support">Industrial Support Services</option>
            <option value="logistics">Transportation &amp; Heavy Fleet</option>
          </select>
          {errors.service && <span className="text-label-code text-error">{errors.service}</span>}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="location" className="text-label-caps text-on-surface-variant">Project Location / Jubail Area</label>
        <input
          id="location"
          name="location"
          type="text"
          className="form-input"
          placeholder="e.g., Jubail 2, Ras Al-Khair, Tanajib, Royal Commission Area"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-label-caps text-on-surface-variant">Message &amp; Scope Overview</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="form-textarea"
          placeholder="Provide preliminary project scope, estimated schedule, or procurement specifications..."
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span className="text-label-code text-error">{errors.message}</span>}
      </div>
      {status === "error" && (
        <div className="p-3 bg-error-container text-on-error-container rounded text-body-sm">
          There was an error submitting your request. Please try again or contact us directly.
        </div>
      )}
      <Button
        type="submit"
        disabled={status === "submitting"}
        icon="send"
        className="w-full justify-center mt-2"
      >
        {status === "submitting" ? "Submitting..." : "Send Message & Request Quote"}
      </Button>
    </form>
  );
}
