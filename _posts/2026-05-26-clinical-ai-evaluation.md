---
layout: post
title: "Three things clinical AI evaluation papers usually get wrong"
date: 2026-05-26 09:00:00
description: A friendly methodological critique of how clinical LLM applications are being evaluated, drawn from two recent commentaries in JMIR AI and Clinical Imaging.
tags: clinical-AI LLM RAG evaluation
categories: research
related_publications: true
giscus_comments: false
thumbnail: assets/img/og/rag-clinical-evaluation.png
toc:
  beginning: true
---

Clinical AI is one of the fastest-growing categories of medical research. In 2026 you can find LLM-based clinical decision support papers in almost every specialty — radiology, dermatology, paediatrics, oncology, mental health. The quality of the underlying models has improved enormously. The quality of the *evaluations*, on average, has not kept up.

Here are three things that come up in clinical-LLM evaluation papers over and over, and that I have argued against in print in the last six months — once in *Clinical Imaging* on LLM-based breast pain triage {% cite hu2026comment %}, once in *JMIR AI* on conversational pediatric COVID risk assessment {% cite hu2026retrieval %}.

This is a constructive critique, not a dismissal of the field. The systems are real, the results are real, the deployments are coming. The question is whether the evaluation methodology keeps pace.

## 1. End-to-end is the wrong abstraction for clinical triage

A common pattern: an LLM is asked to map a free-text patient description directly to a binary clinical decision. "Is this breast pain concerning? Refer or do not refer." Studies report accuracy, sensitivity, sometimes specificity. The end-to-end formulation is appealing from an engineering perspective — one input, one output, one number to report.

But it departs from how clinicians actually reason about most presenting complaints. The clinical reasoning for breast pain doesn't go directly from free-text symptoms to a referral decision. It goes via intermediate attributes — focality, cyclicity, associated red-flag features like a palpable mass, skin changes, or lymphadenopathy — and then to a risk-stratified decision built on those attributes.

When an end-to-end LLM bypasses this attribute extraction step, you cannot tell which feature the model is implicitly acting on. If it gets a case right, you don't know whether it noticed the focality or got lucky. If it gets a case wrong, you can't localise the failure.

This is more than an academic point. In the breast-pain study I commented on, the misclassifications cluster in cases with ambiguous or absent attribute information. That is exactly what you would expect if the model is failing on implicit feature inference. With a two-step pipeline — attribute extraction first, risk stratification second — those failures become visible. With end-to-end, they don't.

The proposal in the commentary {% cite hu2026comment %} is straightforward: evaluate clinical-LLM triage as a two-step pipeline. Score attribute extraction separately. Score the risk stratification step given correct attributes. Then you can localise where the system is failing and a clinician can override at the attribute level rather than at the decision level.

## 2. AUC is necessary but not sufficient for conversational clinical apps

A second pattern, this one drawn from a recent *JMIR AI* paper: a fine-tuned LLM (variously LLaMA 2, Flan-T5, T0) is used as a binary classifier — the system outputs token probabilities for "yes" versus "no," and the classifier is evaluated on AUC. AUC is good. So far so good.

But the deployed system is not just a classifier. It is a *conversational interface*. Caregivers ask it questions about their child's symptoms. The system responds with fluent natural-language risk explanations. Those explanations may or may not be grounded in actual clinical guidance.

AUC tells you that the underlying classifier discriminates well on held-out data. It does not tell you whether the natural-language explanations the deployed app produces are grounded in real CDC, WHO, or IDSA recommendations. The classifier can be calibrated and the explanations can still be confidently wrong.

In the *JMIR AI* commentary {% cite hu2026retrieval %} we proposed a parallel evaluation track. Run the same conversational pipeline under two conditions:

1. LLM-only, current setup. Score on AUC, accuracy, calibration.
2. Retrieval-grounded against a fixed clinical corpus (CDC pediatric COVID guidance + WHO + IDSA). Score on citation faithfulness, evidence-grounded correctness, and subgroup robustness.

The two evaluations measure different things and the deployed system needs both. AUC tells you the classifier works on the dataset. Retrieval-grounded evaluation tells you the explanations would survive contact with a regulator or a careful clinician.

This is an architectural shift, not a refinement. RAG (retrieval-augmented generation) is not just a deployment pattern; it is an evaluation substrate. You can score whether the model's claim "the CDC recommends X" actually appears in the CDC document the model retrieved. With pure LLM you can only score whether the claim sounds right.

## 3. Subgroup robustness is not optional

A third pattern, less specific to LLMs but exacerbated by them. Clinical AI evaluations often report one global AUC, one global accuracy. A model with global AUC 0.85 might be 0.95 in one demographic subgroup and 0.65 in another. The global number conceals the disparity.

Recall and F1 stratified by demographic and social subgroup should be a default in clinical-LLM evaluation, not an optional supplementary analysis. The patterns of LLM failure are not uniformly distributed; the failures are often correlated with the populations whose data is underrepresented in training corpora and pretraining tokens.

In both the breast-pain commentary and the RAG one we make this point explicitly. It is the cheapest thing to add to an existing evaluation and the biggest gain in interpretability.

## A test you can apply

If you are building or reviewing a clinical AI evaluation, here is the test I would run on it:

**Can a clinician override the system in a localisable way?**

If the answer is yes — the clinician can look at the system's attribute-level intermediate output and disagree at a specific step — the evaluation is doing useful work.

If the answer is no — the clinician can only accept or reject the final decision and has no insight into why the system produced it — the evaluation is incomplete and the deployed system is unlikely to be safely controllable.

This is the through-line of both commentaries. Decompose the pipeline. Evaluate at every step. Make failures localisable. Make subgroup variation visible. Use retrieval grounding as the substrate that lets you score whether explanations are real.

The two letters are open access:

- {% cite hu2026comment %} in *Clinical Imaging*, on end-to-end LLM breast pain triage.
- {% cite hu2026retrieval %} in *JMIR AI*, on retrieval-grounded evaluation for conversational LLM-based risk assessment.

If you are working in clinical LLM evaluation and disagree with any of this, please write — I would rather be corrected than confident.

Email: <a href="mailto:yh623@cam.ac.uk">yh623@cam.ac.uk</a>.
