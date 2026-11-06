import type {Metadata} from 'next';
import Link from 'next/link';
import {FiArrowRight, FiExternalLink, FiGithub} from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Education, undergraduate thesis, GeneLens RNA-seq tooling, and lab experience — Essie Alabi.',
};

const external = {
  genelensApp: 'https://genelens.streamlit.app/',
  genelensRepo: 'https://github.com/dev-essie/GeneLens',
  t2dmRepo: 'https://github.com/dev-essie/genelens-t2dm-study',
} as const;

export default function Research() {
  return <section className="page research-page">
    <h1>RESEARCH</h1>
    <p className="lede">For professors and panels: training in biochemistry, wet-lab context, and software I built for public RNA-seq data — with clear limits on what was analysed on real GEO samples versus demonstration workflows.</p>

    <div className="research-section">
      <h2>Education</h2>
      <ul className="research-list">
        <li><strong>BSc Biochemistry</strong>, First Class Honours — University of Medical Sciences (UNIMED), Ondo, Nigeria.</li>
        <li>Graduated <strong>22 October 2024</strong>. CGPA <strong>4.64 / 5.00</strong>. Dean&apos;s List <strong>all eight semesters</strong>.</li>
      </ul>
    </div>

    <div className="research-section">
      <h2>Undergraduate thesis</h2>
      <p className="research-text"><strong>Topic:</strong> Antioxidant effect of phytol in diabetic liver injury.</p>
      <p className="research-text"><strong>Supervisor:</strong> Dr. A. J. Salemcity.</p>
      <p className="research-text"><strong>Design:</strong> Controlled <em>in vivo</em> study — 30 male Wistar rats, five groups.</p>
      <p className="research-text"><strong>Oxidative-stress panel:</strong> GSH, CAT, SOD, GPx, GST, MDA.</p>
      <p className="research-text"><strong>Outcome:</strong> Dose-dependent hepatoprotection with significant increases in GPx and SOD activity (<em>P</em> &lt; 0.001).</p>
    </div>

    <div className="research-section">
      <h2>GeneLens</h2>
      <p className="research-text">End-to-end web app for RNA-seq workflows on <strong>public GEO</strong> data: differential expression (Welch <em>t</em>-test, Benjamini–Hochberg FDR), GO and KEGG enrichment via Enrichr, Plotly visuals, and ML with careful handling of feature-selection leakage.</p>
      <p className="research-text">On real public RNA-seq <strong>GSE152418</strong> (17 COVID-19 vs 17 healthy), a leakage-free Random Forest pipeline (in-fold DE gene selection, honest 5-fold cross-validation) reached mean ROC-AUC <strong>0.983 ± 0.033</strong> after fixing selection leakage that had inflated AUC to 1.0.</p>
      <div className="research-actions">
        <a className="research-link" href={external.genelensApp} target="_blank" rel="noreferrer">Live app <FiExternalLink aria-hidden="true"/></a>
        <a className="research-link" href={external.genelensRepo} target="_blank" rel="noreferrer">Source <FiGithub aria-hidden="true"/></a>
      </div>
    </div>

    <div className="research-section">
      <h2>T2DM workflow case study</h2>
      <p className="research-text">Repository <a href={external.t2dmRepo} target="_blank" rel="noreferrer">genelens-t2dm-study</a> is a <strong>workflow case study</strong> on a <strong>curated synthetic demonstration dataset</strong> (226 genes × 13 samples) <strong>modelled on GSE15653</strong>. It is <strong>not</strong> real patient expression data and does <strong>not</strong> validate, confirm, or report downregulation in human T2DM liver. It shows how GeneLens maps thesis antioxidant enzymes (<strong>SOD2, CAT, GPX1, GSR</strong>) to genes, GO terms, and KEGG pathways for teaching and reproducibility.</p>
    </div>

    <div className="research-section">
      <h2>Lab experience</h2>
      <p className="research-text"><strong>Genetics Laboratory, University College Hospital (UCH), Ibadan</strong> — internship, 2022–2023 (bench and lab practice in a hospital genetics setting).</p>
    </div>

    <div className="page-links research-page-links">
      <Link href="/"><span>Home</span><FiArrowRight aria-hidden="true"/></Link>
      <Link href="/projects"><span>Projects</span><FiArrowRight aria-hidden="true"/></Link>
    </div>
  </section>;
}
