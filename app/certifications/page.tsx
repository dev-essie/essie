import type {Metadata} from 'next';
import Link from 'next/link';
import {FiArrowRight, FiFileText} from 'react-icons/fi';
import CertificateGallery, {type Certificate} from '../components/CertificateGallery';
export const metadata:Metadata={title:'Certifications',description:'Essie’s degree and developer certifications.'};

const certifications: Certificate[] = [
  {title:'Front End Development Libraries',issuer:'freeCodeCamp',date:'April 2025',image:'/certificates/fcc-front-end-libraries.jpg?v=privacy-20261001',width:800,height:1590},
  {title:'JavaScript Algorithms and Data Structures',issuer:'freeCodeCamp',date:'March 2025',image:'/certificates/fcc-javascript-algorithms.jpg?v=privacy-20261001',width:800,height:1585},
  {title:'Responsive Web Design',issuer:'freeCodeCamp',date:'February 2025',image:'/certificates/fcc-responsive-web-design.jpg?v=privacy-20261001',width:800,height:1600},
  {title:'Complete WordPress Website Developer Course',issuer:'Udemy',date:'September 2024',image:'/certificates/udemy-wordpress.jpg?v=privacy-20261001',width:800,height:595},
  {title:'BSc Biochemistry, First Class Honours',issuer:'University of Medical Sciences, Ondo',date:'October 2024',image:'/certificates/bsc-biochemistry.jpg?v=privacy-20261001',width:1000,height:1510,file:'/certificates/bsc-biochemistry.pdf?v=privacy-20261001'},
];

export default function Certifications(){
  return <section className="projects-page certs-page">
    <h1 className="sr-only">Certifications</h1>
    <CertificateGallery certificates={certifications}/>
    <div className="page-links certs-links"><a href="/Essie-Resume.pdf?v=privacy-20261001" target="_blank" rel="noreferrer"><FiFileText aria-hidden="true"/><span>Resume</span></a><Link href="/projects"><span>View projects</span><FiArrowRight aria-hidden="true"/></Link></div>
  </section>;
}
