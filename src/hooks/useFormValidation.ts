import { useState } from "react";

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export const useFormValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateName = (name: string): string | undefined => {
    if (!name || name.trim() === "") {
      return "Name darf nicht leer sein";
    }
    if (name.trim().length < 2) {
      return "Name muss mindestens 2 Zeichen lang sein";
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email || email.trim() === "") {
      return "E-Mail darf nicht leer sein";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    }
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone || phone.trim() === "") {
      return "Telefonnummer darf nicht leer sein";
    }
    // Only allow +, numbers, and spaces
    const phoneRegex = /^[\d\s+]+$/;
    if (!phoneRegex.test(phone)) {
      return "Telefonnummer darf nur + und Zahlen enthalten";
    }
    // Remove spaces for length check
    const cleanPhone = phone.replace(/\s/g, "");
    if (cleanPhone.length < 7) {
      return "Telefonnummer ist zu kurz";
    }
    return undefined;
  };

  const validateForm = (formData: FormData): boolean => {
    const newErrors: ValidationErrors = {};

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);

    if (nameError) newErrors.name = nameError;
    if (emailError) newErrors.email = emailError;
    if (phoneError) newErrors.phone = phoneError;

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const clearErrors = () => {
    setErrors({});
  };

  const clearError = (field: keyof ValidationErrors) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  return {
    errors,
    validateForm,
    validateName,
    validateEmail,
    validatePhone,
    clearErrors,
    clearError,
  };
};