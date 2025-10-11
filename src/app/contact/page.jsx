import ContactPage from "../../pages/ContactPage";

export async function generateMetadata() {
  return {
    title: "Contact",
  }
}

export default function Contact() {
  return <ContactPage />;
}
