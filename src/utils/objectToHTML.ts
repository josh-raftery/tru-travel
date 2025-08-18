// src/utils/objectToHTML.ts

// We still import the interface to know the "shape" and all possible keys.
import type { IFormData } from "../context/FormContext";

/**
 * Generates a styled HTML string from a form data object for an email body.
 * This function is flexible and handles potentially undefined or null values.
 *
 * @param {Partial<IFormData>} formData The form data object from your context.
 * @returns {string} An HTML string representing the form data.
 */
// The ONLY CHANGE is here: We use `Partial<IFormData>`.
// This tells TypeScript: "Expect an object that might have some or all of
// the properties of IFormData, and any of them could be undefined."
// This perfectly matches the type of your actual formData object!
export function generateEmailHtml(formData: Partial<IFormData>): string {

  // This definition doesn't need to change. It's our list of nice names.
  const fieldLabels: Partial<Record<keyof IFormData, string>> = {
    name: 'First Name',
    lastName: 'Last Name',
    startDateType: 'Start Date Type',
    startDate: 'Start Date',
    tripLength: 'Trip Length (weeks)',
    vibe: 'Vibe',
    people: 'Number of People',
    startDestination: 'First Stop',
    startDestinationInput: 'First Stop (custom)',
    endDestination: 'Last Stop',
    endDestinationInput: 'Last Stop (custom)',
    transport: 'Transport Preference',
    discountedCar: 'Interested in Discounted Car?',
    discountedBus: 'Interested in Discounted Bus?',
    discountedCamper: 'Interested in Discounted Camper?',
    accomodation: 'Accommodation Preferences',
    hostel: 'Hostel Preferences',
    accomodationOther: 'Accomodation Preferences (custom)',
    activities: 'Preferred Activities',
    notes: 'Additional Notes',
    whatsapp: 'WhatsApp Number',
    email: 'Email Address'
  };

  const emailBodyParts: string[] = [];

  // The rest of the function logic is already built to handle missing
  // values, so it works perfectly with the new, more flexible type.
  for (const [key, value] of Object.entries(formData)) {
    if (value === null || value === undefined || value === '') {
      continue;
    }
    if (Array.isArray(value) && value.length === 0) {
      continue;
    }

    const label = fieldLabels[key as keyof IFormData] || key;
    
    let formattedValue: string;

    if (Array.isArray(value)) {
      formattedValue = value.join(', ');
    } else if (typeof value === 'boolean') {
      formattedValue = value ? 'Yes' : 'No';
    } else if (value instanceof Date) {
      formattedValue = value.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } else {
      formattedValue = String(value);
    }

    const rowHtml = `
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">${label}</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${formattedValue}</td>
      </tr>
    `;
    emailBodyParts.push(rowHtml);
  }

  if (emailBodyParts.length === 0) {
    return "<p>The user submitted an empty form.</p>";
  }

  return `
    <h2 style="color: #333;">New Trip Enquiry</h2>
    <p>You have received a new form submission with the following details:</p>
    <table style="width: 100%; border-collapse: collapse; font-family: sans-serif;">
      <tbody>
        ${emailBodyParts.join('')}
      </tbody>
    </table>
  `;
}