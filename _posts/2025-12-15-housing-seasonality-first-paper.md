---
layout: post
title: "My first journal paper — started as a UCL undergrad project"
date: 2025-12-15 09:00:00
description: How the US housing seasonality paper began as STAT0035 at UCL Data Science and ended up in Real Estate (MDPI).
tags: housing economics seasonality UCL
categories: research-journey
giscus_comments: false
thumbnail: assets/img/og/housing-seasonality.png
---

This one is special to me. It started as my **STAT0035 third-year project at UCL Data Science**, supervised by **Cemil Selcuk**. The question was simple: had US housing market seasonality changed since the pandemic? The textbook said summer peak, June-July, every year. The FHFA data after 2020 looked different to me, and I wanted to know whether the eye was right.

It was. X-13-ARIMA on 33 years of FHFA HPI + Census transaction data: peak moved from May/June to March/April after 2020, amplitude grew, pattern consistent across most US regions.

What I'm proud of is that I didn't stop when the course did. After graduating, I teamed up with **Yifei Huang** — a close classmate and friend from the UCL stats department, who has since moved on to Northwestern University in the US — to extend the project into a full journal article. Together we worked through additional data, robustness checks, and the regional breakdown that ended up in the published version.

It is rare for an undergrad project to make it all the way through to a published journal paper, and rarer still to keep building on it afterwards. The follow-up — a structural model with Cemil — is now [under review at JEBO]({{ '/blog/2026/housing-mobility-follow-up/' | relative_url }}).

Open access in Real Estate (MDPI), 2025: [link]({{ '/publications/#hu2025seasonality' | relative_url }}).
