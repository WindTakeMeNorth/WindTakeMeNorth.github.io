---
layout: post
title: "The spring shift — why the US housing market's seasonal peak moved"
date: 2026-05-23 09:00:00
description: For thirty years US house prices peaked in May or June. Since 2021 they peak in March or April. Here is what changed, why it matters, and what to do about it.
tags: housing economics seasonality
categories: research
related_publications: true
giscus_comments: false
thumbnail: assets/img/og/housing-seasonality.png
toc:
  beginning: true
---

If you have ever sold a house, you have heard the rule. List in late spring. The market peaks in June. After that, demand softens, inventory thins out, and you lose negotiating leverage. For thirty years this rule was as close to a stylised fact as US housing economics had.

It is no longer true. The peak has moved.

## A clean break in 2021

With Yifei Huang at Northwestern, I used X-13-ARIMA seasonal decomposition on monthly Housing Price Index data from the Federal Housing Finance Agency, plus Census transaction data, covering 1991 to 2024 {% cite hu2025seasonality %}. The pre-pandemic and post-pandemic seasonal patterns look like they belong to different markets.

Three findings stand out.

**The peak month moved.** Before 2020, US house prices and sales volumes peaked in May or June and bottomed in December or January. After 2020, peak activity has moved to March or April. The shift is roughly two months earlier in the calendar year.

**The amplitude grew.** The difference between hot-season and cold-season prices is larger post-pandemic. Even after controlling for the overall trend, the seasonal swing is more pronounced.

**It shows up across regions.** The shift is not driven by one or two outlier metros. It is visible in the South, the West, the Midwest, and the Northeast.

## What changed?

A natural question: if seasonality has been stable for thirty years, what suddenly changed?

In a companion working paper with Cemil Selcuk at Cardiff, we extend the Ngai-Tenreyro (2014) search-and-matching framework to monthly frequency, prove existence and uniqueness of the equilibrium, and calibrate it to observed US data {% cite hu2026summer %}. The mechanism we focus on is household mobility timing — when in the calendar year people actually move.

Using SIPP household-mobility data and Google Trends as a corroborating indicator, we document a corresponding post-2021 shift: people are starting their moves earlier in the year. Calibrating the model to this mobility shift alone — without invoking any change in housing supply, credit conditions, or remote-work preferences — reproduces the spring shift in both prices and transaction volumes.

That is a strong claim, so let me be careful. We are not saying remote work and credit and inventory do not matter. We are saying that the timing of household mobility is *sufficient on its own* to account for the seasonal shift. Those other channels may also be operating; they are not required.

## Why does mobility timing matter for prices?

The intuition is the thick-market mechanism. Housing markets work better when there are more buyers and sellers at the same time. Matches are easier to find. Search costs are lower. Prices rise; transaction volumes rise. When mobility is high, the market is "thick" and prices reflect that. When mobility is low, the market is "thin" and prices soften.

Before 2020, household moves were synchronised with the school year. Families moved in summer, when school was out. So the housing market thickened in early summer, prices peaked in May or June, and activity tapered through autumn.

After 2020, mobility is no longer tied as tightly to the school calendar. Hybrid school, more remote work, looser ties between work location and home location — whatever combination of these matters most, the timing of household moves has shifted earlier in the year. The market thickens earlier. Prices peak earlier. The cycle moved.

## What it means for sellers

If you are timing a home sale to peak demand, the advice that worked for your parents — list in late spring — is now late. By the time it is late spring, the market has already started to soften.

For 2026 sellers, the practical implication is to list in March or early April, not May. The exact optimum varies by region, but the direction is consistent across the data.

This is not financial advice and your local market may differ. But the empirical pattern across thirty-three years of national data is striking enough to take seriously.

## What it means for housing data interpretation

This is the part that worries me most, and it is where the academic argument has the most policy bite.

Seasonally adjusted house price indices — the headline numbers reported in CoreLogic, Case-Shiller, FHFA's own publications — use seasonal adjustment models calibrated on historical seasonal patterns. When the actual seasonal pattern shifts and the model has not been updated, the seasonal adjustment is wrong. The result: reported month-over-month house price changes look noisier than they should, and the "trend" component absorbs some of the seasonal misfit.

This matters for the Federal Reserve. The FOMC reads housing data for signal about housing demand and credit conditions. If the seasonal adjustment is outdated, what looks like a change in trend may partly be a change in seasonality. Monetary policy interpretation needs to factor in the spring shift.

It also matters for affordability metrics, lending model calibration, and real estate platform timing recommendations (Zillow, Redfin, etc.).

## What I am working on next

Two threads.

First, extending the model to allow for *endogenous* mobility timing — making the choice of when to move part of the household's optimisation problem, rather than treating it as exogenous. The current calibration shows that mobility timing is sufficient to explain the spring shift; the next step is to ask what made mobility timing itself shift.

Second, looking at whether the seasonal shift is converging back toward the pre-pandemic pattern as remote work norms stabilise, or whether it is the new equilibrium. The post-2024 data will be informative.

If you are working on housing seasonality, real estate platform analytics, or seasonal adjustment methodology, I would love to hear from you. The papers are open access — the journal version in *Real Estate* {% cite hu2025seasonality %} and the working paper on SSRN {% cite hu2026summer %} — and the X-13-ARIMA analysis pipeline is reproducible from the FHFA and Census public data.

Email: <a href="mailto:yh623@cam.ac.uk">yh623@cam.ac.uk</a>.
