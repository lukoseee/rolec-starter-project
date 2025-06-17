declare module "react-faq-component" {
  const FAQ: React.FC<{
    data: { rows: { title: string; content: string }[] };
    styles?: Record<string, string>;
    config?: { animate?: boolean };
  }>;
  export default FAQ;
}