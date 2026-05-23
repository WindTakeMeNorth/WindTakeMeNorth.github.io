---
layout: post
title: "The digital food environment — why food policy still ignores screens"
date: 2026-05-29 09:00:00
description: Food-environment policy is still designed for what's on the street corner. In 2026 exposure is also shaped by what's on the screen. Here is the gap, and a measurement framework that could close it.
tags: public-health food-environment TikTok algorithmic-exposure
categories: research
related_publications: true
giscus_comments: false
thumbnail: assets/img/og/digital-food-environment.png
toc:
  beginning: true
---

The food environment is a public-health construct that has guided regulation for two decades. Outlet density. Buffers around schools. Reformulation targets for sodium and sugar. Fiscal levers on sugar-sweetened beverages. These are the tools that food policy was built around.

They were designed for a food environment where exposure was determined by what was on the corner. In 2026 exposure is also determined by what is on the screen. The two recent letters I wrote — one in *The Lancet* {% cite hu2026upf %}, one in *Public Health Nutrition* {% cite hu2026tiktok %} — argue that food policy and food-environment measurement need an explicit digital track. This post is the longer version of that argument.

## What the standard model misses

Most food-environment research and policy still assumes that adolescent and adult exposure to unhealthy food is shaped mainly by neighbourhood retail. The variables are familiar: outlet density (fast food restaurants per km²), proximity to schools, distance to nearest supermarket, supermarket-to-fast-food ratio. This framing dominated the literature for good reason — it captured most of the explanatory variance for most of the variation in dietary patterns in 2010.

In 2026 it captures less. Three exposure channels barely existed when the standard model was designed:

**Online food delivery platforms.** Uber Eats, DoorDash, Just Eat, Deliveroo, Meituan. A teenager in a "food-desert" neighbourhood has the same online food environment as a teenager in a food-rich one — possibly an *unhealthier* one, because algorithmic recommendation tends to surface higher-margin items.

**Social media food marketing.** TikTok food influencers, Instagram food posts sponsored by food brands, YouTube cooking channels with embedded product placement. The volume is enormous and the regulatory framework is essentially nonexistent. Broadcast food marketing to children has been restricted in many jurisdictions for decades. Algorithmic food marketing to children has not.

**Algorithm-driven content curation.** This is the deepest channel. TikTok, Instagram Reels, YouTube Shorts: a teen's feed is shaped by reach, engagement dynamics, and audience composition. The platform algorithm decides what gets seen, not the user. A "food-conscious" teen and a "food-curious" teen, on the same platform, get different food environments delivered to them.

The *Lancet* correspondence {% cite hu2026upf %} argues that ultra-processed food policy — which has rightly moved beyond reformulation toward fiscal, labelling, marketing, and retail measures — needs to add this digital track. The food environment cannot be fixed if a major exposure pathway is invisible to it.

## What's broken in current digital-food measurement

The *Public Health Nutrition* letter {% cite hu2026tiktok %} is about a more specific problem. There is a growing literature that tries to characterise the digital food environment by sampling content. Researchers sample posts from top food influencers on TikTok, code them for product placement, nutritional quality, and audience targeting, then report "X% of TikTok influencer posts feature unhealthy food."

This is useful. It is also being implicitly treated as a measure of adolescent exposure, which it is not.

On algorithm-driven platforms, content prevalence and exposure decouple. A specific teen's TikTok feed depends on three things:

1. **Reach** — how many people the post is shown to.
2. **Engagement dynamics** — likes, watches, replays, shares. These determine whether the algorithm amplifies the post.
3. **Audience composition** — what age, location, and demographic profile the platform infers from the user.

A small number of high-view posts can drive most of the actual adolescent exposure. A large number of low-view posts in a niche category drive almost none. So if a content-sampling study reports "30% of top influencer posts feature unhealthy food," that does *not* mean 30% of teen exposure is to unhealthy food. The actual percentage could be much higher or much lower depending on which posts the algorithm pushed.

This is an inferential leap that the literature is quietly making and shouldn't be.

## Three measurement fixes that are cheap

The *Public Health Nutrition* letter proposes three concrete fixes for ongoing food-marketing surveillance studies. None require platform-side data access. All make the inference from content to exposure more defensible.

**View-weighted prevalence.** Instead of reporting the percentage of *posts* with unhealthy food content, report the percentage of *views* with unhealthy food content. This is computable from public view counts. Even simple view-weighting reveals whether a small number of viral posts is driving most of the exposure or not.

**Bounded sensitivity analysis for missing nutrient data.** TikTok food posts often have ambiguous nutrient information — unbranded foods, composite dishes, no nutritional label visible. Studies usually drop these or impute conservatively. That can systematically bias branded-vs-unbranded comparisons. A bounded analysis (what is the lowest and highest plausible estimate given the uncertainty?) transparently shows whether conclusions survive the uncertainty.

**Multi-product audit.** Many studies code only the most prominent product per video. A small random audit, coding the top two products per video, lets you estimate the undercounting and adjust.

These are small additions that close the inferential gap meaningfully.

## What would real regulation look like?

The *Lancet* letter argues for three policy moves that follow from the measurement framework:

**Algorithmic exposure audits for adolescent food marketing.** Platforms could be required to disclose, on a periodic basis, the distribution of food-marketing content delivered to adolescent users — not posted, *delivered*. This requires platform cooperation but the regulatory template exists in adjacent areas (algorithmic transparency in elections, algorithmic content moderation reporting).

**Platform-level marketing rules parallel to broadcast rules.** Broadcast food marketing to children is restricted in many jurisdictions. The same product, delivered via algorithmic recommendation, faces no equivalent rules. This is incoherent and the gap is regulatable.

**Measurement frameworks that include view-weighted exposure.** Public-health agencies that maintain food-environment surveillance datasets (national diet surveys, dietary surveillance systems) should include a digital exposure module — not just self-reported screen time, but algorithmic exposure metrics for the platforms where food marketing actually happens.

## Why this matters now

Two trends make this urgent.

First, online food delivery is no longer marginal. In the UK and US, online food delivery accounts for a substantial fraction of food spending among under-25s. Whatever the digital food environment is doing to dietary patterns, it is doing it at scale.

Second, the regulatory window is open. Several jurisdictions are revisiting food advertising rules, ultra-processed food labelling, and algorithmic accountability. Each of those tracks intersects the digital food environment but doesn't yet treat it as a coherent policy domain. There is room for that framing to land.

If you are working in food policy, public-health nutrition, or digital health, I would welcome the conversation. Both letters are open access:

- {% cite hu2026upf %} in *The Lancet* on the digital food environment as a policy gap.
- {% cite hu2026tiktok %} in *Public Health Nutrition* on content prevalence vs adolescent exposure measurement.

Email: <a href="mailto:yh623@cam.ac.uk">yh623@cam.ac.uk</a>.
