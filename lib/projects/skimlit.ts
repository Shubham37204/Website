import { Project } from "../types";

export const skimlit: Project = {
  slug: "skimlit",
  title: "SkimLit",
  tagline: "Medical Abstract Classification NLP Pipeline",
  description: "Designed an end-to-end NLP classifier mapping PubMed randomized controlled trial (RCT) abstracts into 5 sequential roles using a Tribrid multi-input deep neural network.",
  category: "aiml",
  isFlagship: true,
  problem: "Medical researchers spend hundreds of hours manually parsing dense RCT abstracts to extract background, methods, and results.",
  details: [
    "Developed a Tribrid deep neural network combining token-level USE embeddings, character-level BiLSTM, and line position features.",
    "Trained and evaluated classification models ranging from TF-IDF baselines to 1D CNNs and multi-input hybrid architectures.",
    "Achieved high classification accuracy using categorical cross-entropy with label smoothing.",
    "Shipped an interactive Streamlit dashboard featuring dataset automation and live text inference."
  ],
  tech: ["TensorFlow", "spaCy", "Scikit-learn", "Streamlit", "Python", "NumPy", "Pandas"],
  tags: ["NLP Pipeline", "Deep Learning", "Medical AI", "Multi-Input NN"],
  keywords: ["SkimLit", "NLP", "TensorFlow", "PubMed", "Deep Learning", "BiLSTM", "Universal Sentence Encoder", "Streamlit", "Python", "spaCy", "Classification"],
  impact: "Automatically classifies PubMed RCT abstracts into 5 structured semantic roles",
  github: "https://github.com/Shubham37204/SkimLit",
  accent: "#a78bfa",
  date: "Feb 2026",
  caseStudy: {
    overview: "SkimLit is a medical NLP pipeline that automatically structures PubMed RCT abstracts into five standard sections: Objective, Background, Methods, Results, and Conclusion.",
    problem: "PubMed contains over 30 million abstracts. Most are published as unstructured walls of text, making rapid systematic reviews and literature extraction slow for clinical researchers.",
    solution: "We engineered a multi-input Tribrid neural network that ingests sentence text, character sequences, and positional line metadata to accurately classify each sentence into its clinical role.",
    architecture: {
      diagramSteps: [
        "Raw Abstract Text",
        "USE Sentence Vector",
        "Char BiLSTM Embedding",
        "Positional One-Hot",
        "Tribrid Concatenation",
        "5-Class Softmax Output"
      ],
      description: "Text is tokenized and passed simultaneously through pre-trained Universal Sentence Encoder (token level), 1D BiLSTM (character level), and Dense positional encoders before final dense classification."
    },
    highlights: [
      "Tribrid Multi-Input Architecture",
      "Universal Sentence Encoder Embeddings",
      "Character-Level BiLSTM Feature Extractor",
      "Line Position & Total Line Features",
      "Streamlit Inference Dashboard",
      "Categorical Cross-Entropy + Label Smoothing"
    ],
    engineeringDecisions: [
      {
        decision: "Incorporated Positional Line Metadata",
        rationale: "Sentence text alone can be ambiguous, but its relative position in an abstract ('line 1 of 12' vs 'line 10 of 12') strongly signals whether it represents Background or Conclusion."
      },
      {
        decision: "Hybrid Token + Character-level Embeddings",
        rationale: "Character-level BiLSTMs handle out-of-vocabulary medical terms and dosage abbreviations that standard tokenizers miss."
      }
    ],
    tradeoffs: [
      {
        chosen: "Pre-trained Universal Sentence Encoder (USE)",
        alternative: "Fine-tuning full BioBERT",
        reason: "USE provided fast inference speed and strong semantic representation with significantly lower GPU memory requirements during training."
      }
    ],
    results: [
      { label: "Accuracy", value: "85.2%", detail: "Validation accuracy on 20,000 RCT abstracts" },
      { label: "Classes", value: "5 Roles", detail: "Background, Objective, Method, Result, Conclusion" },
      { label: "Inference Speed", value: "~15ms", detail: "Per abstract sentence on GPU" }
    ],
    lessonsLearned: [
      "Feature engineering line position and sentence density yields dramatic accuracy gains in structured document classification.",
      "Label smoothing prevents deep networks from becoming overconfident on borderline medical phrasing."
    ]
  }
};
