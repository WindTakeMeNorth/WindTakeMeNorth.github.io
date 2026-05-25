---
layout: post
title: "Clinical LLM apps need retrieval-grounded evaluation, not just AUC"
date: 2026-04-15 09:00:00
description: Letter in JMIR AI on evaluating conversational clinical LLM systems.
tags: clinical-AI RAG evaluation AUC
categories: research-journey
giscus_comments: false
thumbnail: assets/img/og/rag-clinical-evaluation.png
---

Same MPhil exploration period that gave me the *Clinical Imaging* letter — reading widely across clinical AI, evaluation methodology, and infectious-disease epidemiology. *JMIR AI* published a study using fine-tuned LLaMA2 / Flan-T5 for pediatric COVID-19 severity risk assessment, deployed as a conversational app. The evaluation reported AUC.

AUC tells you the classifier is calibrated on held-out data. It does not tell you whether the **natural-language explanations** the deployed app produces are grounded in actual clinical guidance — only whether the underlying yes/no token probabilities discriminate on the dataset.

That gap matters. The deployed system is a chat interface giving caregivers fluent risk explanations. Fluent + calibrated is not the same as grounded. A model can confidently invent a CDC recommendation that doesn't exist.

I wrote a methodological letter for *JMIR AI* arguing for a **parallel evaluation track**. Same pipeline, evaluated twice:

1. LLM-only, current setup. Score on AUC, accuracy, calibration.
2. Retrieval-grounded against a fixed clinical corpus (CDC pediatric COVID guidance + WHO + IDSA). Score on **citation faithfulness**, **evidence-grounded correctness**, and **subgroup robustness**.

This is an architectural shift, not a tuning refinement. RAG is not just a deployment pattern; it is an evaluation substrate.

Letter in JMIR AI, 2026: [link]({{ '/publications/#hu2026retrieval' | relative_url }}).
