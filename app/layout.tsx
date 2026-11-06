import type { Metadata } from 'next';
import SiteShell from './components/SiteShell';
import './globals.css';

export const metadata: Metadata = {
  title: {default:'Essie | Software & bioinformatics',template:'%s | Essie'},
  icons:{icon:[{url:'/favicon-32.png?v=e-dot',type:'image/png',sizes:'32x32'},{url:'/favicon.png?v=e-dot',type:'image/png',sizes:'256x256'},{url:'/favicon-512.png?v=e-dot',type:'image/png',sizes:'512x512'}],shortcut:'/favicon.png?v=e-dot',apple:'/favicon-180.png?v=e-dot'},
  description:'Software developer and bioinformatics builder: web platforms, ML tools for gene-expression data, and RNA-seq apps. Explore work by Essie.',
  openGraph:{title:'Essie | Software & bioinformatics',description:'Web platforms and ML tools for gene-expression data.',type:'website'},
};


export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
  return <html lang="en">
    <head>
      <meta name="theme-color" content="#ffffff"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
    </head>
    <body><SiteShell>{children}</SiteShell></body>
  </html>;
}
