import { jsPDF } from "jspdf";
import formatObject from "./formatObject";

export default function generatePDF(data: Record<string, any>): void {
  const doc = new jsPDF();
  const formatted = formatObject(data);

  let y = 20; // vertical position
  doc.setFontSize(12);
  doc.text("Form Submission", 20, y);
  y += 10;

  Object.entries(formatted).forEach(([label, value]) => {
    doc.text(`${label}: ${value}`, 20, y);
    y += 10;

    // prevent running off the page
    if (y > 280) {
      doc.addPage();
      y = 20;
    }
  });

  // download as "form.pdf"
  doc.save("form.pdf");
}
