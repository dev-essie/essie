import type {Metadata} from 'next';
import ProjectGallery from '../components/ProjectGallery';
export const metadata:Metadata={title:'Projects',description:'Explore Essie’s websites, automations, and research projects.'};
export default function Projects(){
  return <section className="projects-page"><h1 className="sr-only">Projects</h1><ProjectGallery/></section>;
}
