// @Author:XYH
// @Date:2025-11-23
// @Description: SEO 组件，基于 react-helmet-async，统一设置页面标题和基础 Meta 信息

import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description?: string;
  path?: string;
}

export function Seo({ title, description, path }: SeoProps) {
  const fullTitle = title ? `${title} | Emoji Combiner` : "Emoji Combiner";
  const url = path ? `https://your-domain.com${path}` : "https://your-domain.com/";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
    </Helmet>
  );
}
