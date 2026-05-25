---
layout: post
title: "Where I started — a UCL undergrad project on K-means initialisation"
date: 2023-11-15 09:00:00
description: My first published paper. Final-year project at UCL Data Science, ICIICS 2023.
tags: machine-learning clustering UCL
categories: research-journey
giscus_comments: false
thumbnail: assets/img/og/customer-clustering.png
---

This is where my publication record actually starts. UCL Data Science, **STAT0041 (Computational Statistics)**. The course was taught by Professor **Yvo Pokern**, and the experience reshaped how I think about three things at once — statistics, algorithms, and programming. His teaching had a particular **German rigour to it**: an algorithm is not just a recipe to memorise but an object you derive, dissect, and rebuild from first principles. After that module I no longer experienced "stats" and "code" as two separate subjects. They were the same craft. This paper was the first thing I wrote with that perspective in mind.

The annoyance that drove it: random and k-means++ initialisation can place initial centres in low-density regions, then converge to clusters that don't match anything a marketer would recognise. The fix was almost embarrassingly simple — pick initial centres from the centroids of the densest grid cells in feature space. The interesting bit was the data representation. Treating customer features as interval-valued data (each feature an interval [min, max] capturing per-customer variability) rather than as point estimates preserved a layer of information that simpler approaches squashed.

On simulation experiments: silhouette +0.1249 over k-means++, +0.4903 over vanilla K-means.

Looking back, the methodological reflex that runs through everything I've done since started here. **What is the data actually telling you, beyond the point estimate?** That question carries from clustering all the way to TikTok exposure measurement and clinical LLM evaluation.

Conference paper at ICIICS 2023 (IEEE): [link]({{ '/publications/#hu2023customer' | relative_url }}).
