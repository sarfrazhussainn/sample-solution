export type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
};

export type FormErrors = Partial<Record<keyof FormData, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-().]{7,20}$/;

export function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Full name is required (min 2 characters).";
  }
  if (!data.email.trim() || !EMAIL_RE.test(data.email)) {
    errors.email = "A valid email address is required.";
  }
  if (!data.phone.trim() || !PHONE_RE.test(data.phone)) {
    errors.phone = "A valid phone number is required.";
  }
  if (!data.service) {
    errors.service = "Please select a service.";
  }
  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = "Please provide a brief project overview (min 10 characters).";
  }
  return errors;
}

export function isValid(errors: FormErrors): boolean {
  return Object.keys(errors).length === 0;
}
