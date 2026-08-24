const base="https://inlingua-two.vercel.app";

export function SiteStructuredData(){
  const data={
    "@context":"https://schema.org",
    "@graph":[
      {
        "@type":"WebSite",
        "@id":`${base}/#website`,
        url:base,
        name:"inlingua Boston",
        alternateName:["Language School of Boston","inlingua Language School of Boston"],
        publisher:{"@id":`${base}/#organization`},
        inLanguage:"en-US"
      },
      {
        "@type":["Organization","LocalBusiness","EducationalOrganization"],
        "@id":`${base}/#organization`,
        name:"inlingua Boston",
        alternateName:"Language School of Boston",
        url:base,
        logo:{"@type":"ImageObject",url:`${base}/images/inlingua-boston-logo.png`,width:141,height:78},
        image:`${base}/images/hero-language-access.jpg`,
        email:"contact@inlinguabostonma.com",
        telephone:"+1-617-546-5590",
        address:{"@type":"PostalAddress",streetAddress:"36 Baker Road",addressLocality:"Everett",addressRegion:"MA",postalCode:"02149",addressCountry:"US"},
        openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"08:00",closes:"17:00"}]
      },
      {
        "@type":"SiteNavigationElement",
        "@id":`${base}/#primary-navigation`,
        name:["Language Services","Industries","Language Education","Government Contracting","Blog","Contact"],
        url:[`${base}/services`,`${base}/industries`,`${base}/language-education`,`${base}/government-contracting`,`${base}/blog`,`${base}/contact`]
      }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>;
}
