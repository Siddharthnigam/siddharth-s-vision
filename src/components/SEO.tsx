import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

const SEO = ({
  title = "Siddharth Nigam | AI-Driven Full Stack Developer",
  description = "Portfolio of Siddharth Nigam, a Full Stack Developer specializing in AI integration, React, and Django. Based in Ujjain.",
  path = "",
}: SEOProps) => {
  const url = `https://siddharthnigam.dev${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Siddharth Nigam, Full Stack Developer, React, Django, Python, AI, Portfolio" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
