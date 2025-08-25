// 13

import { useForm } from "../context/FormContext"
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import { useState } from "react";
import TooltipError from "../components/TooltipError";
import emailjs from "emailjs-com";
// import { jsPDF } from "jspdf";
// import formatObject from "../utils/formatObject";
import { generateEmailHtml } from "../utils/objectToHTML";

export default function Contact() {
  const { formData, updateForm } = useForm()
  const [touched, setTouched] = useState(false)

  const isValid = !!formData.email?.trim() && !!formData.whatsapp?.trim()

  const handleNext = (e: React.MouseEvent) => {
    if (!isValid) {
      e.preventDefault()
      setTouched(true)
    }
  }

  // can implement if emailJS paid tiers are purchased
  // function generatePDF(data: Record<string, any>): string {
  //   const doc = new jsPDF();
  //   const formatted = formatObject(data);

  //   let y = 20;
  //   doc.setFontSize(12);
  //   doc.text("Form Submission", 20, y);
  //   y += 10;

  //   Object.entries(formatted).forEach(([label, value]) => {
  //     doc.text(`${label}: ${value}`, 20, y);
  //     y += 10;

  //     if (y > 280) {
  //       doc.addPage();
  //       y = 20;
  //     }
  //   });

  //   // return base64 PDF
  //   return doc.output("datauristring").split(",")[1];
  // }



  const sendEmail = () => {
    // generate pdf string
    //   const pdfBase64 = generatePDF(formData);

    const formattedHTML = generateEmailHtml(formData)

    emailjs
      .send(
        "service_05hr8th",
        "template_i34nh3b",
        {
          name: `${formData.name} ${formData.lastName}`,
          from_email: formData.email,
          message_html: formattedHTML
          // attachments: [
          //   {
          //     name: `trip-builder-${formData.name}.pdf`,
          //     data: pdfBase64,
          //   },
          // ],
        },
        "wDHbHKy9qzm8dOWna"
      )
      .then(() => {
        emailjs.send(
          "service_05hr8th",
          "template_gxg992p",
          {
            name: formData.name,
            to_email: formData.email,
            message_html: formattedHTML,
          },
          "wDHbHKy9qzm8dOWna" // Same public key
        )
      })
      .then(
        () => {
          updateForm({
            name: "",
            lastName: "",
            startDateType: "",
            startDate: undefined,
            tripLength: undefined,
            vibe: [],
            people: undefined,
            startDestination: "",
            startDestinationInput: "",
            endDestination: "",
            endDestinationInput: "",
            transport: [],
            discountedCar: "",
            discountedBus: "",
            discountedCamper: "",
            accomodation: [],
            hostel: [],
            accomodationOther: "",
            activities: [],
            notes: "",
            whatsapp: "",
            email: "",
          });
        },
        () => {
          alert("Message failed to send, try again later");
        }
      );
  };


  return (
    <div className="gap-5 grid m-5 " >
      <Title title="CONTACT DETAILS?" />
      <div className="relative w-full" >
        <input
          placeholder="Email"
          value={formData.email || ""}
          onChange={e => {
            updateForm({ email: e.target.value });
            setTouched(false);
          }}
          className={`p-2 rounded w-full ${touched && !formData.email?.trim()
            ? "!border-2 !border-red-500"
            : "border border-gray-300"
            }`}
        />
        <TooltipError
          show={touched && !formData.email?.trim()}
        />
      </div>
      <div className="relative w-full" >
        <input
          placeholder="WhatsApp Number"
          value={formData.whatsapp || ""}
          onChange={e => {
            updateForm({ whatsapp: e.target.value });
            setTouched(false);
          }}
          className={`p-2 rounded w-full ${touched && !formData.whatsapp?.trim()
            ? "!border-2 !border-red-500"
            : "border border-gray-300"
            }`}
        />
        <TooltipError
          show={touched && !formData.whatsapp?.trim()}
        />
      </div>
      <Next onClick={handleNext} sendEmail={sendEmail} linkTo="/finish" />
      <Previous />
    </div>
  )
}