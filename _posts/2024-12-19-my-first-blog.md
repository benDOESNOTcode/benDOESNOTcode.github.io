---
title: Toxic Tides, Impact of microplastic on the plankton population
categories: [sup]
tags: [Micrplastic, Plankton, ]
---
When outlining a post, I typically include:

An intro teasing what the post will cover
Key sections organized by topic/theme
Major points that support each section
A conclusion summarizing key takeaways

Introduction
We’ve all seen harrowing images: ducks entangled in plastic, turtles mistaking plastic bags for jellyfish, 
and large fish like tuna found with plastic in their stomachs. A staggering study revealed that in 2010, 
an estimated 4.8 to 12.7 million metric tons of plastic entered the oceans. But what about now, fourteen years later?
 Have we made progress, or has the problem worsened?
![alt text](/images/duck.png)



Our study explores two critical aspects of this crisis: the impact of microplastics on phytoplankton and whether fishing vessels
have altered their routes in response to pollution hotspots.

Why Plankton?
Why focus on phytoplankton, these tiny, 
often-overlooked ocean organisms? Their role in the ecosystem is far more significant than their size suggests.

Phytoplankton are among the primary producers of oxygen in our oceans, playing a pivotal role in maintaining the Earth's oxygen supply. 
They also act as natural carbon sinks, sequestering carbon dioxide and mitigating the effects of climate change. 
As renowned oceanographer John Martin famously stated, “Give me half a tanker of iron, and I will give you an ice age,”
emphasizing the critical role of phytoplankton in regulating the Earth's climate. Additionally, these colorful,
microscopic organisms are the foundation of marine food webs, providing nourishment for small schooling fish and,
in turn, sustaining larger marine life.

## 2.Dataset 

Let’s look at the datasets we used 
![alt text](/images/datasets.png)

Our datasets were obtained from three sources:

- Plastic dataset: From the NCEI website.
- Plankton dataset: From PANGAEA.
- Vessel dataset: From Global Fishing Watch.

#### Data Cleaning
Our datasets were relatively clean, with only a few missing values that were easily addressed. During preprocessing, we performed the following steps:

- Removed unnecessary columns, such as DOI and reference links, that were irrelevant to our analysis.
- Applied mode imputation to handle missing values when merging datasets.
- To enhance compatibility during merging, we standardized the latitude and longitude values

## Visualizations: 

The first question we sought to answer was whether sea surfce temperature had any effect on the plankton. From this paper plankton does a vertical migration to avoid the harsh sunlight and come back south when the temperature is warmer. From this paper we observe that the earth has been getting warmer. 
![alt text](/images/sstplankton.png)

From the bar graph plotting average SST vs year we observe that sea for the past 40 years have remained relatively same. In this line plot we plot the SST vs year vs chlorophyll content (plankton content mg/m^2) shows that there is no clear correlation between these two features. 

#### Distribution of plastic

Let’s look at how plastic and plankton is distributed over the years. We split the plastic dataset into three parts from 1972-2000, 2001-2010, 2011-2022. The first graph shows the plastic distribution from 1972-2000 and shows how most of the plastic is distributed across Gulf of Mexico and there was 110 pieces per m^3. From 2001 plastic spread across the Atlantic Ocean and to the Pacific as well with around 890 pieces per m^3. In the year 2011 onwards we can see plastic has spread across the entire eastern hemisphere with record number of 2.3 million pieces per m^3. 

![alt text](/images/pl_1972.png)
![alt text](/images/pl_2001.png)
![alt text](/images/pl_2011.png)

![alt text](/images/pl_logbar.png)
#### Distribution of Plankton: 
Like plastic we split the dataset into three parts from 1958-2000, 2001-2010, 2010-2017.  During the mid half of 19th century we could see tremnedous populations of planton in the Indian coast as well as  American coast with about 1 million mg of plankton per m^2.

![alt text](/images/kl_1958.png)
![alt text](/images/kl_2001.png)
![alt text](/images/kl_2011.png)

![alt text](/images/kl_bar.png)
In the 2000 period plankton seems to have shifted with only certain coast in the US containing about 369k plankton per mg^2. The year 2011 took a wild turn we can observe that plankton only remaining near the coast of California with only about 90k plankton per mg^2. So what happened? Are we causing a global extinction of the entire marine ecosystem? 

To put this into perspective we wanted the raw numbers of whether we are affecting this small blobs. 

## Did increase in microplastic affect plankton?
![alt text](/images/kl_pl_line.png)
![alt text](/images/kl_pl_table.png)

## P-test to determine relation
Numbers tell the truth and though we see theres a relation between micrplastic increase and plankton decrease do the numbers support it?
We perform three seperate test to measure if theres a statistical significance between these two variables.

- Spearman Correlation:​

-0.13442056254198995,​

p-value: 0.5311696616090269​

​
- Pearson Correlation:​

-0.1260682264148248, ​

p-value: 0.5572134508986154​

- Chi-Square Statistic: ​

0.4363636363636363,​

p-value: 0.8039792503313262​

​