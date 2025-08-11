/*
  Personal Homepage — React + Tailwind (Aesthetic Upgrade)
  -------------------------------------------------
  Version 3: Increased horizontal padding inside content boxes
  for better spacing and readability.
*/

import { useEffect, useMemo, useRef, useState } from "react";

// ----- Main Component -----
export default function HomePage() {
  // ----- THEME -----
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // ----- NAV (ids & labels) -----
  const nav = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "research-experience", label: "Research Experience" },
    { id: "work-experience", label: "Work Experience" },
    { id: "skills", label: "Skills" },
    { id: "awards", label: "Awards" },
    { id: "publications", label: "Publications" },
    { id: "presentations", label: "Presentations" },
    { id: "contact", label: "Contact" },
  ];

  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  // ----- LINKS -----
  const year = new Date().getFullYear();
  const mail = "woojinl@usc.edu";
  const scholarUrl = "https://scholar.google.co.kr/citations?hl=en&user=mln2p5EAAAAJ&view_op=list_works&sortby=pubdate";
  const githubUrl = "https://github.com/wlee0224";
  const linkedinUrl = "https://www.linkedin.com/in/woojin-lee/";
  const orcidUrl = "https://orcid.org/0000-0002-8531-0301";
  const cvUrl = "/assets/CV_Woojin_Lee.pdf";

  // ----- HERO BG -----
  const heroBg = useMemo(
    () => ({
      backgroundImage:
        "radial-gradient(60% 50% at 50% 10%, rgba(59,130,246,0.15), transparent 60%), radial-gradient(40% 40% at 90% 10%, rgba(20,184,166,0.18), transparent 60%), radial-gradient(50% 40% at 10% 20%, rgba(236,72,153,0.16), transparent 60%)",
    }),
    []
  );

  // ----- RENDER -----
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased dark:bg-slate-950 dark:text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 bg-white/75 dark:bg-slate-950/75 border-b border-slate-200/60 dark:border-slate-800/40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#home" className="font-bold tracking-tight text-slate-900 dark:text-white text-lg">
            Woojin (Danny) Lee
          </a>
          <div className="hidden gap-1 md:flex">
            {nav.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={
                  "rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:bg-slate-900/10 dark:hover:bg-white/10 " +
                  (active === id ? "bg-slate-900/10 dark:bg-white/10 text-teal-600 dark:text-teal-400" : "text-slate-600 dark:text-slate-300")
                }
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={cvUrl}
              className="hidden rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 md:inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
                <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
              </svg>
              Download CV
            </a>
            <button
              aria-label="Toggle dark mode"
              onClick={() => setDark((d) => !d)}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white w-9 h-9 text-sm font-medium shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
            >
              {dark ? "🌙" : "☀️"}
            </button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" style={heroBg} className="relative overflow-hidden border-b dark:border-slate-800/40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white dark:via-slate-950/40 dark:to-slate-950" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:py-28 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
              <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
              Computational Chemist · GPCR · Physical Organic Chemistry
            </div>
            <h1 className="text-balance text-4xl font-extrabold tracking-tighter sm:text-6xl bg-gradient-to-b from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              WOOJIN LEE
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg">
              Los Angeles, CA 90005 | <a href={`mailto:${mail}`} className="underline hover:text-teal-600 dark:hover:text-teal-400 transition-colors">{mail}</a> | <a href={linkedinUrl} target="_blank" rel="noreferrer" className="underline hover:text-teal-600 dark:hover:text-teal-400 transition-colors">linkedin.com/in/woojin-lee</a>
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href={githubUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors">GitHub</a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors">LinkedIn</a>
              <a href={orcidUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors">ORCID</a>
              <a href={scholarUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors">Scholar</a>
              <a href={cvUrl} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors md:hidden">Download CV</a>
            </div>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <main className="mx-auto max-w-7xl px-4 py-14 md:px-6">

      {/* EDUCATION */}
      <section id="education" className="py-10 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">EDUCATION</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-slate-50/50 py-6 px-8 dark:border-slate-800 dark:bg-slate-900/50">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-base">UNIVERSITY OF CALIFORNIA, LOS ANGELES</h3>
              <span className="text-sm text-slate-500">Los Angeles, CA</span>
            </header>
            <p className="mt-2 font-medium">Doctor of Philosophy, Chemistry</p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <li>Research Advisors: Prof. Kendall N. Houk and Prof. Hosea M. Nelson</li>
              <li>Graduated: September 2023</li>
              <li>Thesis: Exploring Reaction Mechanisms of Short-Lived Carbocation and Radical Intermediates via Synergetic Modern Computational Methods and Collaborative Experiments</li>
            </ul>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50/50 py-6 px-8 dark:border-slate-800 dark:bg-slate-900/50">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-base">UNIVERSITY OF CALIFORNIA, BERKELEY</h3>
              <span className="text-sm text-slate-500">Berkeley, CA</span>
            </header>
            <p className="mt-2 font-medium">Bachelor of Science, Chemistry</p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <li>Research Advisor: Prof. F. Dean Toste</li>
              <li>Graduated: May 2016</li>
            </ul>
          </article>
        </div>
      </section>

      {/* RESEARCH EXPERIENCE */}
      <section id="research-experience" className="py-10 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">RESEARCH EXPERIENCE</h2>
        <div className="mt-8 space-y-8">
          <article className="rounded-xl border border-slate-200 bg-slate-50/50 py-6 px-8 dark:border-slate-800 dark:bg-slate-900/50">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">UNIVERSITY OF CALIFORNIA, LOS ANGELES</h3>
              <span className="text-sm text-slate-500">Los Angeles, CA</span>
            </header>
            <div className="mt-1 text-sm font-medium text-slate-500">Graduate Research Assistant — Oct 2018 – Oct 2023</div>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <li>Utilized Density Functional Theory (DFT) and Molecular Dynamics (MD) simulations to understand the behavior and reactivities of short-lived carbocation and radical intermediates</li>
              <li>Enhanced the reliability and robustness of the computational findings through collaborative experiments</li>
              <li>Collaborated with Professor Isaac J. Krauss (Brandeis University), Professor Jiannan Zhao (Dalian University of Technology), and Professor Massimo Bietti (University of Rome, Tor Vergata)</li>
              <li>Designed experimental mechanistic studies for collaborators to corroborate the computational predictions</li>
              <li>Found the timing difference in non-classical carbocation formation from exo- and endo-2-norbornyl brosylates in the ‘Molecular Dynamics of the Norbornyl Cation and Its Generation in Winstein-Trifan Solvolysis’ project</li>
              <li>Investigated C–H insertion reactions of vinyl carbocations in the ‘Computational Exploration of the Nature of Li+-Ureide Anion Catalysis on Formation of Highly Reactive Vinyl Carbocations and Subsequent C–C Bond Forming Reactions’ project</li>
              <li>Determined an oxidation potential through in silico modeling to provide support for further experimental studies in the ‘Electrochemical Fluorination of Vinyl Boronates Through Donor-Stabilized Vinyl Carbocation Intermediates’ project</li>
              <li>Uncovered the origin of the mechanistic switch from homoallylation to cyclopropylcarbinylation in the ‘Mechanistic Switch from Homoallylation to Cyclopropylcarbinylation of Aldehydes’ project</li>
              <li>Elucidated the full reaction pathway in the ‘Diastereoselective Radical Aminoacylation of Olefins through N-Heterocyclic Carbene Catalysis’ project and identified rate- and diastereoselectivity-determining steps</li>
              <li>Discovered evidence of divergent radical and cationic pathways in dioxirane oxygenation in the ‘Interplay Between Radical and Cationic Pathways in C(sp3)–H Bond Oxygenation of Bicyclic and Spirocyclic Hydrocarbons by Dioxiranes’ project</li>
              <li>Conducted experimental research on vinyl cation C–H insertion reactions and Lewis-acid catalyst development</li>
              <li>Developed a lithium urea catalyst in the ‘Urea-Catalyzed Vinyl Carbocation Formation Enables Mild Functionalization of Unactivated C–H Bonds’ project and established a new substrate class, demonstrating vinyl cation compatibility with the Lewis basic and heteroatom-containing substrates</li>
              <li>Extended the use of QM modeling, molecular docking, and conformational analysis in biological applications</li>
            </ul>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50/50 py-6 px-8 dark:border-slate-800 dark:bg-slate-900/50">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">Graduate Teaching Assistant</h3>
              <span className="text-sm text-slate-500">Oct 2018 – Dec 2022</span>
            </header>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <li>Coordinated with professors and fellow TAs to instruct, guide, and support +200 undergraduate students in chemistry courses</li>
              <li>Educated students on essential organic chemistry concepts, laboratory techniques, and safety practices</li>
              <li>TA Classes: Practical and Theoretical Introductory Organic Synthesis, Organic Chemistry Laboratory, General and Organic Chemistry Laboratory, Organic Reactions and Pharmaceuticals, Organic Structural Methods</li>
            </ul>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50/50 py-6 px-8 dark:border-slate-800 dark:bg-slate-900/50">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">CALIFORNIA INSTITUTE OF TECHNOLOGY</h3>
              <span className="text-sm text-slate-500">Pasadena, CA</span>
            </header>
            <div className="mt-1 text-sm font-medium text-slate-500">Visiting Student Researcher — Oct 2021 – Sep 2022</div>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <li>Performed computational experiments in the ‘Cationic Claisen-Type Cascade Reactions Enabled by Vinyl Cation’ project, finding cationic [3,3] and [1,3] rearrangements</li>
              <li>Conducted computational mechanistic studies in the ‘Accessing Medium-sized Rings via Vinyl Carbocation Intermediates’ project, revealing canonical Friedel–Crafts reactions involved in medium-sized ring formation of vinyl cations</li>
            </ul>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50/50 py-6 px-8 dark:border-slate-800 dark:bg-slate-900/50">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">UNIVERSITY OF CALIFORNIA, BERKELEY</h3>
              <span className="text-sm text-slate-500">Berkeley, CA</span>
            </header>
            <div className="mt-1 text-sm font-medium text-slate-500">Research Assistant in Professor F. Dean Toste’s research group — Jan 2016 – May 2017</div>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <li>Investigated strategies for stabilizing Oxo-Re catalyst in the ‘Hydrogen Gas-Mediated Deoxydehydration/Hydrogenation of Sugar Acids: Catalytic Conversion of Glucarates to Adipates’ project, achieving 72% yield in the aqueous adipic acid synthesis</li>
              <li>Conducted mechanistic studies to reveal substrate selectivity determined by the electronic effects</li>
              <li>Developed laboratory skills in organic synthesis, purification, and characterization</li>
            </ul>
          </article>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="work-experience" className="py-10 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">WORK EXPERIENCE</h2>
        <div className="mt-8 space-y-8">
          <article className="rounded-xl border border-slate-200 bg-slate-50/50 py-6 px-8 dark:border-slate-800 dark:bg-slate-900/50">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">UNIVERSITY OF SOUTHERN CALIFORNIA</h3>
              <span className="text-sm text-slate-500">Los Angeles, CA</span>
            </header>
            <div className="mt-1 text-sm font-medium text-slate-500">Postdoctoral Research Associate in Professor Vsevolod “Seva” Katritch research group — Oct 2023 – Present</div>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <li>Conducted computational drug discovery research to target prostaglandin D2 receptor 1 (DP1) using structure-based virtual screening of 3 trillion make-on-demand compounds from the Enamine REAL database</li>
              <li>Prioritized 104 compounds for synthesis and in vitro validation through ligand property modeling, multi-parameter filtering (MPF), similarity deduplication, chemical novelty filter, diversity-based down-sampling, ultimately revealing 10 validated DP1 antagonists and agonists</li>
              <li>Performed GPCR homology modeling and molecular dynamics (MD) simulations to investigate receptor–ligand interactions and conformational dynamics of DP1</li>
              <li>Collaborate with Prof. Vadim Cherezov (University of Southern California) to integrate computational predictions with structural and pharmacological studies</li>
            </ul>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50/50 py-6 px-8 dark:border-slate-800 dark:bg-slate-900/50">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">GENENTECH, INC</h3>
              <span className="text-sm text-slate-500">South San Francisco, CA</span>
            </header>
            <div className="mt-1 text-sm font-medium text-slate-500">Medicinal Chemist Intern in the Small Molecule Discovery Chemistry Department — May 2017 – Sep 2017</div>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <li>Formulated a synthetic process for highly branched dendrimer drug conjugates</li>
              <li>Optimized a synthetic route to active pharmaceutical ingredient (API)</li>
              <li>Acquired comprehensive knowledge of pharmaceutical research, encompassing target synthesis, biologically-active molecule synthesis, and physicochemical analysis</li>
            </ul>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50/50 py-6 px-8 dark:border-slate-800 dark:bg-slate-900/50">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">REPUBLIC OF KOREA ARMY</h3>
              <span className="text-sm text-slate-500">South Korea</span>
            </header>
            <div className="mt-1 text-sm font-medium text-slate-500">Squad Leader & Operation Staff, 53rd Ammunition Battalion Headquarters — Apr 2009 – Feb 2011</div>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <li>Achieved the rank of Sergeant and received an honorable discharge in February 2011</li>
              <li>Led a team of 10 soldiers during training and field operations as a squad leader; ensured mission success and safety</li>
              <li>Coordinated logistical and operational support under high-pressure conditions</li>
            </ul>
          </article>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-10 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">SKILLS</h2>
        <ul className="mt-6 list-disc pl-6 space-y-2.5 text-slate-600 dark:text-slate-300">
          <li><b>Computational Chemistry and Biology:</b> Proficient in molecular dynamics (GROMACS, Progdyn Suite), quantum mechanical atomistic simulations (Gaussian, ORCA), and molecular docking (Molsoft ICM-Pro, AutoDock Vina)</li>
          <li><b>Computer-Aided Drug Design:</b> Skilled in high-throughput virtual ligand screening with a focus on structure-based drug discovery and early-stage hit identification (Molsoft ICM-Pro, V-SYNTHES)</li>
          <li><b>Data-Driven Drug Design:</b> Skilled in Python, Jupyter Notebook, RDKit, and scikit-learn for predictive modeling, cheminformatics, and QSAR analysis using molecular descriptors and machine learning (XGBoost, CatBoost, LightGBM)</li>
          <li><b>Conformational and Energetic Analysis:</b> Utilized Molsoft ICM-Pro, Spartan 18, and XTB-CREST to generate conformational ensembles and calculate relative energies, supporting structure–activity relationship (SAR) studies and ligand optimization strategies</li>
          <li><b>High-Performance Computing (HPC):</b> Experienced with Linux-based HPC environments (UCLA IDRE, NSF XSEDE, USC CARC) to run large-scale simulations, manage resources, and perform parallelized workflows</li>
        </ul>
      </section>

      {/* AWARDS */}
      <section id="awards" className="py-10 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">AWARDS</h2>
        <ul className="mt-6 list-disc pl-6 space-y-2.5 text-slate-600 dark:text-slate-300">
          <li>Hanwha TotalEnergies Industry-Academic Scholarship Nominee — 2023 (declined the offer due to its condition requiring post-graduation employment, which conflicts with my decision to pursue my career in computational chemistry)</li>
          <li>Excellence in Chemistry Fellowship — 2018 – 2023</li>
          <li>UCLA Doctoral Student Travel Grant — 2022</li>
          <li>Graduate Dean’s Scholar Award — 2018</li>
        </ul>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" className="py-10 scroll-mt-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">PUBLICATIONS</h2>
          <a href={scholarUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-400">Google Scholar</a>
        </div>
        <ol className="mt-8 list-decimal space-y-5 pl-5 text-sm text-slate-600 dark:text-slate-300">
          <li>Davoudinasab, B.; Raskovalov, A.; Lee, W.; Han, G. W.; Katritch, V.; Cherezov, V. “Structural Insights into Mechanism of Activation and Inhibition of Prostaglandin Receptors,” Manuscript under review by Nature Portfolio</li>
          <li>Williams, C. G.; Nistanaki, S.; Dong, K.; Lee, W.; Houk, K. N.; Nelson, H. M. “Main-Group Catalyzed Cationic Claisen Rearrangements via Vinyl Carbocations,” Org. Lett., 2024, 26, 4847–4852.</li>
          <li>Zhao, Z.; Popov, S.; Lee, W.; Burch, J. E.; Delgadillo, D. A.; Kim, L. J.; Shahgholi, M.; Houk, K. N.; Nelson, H. M. “Accessing Medium-sized Rings via Vinyl Carbocation Intermediates,” Org. Lett., 2024, 26, 1000–1005.</li>
          <li>Lee, W.; Benton, T.; Sengupta, A.; Houk, K. N. “Molecular Dynamics of the Norbornyl Cation and Its Generation in Winstein–Trifan Solvolysis: The Timing of Sigma-Bridging,” J. Org. Chem., 2024, 89, 1140–1146. <span className="block mt-1 text-xs text-slate-500">[Highlighted in ACS Editors’ Choice, UCLA Chemistry & Biochemistry Newsroom, and CNSI Newsroom]</span></li>
          <li>Galeotti, M.#; Lee, W.#; Sisti, S.; Casciotti, M.; Salamone, M.; Houk, K. N.; Bietti, M. “Radical and Cationic Pathways in C(sp3)–H Bond Oxygenation by Dioxiranes of Bicyclic and Spirocyclic Hydrocarbons Bearing Cyclopropane Moieties,” J. Am. Chem. Soc., 2023, 145, 24021–24034. <span className="block mt-1 text-xs text-slate-500">[#Authors contributed equally]</span></li>
          <li>Lee, W.; Nelson, H. M.; Houk, K. N. “Computational Exploration of the Nature of Li+-Ureide Anion Catalysis on Formation of Highly Reactive Vinyl Carbocations and Subsequent C–C Bond Forming Reactions,” J. Org. Chem., 2023, 88, 3403–3408.</li>
          <li>Liu, W.-D.#; Lee, W.#; Shu, H.; Xiao, C.; Chen, X.; Houk, K. N.; Zhao, J. “Diastereoselective Radical Aminoacylation of Olefins through N-Heterocyclic Carbene Catalysis,” J. Am. Chem. Soc., 2022, 144, 22767–22777. <span className="block mt-1 text-xs text-slate-500">[#Authors contributed equally | Highlighted in Synfacts]</span></li>
          <li>Lee, W.#; Polyak, D.#; Xu, B.; Houk, K. N.; Krauss, I. J. “A Mechanistic Switch from Homoallylation to Cyclopropylcarbinylation of Aldehydes,” Org. Lett., 2022, 24, 4660–4664. <span className="block mt-1 text-xs text-slate-500">[#Authors contributed equally]</span></li>
          <li>Wigman, B.; Lee, W.; Wei, W.; Houk, K. N.; Nelson, H. M. “Electrochemical Fluorination of Vinyl Boronates Through Donor-Stabilized Vinyl Carbocation Intermediates,” Angew. Chem. Int. Ed., 2022, e202113972.</li>
          <li>Bagdasarian, A. L.; Popov, S.; Wigman, B.; Wei, W.; Lee, W.; Nelson, H. M. “Urea-Catalyzed Vinyl Carbocation Formation Enables Mild Functionalization of Unactivated C–H Bonds,” Org. Lett., 2020, 22, 7775–7779. <span className="block mt-1 text-xs text-slate-500">[Highlighted in Synfacts]</span></li>
          <li>Larson, R.; Samant, A.; Chen, J.; Lee, W.; Bohn, M.; Ohlmann, D.; Zuend, S.; Toste, F. D. “Hydrogen Gas-Mediated Deoxydehydration/Hydrogenation of Sugar Acids: Catalytic Conversion of Glucarates to Adipates,” J. Am. Chem. Soc., 2017, 139, 14001–14004.</li>
        </ol>
      </section>

      {/* PRESENTATIONS */}
      <section id="presentations" className="py-10 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">PRESENTATIONS</h2>
        <div className="mt-8 space-y-8">
          <article className="rounded-xl border border-slate-200 bg-slate-50/50 py-6 px-8 dark:border-slate-800 dark:bg-slate-900/50">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-sm">THE THIRD DRUG DISCOVERY INNOVATION WORKSHOP — University of Southern California</h3>
              <span className="text-sm text-slate-500">Los Angeles, CA — Feb 2025</span>
            </header>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Title: Virtual Ligand Screening and Molecular Dynamics Simulations of the Prostaglandin D2 Receptor 1</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50/50 py-6 px-8 dark:border-slate-800 dark:bg-slate-900/50">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-sm">HOUK RESEARCH CONFERENCE POSTER PRESENTATION — University of California, Los Angeles</h3>
              <span className="text-sm text-slate-500">Los Angeles, CA — Aug 2022</span>
            </header>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Title: Diastereoselective Radical Iminoacylation of Olefins through N-Heterocyclic Carbene Catalysis</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50/50 py-6 px-8 dark:border-slate-800 dark:bg-slate-900/50">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-sm">NATIONAL ORGANIC CHEMISTRY SYMPOSIUM POSTER PRESENTATION — American Chemical Society Division of Organic Chemistry</h3>
              <span className="text-sm text-slate-500">San Diego, CA — June 2022</span>
            </header>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Title: Diastereoselective Radical Iminoacylation of Olefins through N-Heterocyclic Carbene Catalysis</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50/50 py-6 px-8 dark:border-slate-800 dark:bg-slate-900/50">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-sm">VIRTUAL CCHF ORAL PRESENTATION — Center for Selective C–H Functionalization (CCHF)</h3>
              <span className="text-sm text-slate-500">Los Angeles, CA — Dec 2021</span>
            </header>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Title: Selectivity in C–H Oxidation by Ethyl Trifluoromethyl Dioxirane</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50/50 py-6 px-8 dark:border-slate-800 dark:bg-slate-900/50">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-sm">GENENTECH POSTER PRESENTATION — Genentech Inc.</h3>
              <span className="text-sm text-slate-500">South San Francisco, CA — Aug 2017</span>
            </header>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Title: Improving Poor Lung Retention of Inhaled Compounds</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50/50 py-6 px-8 dark:border-slate-800 dark:bg-slate-900/50">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-sm">GENENTECH ORAL PRESENTATION — Small Molecule Discovery Chemistry Department, Genentech Inc.</h3>
              <span className="text-sm text-slate-500">South San Francisco, CA — July 2017</span>
            </header>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Title: Improving Poor Lung Retention of Inhaled Compounds</p>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-10 scroll-mt-20">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 p-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Contact</h2>
              <p className="mt-4 max-w-prose text-slate-600 dark:text-slate-300">
                I’m open to collaborations, recruiting conversations, and seminars. Use the form or email me at <a className="underline font-semibold hover:text-teal-600 dark:hover:text-teal-400 transition-colors" href={`mailto:${mail}`}>{mail}</a>.
              </p>
              <div className="mt-6 flex gap-3">
                <a href={githubUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors">GitHub</a>
                <a href={linkedinUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors">LinkedIn</a>
                <a href={orcidUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors">ORCID</a>
                <a href={scholarUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors">Scholar</a>
              </div>
            </div>

            <ContactForm mail={mail} />
          </div>
        </div>
      </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/70 bg-white/70 py-10 dark:border-slate-800 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm text-slate-500">© {year} Woojin (Danny) Lee. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#home" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Back to top ↑</a>
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Imprint</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ----- Contact Form Sub-component -----
function ContactForm({ mail }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(formRef.current);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`[Homepage] Message from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
    setStatus("Mail client opened!");
    setTimeout(() => setStatus(""), 4000);
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800/50 dark:bg-slate-900"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-teal-500/30 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-800/50 dark:focus:border-teal-500 dark:focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-semibold">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-teal-500/30 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-800/50 dark:focus:border-teal-500 dark:focus:ring-1"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Hello Danny, we’d like to…"
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-teal-500/30 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-800/50 dark:focus:border-teal-500 dark:focus:ring-1 resize-y"
        />
      </div>
      <div className="mt-5 flex items-center justify-between gap-3">
        <button
          type="submit"
          className="rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 active:bg-teal-800"
        >
          Send Message
        </button>
        <p className="text-sm text-slate-500 transition-opacity">{status}</p>
      </div>
    </form>
  );
}