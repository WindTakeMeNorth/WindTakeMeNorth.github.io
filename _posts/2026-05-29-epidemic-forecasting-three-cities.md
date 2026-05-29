---
layout: post
title: "An accidental international team — and our first epidemic-forecasting paper"
date: 2026-05-29 09:00:00
description: How a friendship at Peterhouse, a hometown coincidence with Dalian, and three time zones turned into EpiMap-LLM and a paper in Frontiers in Public Health.
tags: epidemic-forecasting surveillance LLM collaboration Cambridge Tokyo Beijing
categories: research-journey
giscus_comments: false
thumbnail: assets/img/og/epidemic-forecasting.png
---

I don't usually write blog posts about how a paper happened. This one is an exception, because this one didn't happen the way papers usually do.

## A friendship at Peterhouse

Early in the MPhil, at **Peterhouse**, I met a Chinese friend — **Minghong**. We weren't in the same department; the friendship was made through college, the way friendships at Cambridge so often are. Hall, walks back from supervisions, late-night kettle conversations.

One evening, almost in passing, Minghong mentioned his older brother **Mingxin Liu** was doing research in the **Department of Health Communication at the University of Tokyo's Graduate School of Medicine**. I filed it away — half curious, half just glad to know.

## A Dalian coincidence

Around the same time, I got to know **Jingyuan Han** — a researcher in the **Department of Cancer Prevention and Control at the National Cancer Center, Chinese Academy of Medical Sciences and Peking Union Medical College** in Beijing. We weren't in any of the same labs either. We met the way two Chinese students in different cities do: through somebody who knew somebody.

Somewhere in our first real conversation Jingyuan mentioned his girlfriend was a student at **Dalian Medical University**.

I'm from Dalian.

That moment landed in the place such moments land. The conversation slowed down for a second, then sped up. We didn't immediately start talking about science — we talked about Dalian. The seafood. The harbour. Where she studied versus where I grew up. Whether the campus had changed since I was last back.

I think that's actually when the project started, even though the project didn't exist yet.

## The accidental geometry

After a few more conversations, the three of us — **Cambridge → Tokyo → Beijing** — realised we were each chasing the same problem from different angles.

Public-health surveillance systems do not speak the same language across borders. Different case definitions. Different rules for what counts as a lab-confirmed case. Different ICD coding habits. **Reporting delays, revisions, and backfill**. A forecasting model fitted on one system breaks the moment you cross a border, change a coding standard, or pull from a different reporting tier.

Mingxin saw it from the **health-communication** side at Tokyo — how surveillance protocols shape what the public ends up hearing and trusting. Jingyuan saw it from the **cancer prevention and control** side at the National Cancer Center, where national surveillance data flows through specific institutional pipes and feeds intervention design. I saw it from the **statistical / methodological** side at Cambridge — *if the underlying protocols differ, your forecasting model needs to know about the protocols.*

None of us would have written this paper alone.

## EpiMap-LLM

The proposal is straightforward in retrospect: **bake the protocol structure into the forecasting model itself.** Instead of treating each surveillance stream as a black-box source of case counts, condition the model on the protocol that generated those counts — case definition, reporting cadence, revision pattern, backfill — so it learns what each stream is *actually measuring*, not just the headline numbers.

We built this as **EpiMap-LLM** — a parameter-efficient alignment framework that connects numerical time-series representations with a **frozen language-model backbone**, with only lightweight trainable components on top. Protocol-aware tokens are injected as context, so the model can distinguish protocol-induced fluctuations from genuine epidemiological shifts and transfer across datasets and temporal granularities.

We tested it on two heterogeneous surveillance settings — **JHU CSSE COVID-19** (daily) and **CDC influenza hospitalization** (weekly). EpiMap-LLM consistently improves MAE and RMSE over strong forecasting baselines. The gain is largest where reporting irregularities are worst — exactly the operational regime where forecasts have to be trusted.

The full paper is open access in *Frontiers in Public Health*, published 29 May 2026. Jingyuan and I are **co-first authors**.

[Read the paper]({{ '/publications/#hu2026protocol' | relative_url }}) · [Frontiers (open access)](https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2026.1829302/full)

## What I want to remember

The geometry. Cambridge, Tokyo, Beijing. A college friend's older brother. A girlfriend at a Dalian medical school. Late-night WeChat threads that turned into shared spreadsheets that turned into a draft. International collaboration sometimes gets described as if it were arranged at the institutional level — MOUs, summer schools, formal exchanges. This wasn't that. Three sides showed up because three friendships did. The paper followed.

## What's next

Jingyuan and I are starting to look at a follow-up — **social media in China and cancer prevention** — pulling on his cancer-prevention work at the National Cancer Center and on the communication side that Mingxin works on in Tokyo. It's a natural extension: surveillance data and public-facing communication are two halves of the same loop. It also connects to my dissertation thread on the digital food environment, where the same question recurs in a different language. When we have something to show, this is where I'll write about it.

Mingxin, Jingyuan — thank you. This one is special.
