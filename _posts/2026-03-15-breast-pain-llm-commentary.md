---
layout: post
title: "End-to-end LLM clinical triage misses the steps that matter"
date: 2026-03-15 09:00:00
description: Commentary in Clinical Imaging on a GPT-4 breast-pain triage paper.
tags: clinical-AI LLM evaluation Cambridge
categories: research-journey
giscus_comments: false
thumbnail: assets/img/og/breast-pain-llm.png
---

Starting the MPhil, I deliberately let myself wander a bit before settling — reading across nutritional epi, genomics, sport-physiology, and clinical imaging — partly to know what the next year of work should look like, partly because I just enjoyed the surveying. This letter came out of that wandering period. A *Clinical Imaging* paper crossed my reading list: GPT-4 mapping free-text breast-pain descriptions to a binary triage recommendation. Sensitivity was reasonable, and the demonstration was useful. But the **end-to-end design bothered me**.

Clinical reasoning for breast pain does not go directly from "free text" to "refer / don't refer." It goes via intermediate attributes — focality, cyclicity, associated red-flag features (mass, skin changes, lymphadenopathy) — and only then to a risk-stratified decision. An end-to-end LLM that skips attribute extraction is asking the model to implicitly infer features that are neither extracted nor verifiable.

The original paper's misclassifications cluster in cases with ambiguous or absent attribute information. That is exactly what you would expect if the model is failing on implicit feature inference.

I wrote a methodological commentary arguing for a **two-step pipeline**: attribute extraction first, risk stratification second. Failures become localisable. Clinicians can override at the attribute level rather than at the decision level. That is what auditable clinical AI looks like.

Letter in Clinical Imaging, 2026: [link]({{ '/publications/#hu2026comment' | relative_url }}).
