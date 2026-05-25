// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Eight papers across clinical AI evaluation, the digital food environment, US housing market dynamics, and applied machine learning. Open access where available.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-bfr-with-sprinters-a-collaborative-rct",
        
          title: "BFR with sprinters — a collaborative RCT",
        
        description: "Eight-week RCT on functional strength training with vs without blood-flow restriction.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/bfr-sprinters-collab/";
          
        },
      },{id: "post-food-policy-is-still-regulating-streets-we-wrote-to-the-lancet-about-screens",
        
          title: "Food policy is still regulating streets — we wrote to The Lancet about...",
        
        description: "Lancet correspondence arguing UPF policy needs an explicit digital track.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/upf-lancet-correspondence/";
          
        },
      },{id: "post-clinical-llm-apps-need-retrieval-grounded-evaluation-not-just-auc",
        
          title: "Clinical LLM apps need retrieval-grounded evaluation, not just AUC",
        
        description: "Letter in JMIR AI on evaluating conversational clinical LLM systems.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/rag-clinical-evaluation/";
          
        },
      },{id: "post-end-to-end-llm-clinical-triage-misses-the-steps-that-matter",
        
          title: "End-to-end LLM clinical triage misses the steps that matter",
        
        description: "Commentary in Clinical Imaging on a GPT-4 breast-pain triage paper.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/breast-pain-llm-commentary/";
          
        },
      },{id: "post-from-a-cambridge-nutritional-epi-class-to-a-letter-in-phn",
        
          title: "From a Cambridge nutritional epi class to a letter in PHN",
        
        description: "A measurement objection to TikTok food-marketing surveillance studies, written from MPhil coursework.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/tiktok-exposure-cambridge-class/";
          
        },
      },{id: "post-from-data-to-mechanism-continuing-with-cemil-now-under-review-at-jebo",
        
          title: "From data to mechanism — continuing with Cemil, now under review at JEBO...",
        
        description: "Working paper extending Ngai-Tenreyro to monthly frequency. Mobility timing alone explains the spring shift. Under review at JEBO.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/housing-mobility-follow-up/";
          
        },
      },{id: "post-my-first-journal-paper-started-as-a-ucl-undergrad-project",
        
          title: "My first journal paper — started as a UCL undergrad project",
        
        description: "How the US housing seasonality paper began as STAT0035 at UCL Data Science and ended up in Real Estate (MDPI).",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/housing-seasonality-first-paper/";
          
        },
      },{id: "post-where-i-started-a-ucl-undergrad-project-on-k-means-initialisation",
        
          title: "Where I started — a UCL undergrad project on K-means initialisation",
        
        description: "My first published paper. Final-year project at UCL Data Science, ICIICS 2023.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/customer-clustering-ucl-stat/";
          
        },
      },{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%68%36%32%33@%63%61%6D.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0009-5857-5783", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=U3KvP2QAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/WindTakeMeNorth", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
