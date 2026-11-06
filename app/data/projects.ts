export type Tech =
  | 'typescript' | 'javascript' | 'react' | 'nextjs' | 'tailwind' | 'vite' | 'python'
  | 'wordpress' | 'streamlit' | 'html' | 'css' | 'telegram' | 'sklearn' | 'resend' | 'anthropic' | 'openai'
  | 'supabase' | 'postgres' | 'googlesheets' | 'plotly' | 'go' | 'remix';

export const categories = ['Client platforms', 'Automation', 'AI & data tools', 'Front-end builds'] as const;
export type Category = typeof categories[number];

/** Used to split home-page highlights without changing the Projects carousel categories. */
export type ProjectKind = 'software' | 'research';

export type Project = {
  slug: string;
  name: string;
  category: Category;
  kind: ProjectKind;
  /** What it is, in one short line. */
  description: string;
  /** What Essie did and the outcome. */
  impact: string;
  tech: Tech[];
  /** Static screenshot under /public/projects. Missing means a text card is shown instead. */
  image?: string;
  live?: string;
  repo?: string;
};

const github = 'https://github.com/dev-essie/';
const shot = (slug: string) => `/projects/${slug}.jpg`;

/** Order is deliberate: the first seven were chosen by Essie, the rest follow. */
export const projects: Project[] = [
  {slug:'algo-trading',name:'Algo Trading with Ighodalo',category:'Client platforms',kind:'software',description:'Platform for selling and licensing MetaTrader 5 Expert Advisors.',impact:'Sole developer (April 2025 – October 2026): licensing API, payment flow, user accounts, and the live site at algotradingwithighodalo.xyz. Selling to traders.',tech:['nextjs','typescript','tailwind','supabase','postgres'],image:shot('algo-trading-dark'),live:'https://www.algotradingwithighodalo.xyz/',repo:github+'Algo-Trading-With-Ighodalo-Gold-'},
  {slug:'paycrest',name:'Paycrest',category:'Client platforms',kind:'software',description:'Open-source contributions for a stablecoin-to-fiat settlement protocol serving Africa.',impact:'Software Engineer Intern (October 2026 – December 2026): documentation, Remix/TypeScript dashboard work, and Go on the settlement aggregator across public repos.',tech:['typescript','remix','go'],live:'https://paycrest.io/',repo:'https://github.com/paycrest/aggregator'},
  {slug:'gofame-360',name:'Gofame 360',category:'Client platforms',kind:'software',description:'Marketing site for Gofame 360, a media strategy and influence agency.',impact:'Designed and built the site end to end, from the campaign-led landing page to WhatsApp lead capture and deployment.',tech:['typescript','react','tailwind'],image:shot('gofame-360'),live:'https://www.gofame360.com/'},
  {slug:'propguard',name:'MyPropGuard',category:'Client platforms',kind:'software',description:'Waitlist landing page for MyPropGuard, automated risk management for CFD prop traders.',impact:'Built the page and the founding-cohort sign-up flow; live and collecting waitlist entries ahead of launch.',tech:['nextjs','typescript','tailwind'],image:shot('propguard'),live:'https://www.mypropguard.io/'},
  {slug:'marveltech',name:'MarvelTech Hub',category:'Client platforms',kind:'software',description:'Services website for MarvelTech Hub: tech repairs, products, and support.',impact:'Built and deployed the site with service, product, and support sections so customers can find and request repairs.',tech:['typescript','react','tailwind'],image:shot('marveltech'),live:'https://marveltech-hub-site.vercel.app/',repo:github+'marveltech-hub-site'},
  {slug:'haven-word-church',name:'Haven Word Church',category:'Client platforms',kind:'software',description:'Church website for Haven Word Church: services, messages, events, and giving.',impact:'Designed and shipped the site, including the animated welcome intro and upcoming-events section; maintain it on request.',tech:['typescript','react','tailwind'],image:shot('haven-word-church'),live:'https://havenwordchurch.com/',repo:github+'Haven_word_church'},
  {slug:'nike',name:'Nike Landing Page',category:'Front-end builds',kind:'software',description:'Recreation of the Nike product landing page.',impact:'Rebuilt the design from scratch in React, Vite, and Tailwind: products, reviews, animations, fully responsive.',tech:['react','vite','tailwind','javascript'],image:shot('nike'),live:'https://nike-landing-page-recreated.vercel.app',repo:github+'Nike-Landing-Page-recreated-'},
  {slug:'positivus',name:'Positivus',category:'Front-end builds',kind:'software',description:'Recreation of the Positivus marketing agency landing page.',impact:'Rebuilt the design in React and Tailwind as a responsive, pixel-close build of the reference.',tech:['react','vite','tailwind','javascript'],image:shot('positivus'),live:'https://positivus-landing-page-eta.vercel.app',repo:github+'Positivus-Landing-Page'},
  {slug:'telegram-cell-bot',name:'Telegram Cell Report Bot',category:'Automation',kind:'software',description:'Telegram bot that collects cell meeting reports.',impact:'Built it end to end: parses a fixed report format, validates it, and writes each report to Google Sheets. Used by a 31-member leaders group.',tech:['python','telegram','googlesheets'],image:shot('telegram-cell-bot'),repo:github+'Telegram-Cell-Report-Bot'},
  {slug:'emmanuel-onoja',name:'Emmanuel Onoja Newsletter',category:'Automation',kind:'software',description:'WordPress newsletter for author Emmanuel Onoja.',impact:'Wrote a custom Resend plugin: email confirmation on sign-up and an automated first issue, replacing manual sends.',tech:['wordpress','resend'],image:shot('emmanuel-onoja'),live:'https://emmanuel-onoja.com/newsletter/'},
  {slug:'genelens',name:'GeneLens',category:'AI & data tools',kind:'research',description:'End-to-end RNA-seq analysis web app for public GEO data: DE, enrichment, Plotly, ML.',impact:'Built the pipeline and UI; applied to real public RNA-seq (GSE152418) with Welch tests, BH-FDR, GO/KEGG via Enrichr, and leakage-free Random Forest (in-fold DE selection; honest 5-fold CV AUC 0.983 ± 0.033 after fixing selection leakage). Deployed on Streamlit Cloud.',tech:['python','streamlit','sklearn','plotly','anthropic'],image:shot('genelens'),live:'https://genelens.streamlit.app/',repo:github+'GeneLens'},
  {slug:'churn-predictor',name:'Customer Churn Predictor',category:'AI & data tools',kind:'research',description:'Predicts which customers are likely to leave.',impact:'Trained Random Forest and Logistic Regression models with cross-validation and ROC-AUC evaluation; shipped as a Streamlit app.',tech:['python','sklearn','streamlit'],image:shot('churn-predictor'),live:'https://customer-churn-predictor-latest.streamlit.app/',repo:github+'CUSTOMER-CHURN-PREDICTOR'},
  {slug:'t2dm-study',name:'T2DM workflow (GeneLens case study)',category:'AI & data tools',kind:'research',description:'Workflow demonstration on curated synthetic data modelled on GEO design.',impact:'Case study repo: synthetic demo matrix (226 genes × 13 samples) inspired by GSE15653 to show how GeneLens maps thesis antioxidant enzymes (SOD2, CAT, GPX1, GSR) to genes, GO terms, and KEGG pathways—not an analysis of real patient liver expression.',tech:['python','plotly'],image:shot('t2dm-study'),repo:github+'genelens-t2dm-study'},
  {slug:'snake-game',name:'Snake Game',category:'Front-end builds',kind:'software',description:'Classic arcade snake game with settings and levels.',impact:'Built movement, growth, collision, scoring, and difficulty levels from scratch; playable with arrow keys or swipe.',tech:['python'],image:shot('snake-game'),repo:github+'Snake-Game'},
  {slug:'research-assistant',name:'Research Paper Assistant',category:'AI & data tools',kind:'research',description:'AI assistant that summarises academic papers.',impact:'Built the PDF parsing and OpenAI summarisation flow and shipped it as a Streamlit app.',tech:['python','streamlit','openai'],image:shot('research-assistant'),live:'https://research-paper-assistant-latsest.streamlit.app/',repo:github+'Research-Paper-Assistant'},
];

/** Shown on the home page, in this order. */
export const featuredSoftwareSlugs = ['algo-trading', 'propguard', 'paycrest'] as const;
export const featuredResearchSlugs = ['genelens', 't2dm-study', 'research-assistant'] as const;
export const featuredSoftware = featuredSoftwareSlugs.map(slug => projects.find(p => p.slug === slug)!).filter(Boolean);
export const featuredResearch = featuredResearchSlugs.map(slug => projects.find(p => p.slug === slug)!).filter(Boolean);
