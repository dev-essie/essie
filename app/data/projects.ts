export type Tech =
  | 'typescript' | 'javascript' | 'react' | 'nextjs' | 'tailwind' | 'vite' | 'python'
  | 'wordpress' | 'streamlit' | 'html' | 'css' | 'telegram' | 'sklearn' | 'resend' | 'anthropic' | 'openai';

export type Project = {
  slug: string;
  name: string;
  category: 'Websites' | 'Apps & Tools' | 'Automation' | 'Research & ML';
  description: string;
  tech: Tech[];
  /** Static screenshot under /public/projects. Missing means a text card is shown instead. */
  image?: string;
  live?: string;
  repo?: string;
};

const github = 'https://github.com/dev-essie/';

/** Order is deliberate: the first seven were chosen by Essie, the rest follow. */
export const projects: Project[] = [
  {slug:'gofame-360',name:'Gofame 360',category:'Websites',description:'A dedicated website built for Gofame 360.',tech:['typescript','react','tailwind'],image:'/projects/gofame-360.jpg',live:'https://www.gofame360.com/'},
  {slug:'propguard',name:'MyPropGuard',category:'Websites',description:'Waitlist landing page for MyPropGuard, automated risk management for CFD prop traders. No EA, no VPS, just rules that enforce themselves.',tech:['nextjs','typescript','tailwind'],image:'/projects/propguard.jpg',live:'https://www.mypropguard.io/'},
  {slug:'marveltech',name:'MarvelTech Hub',category:'Websites',description:'A technology services website showcasing repairs, products, and customer support.',tech:['typescript','react','tailwind'],image:'/projects/marveltech.jpg',live:'https://marveltech-hub-site.vercel.app/',repo:github+'marveltech-hub-site'},
  {slug:'haven-word-church',name:'Haven Word Church',category:'Websites',description:'A welcoming, responsive church website for discovering services, messages, and community activities.',tech:['typescript','react','tailwind'],image:'/projects/haven-word-church.jpg',live:'https://havenwordchurch.com/',repo:github+'Haven_word_church'},
  {slug:'nike',name:'Nike Landing Page',category:'Websites',description:'A recreated Nike landing page with products, reviews, responsive layouts, and animations.',tech:['react','vite','tailwind','javascript'],image:'/projects/nike.jpg',live:'https://nike-landing-page-recreated.vercel.app',repo:github+'Nike-Landing-Page-recreated-'},
  {slug:'positivus',name:'Positivus',category:'Websites',description:'A responsive marketing agency website for services, success stories, and insights.',tech:['react','vite','tailwind','javascript'],image:'/projects/positivus.jpg',live:'https://positivus-landing-page-eta.vercel.app',repo:github+'Positivus-Landing-Page'},
  {slug:'telegram-cell-bot',name:'Telegram Cell Report Bot',category:'Automation',description:'A Telegram bot that captures cell meeting reports in a fixed format and saves them automatically to Google Sheets.',tech:['python','telegram'],image:'/projects/telegram-cell-bot.jpg',repo:github+'Telegram-Cell-Report-Bot'},
  {slug:'algo-trading',name:'Algo Trading with Ighodalo',category:'Websites',description:'A web platform for selling, licensing, and managing MetaTrader 5 Expert Advisors, with payments, user accounts, and license validation.',tech:['nextjs','typescript','tailwind'],image:'/projects/algo-trading-dark.jpg',live:'https://www.algotradingwithighodalo.xyz/',repo:github+'Algo-Trading-With-Ighodalo-Gold-'},
  {slug:'emmanuel-onoja',name:'Emmanuel Onoja Newsletter',category:'Automation',description:'A WordPress newsletter with a custom Resend plugin: email subscription confirmation and an automated first newsletter.',tech:['wordpress','resend'],image:'/projects/emmanuel-onoja.jpg',live:'https://emmanuel-onoja.com/newsletter/'},
  {slug:'genelens',name:'GeneLens',category:'Research & ML',description:'An RNA-seq pipeline: differential expression, GO and KEGG enrichment, ML classification, and AI interpretation, deployed on Streamlit.',tech:['python','streamlit','sklearn','anthropic'],image:'/projects/genelens.jpg',live:'https://genelens.streamlit.app/',repo:github+'GeneLens'},
  {slug:'research-assistant',name:'Research Paper Assistant',category:'Research & ML',description:'An AI-powered tool that summarises academic papers, extracts key insights, and organises research.',tech:['python','streamlit','openai'],live:'https://research-paper-assistant-latsest.streamlit.app/',repo:github+'Research-Paper-Assistant'},
  {slug:'churn-predictor',name:'Customer Churn Predictor',category:'Research & ML',description:'A machine learning model that predicts which customers are likely to leave, with cross-validation and ROC-AUC evaluation.',tech:['python','sklearn','streamlit'],image:'/projects/churn-predictor.jpg',live:'https://customer-churn-predictor-latest.streamlit.app/',repo:github+'CUSTOMER-CHURN-PREDICTOR'},
  {slug:'t2dm-study',name:'T2DM Transcriptomics Study',category:'Research & ML',description:'A computational case study of Type 2 Diabetes liver transcriptomics, built on GeneLens.',tech:['python'],image:'/projects/t2dm-study.jpg',repo:github+'genelens-t2dm-study'},
  {slug:'snake-game',name:'Snake Game',category:'Apps & Tools',description:'A classic arcade snake game: collect food, grow longer, avoid collisions.',tech:['python'],repo:github+'Snake-Game'},
];
