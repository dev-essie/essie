import type {Metadata} from 'next';
import Link from 'next/link';
import {FiArrowRight, FiFileText} from 'react-icons/fi';
import CertificateGallery, {type Certificate} from '../components/CertificateGallery';
export const metadata:Metadata={title:'Certifications',description:'Essie’s degree and developer certifications.'};

const fcc = 'https://freecodecamp.org/certification/Esther004/';
const certifications: Certificate[] = [
  {title:'Front End Development Libraries',issuer:'freeCodeCamp',date:'April 2025',image:'/certificates/fcc-front-end-libraries.jpg',width:800,height:1590,verify:fcc+'front-end-development-libraries'},
  {title:'JavaScript Algorithms and Data Structures',issuer:'freeCodeCamp',date:'March 2025',image:'/certificates/fcc-javascript-algorithms.jpg',width:800,height:1585,verify:fcc+'javascript-algorithms-and-data-structures-v8'},
  {title:'Responsive Web Design',issuer:'freeCodeCamp',date:'February 2025',image:'/certificates/fcc-responsive-web-design.jpg',width:800,height:1600,verify:fcc+'responsive-web-design'},
  {title:'Complete WordPress Website Developer Course',issuer:'Udemy',date:'September 2024',image:'/certificates/udemy-wordpress.jpg',width:800,height:595},
  {title:'BSc Biochemistry, First Class Honours',issuer:'University of Medical Sciences, Ondo',date:'October 2024',image:'/certificates/bsc-biochemistry.jpg',width:1000,height:1510,file:'/certificates/bsc-biochemistry.pdf'},
];

export default function Certifications(){
  return <section className="projects-page certs-page">
    <h1 className="sr-only">Certifications</h1>
    <CertificateGallery certificates={certifications}/>
    <div className="page-links certs-links"><a href="/Essie-Resume.pdf" target="_blank" rel="noreferrer"><FiFileText aria-hidden="true"/><span>Resume</span></a><Link href="/projects"><span>View projects</span><FiArrowRight aria-hidden="true"/></Link></div>
  </section>;
}
