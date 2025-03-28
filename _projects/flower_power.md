---
layout: page
title: Flower Power
description: Agricultural Output of Malaysia from 2017 to 2022.
img: assets/img/projects/flower_power.png
importance: 2
category: maps
related_publications: false
---

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/flower_power.jpg" title="Flower Power" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

If you ever took a trip across northern Malaysia, you would be greeted by fields of paddy stretching into the horizon. It would be safe to conclude then, that rice makes up for one of the largest agricultural produce in Malaysia, but you would be wrong. In fact, the amount of rice produced in Malaysia is second to and dwarfed by the production of flowers.

In 2022 alone, flowers made up 98.10% of agriculture output at more than 355 million metric tonnes. It is not surprising that this is the case, since the yield of flowers per hectare of land is far beyond any other produce. With an annual yield of over 100,000 metric tonnes per hectare, it soars above the next crop group, vegetables, with an annual yield of only 17 metric tonnes per hectare.

According to the [Black Tulip Group](https://btfgroup.com/malaysia-farms/), flower exports in Malaysia are split into two groups. The first is temperate flowers consisting of roses, chrysanthemums and carnations which are grown in highlands such as the Cameron Highlands. The other group are more exotic flowers which thrive in the more humid low lands such as orchids. According to [The Observatory of Economic Complexity](https://oec.world/en/profile/bilateral-product/cut-flowers/reporter/mys), Malaysia exported around USD 94.1M of flowers around the world in 2023, placing Malaysia as one of the major exporters of cut flowers with top destinations including Japan, Australia, Thailand and Singapore. 

As successful as flower exports are in Malaysia, it is not the largest agricultural export. That title belongs to palm oil with an export of USD 14B in 2023. Curiously, this data was not included in my data source. I have reached out to the [Ministry of Agriculture and Food Security](https://www.kpkm.gov.my/en/home) on the 28th of February 2025, but they have not responded.

<hr>

### Some background

I have been recently introduced to Tableau for data visualization and was interested in making a dashboard myself. As a first attempt at making a Tableau dashboard, I decided to use data available from my home country, Malaysia. The Malaysian government, being notoriously slow in all things related to modernization did in fact have a data repository maintained by the Department of Statistics Malaysia (DOSM). I was pleasantly surprised to find that they had a relatively modern website and used modern open source frameworks.

I decided to use the [agriculture data of Malaysia](https://open.dosm.gov.my/data-catalogue/crops_state), which included the crop production and area by state. Naturally, the first thing I did was to calculate the yield and compared them by state. The data also spans between 2017 and 2022, which allowed me to plot the production by year. I was also curious how much of each type of crop was being produced by each state. I could make a bar chart, but I decided on making one doughnut chart for each state to show the relative proportions.

Since I'm using Tableau Public, the dashboard is published which I then embeded on this page below. Due to the constraints of this blog, the rendered dashboard is not what I hoped. So if you are interested in looking at it in more detail, may I recommend you view the dashboard in fullscreen, or you could view it on the Tableau Public page [here](https://public.tableau.com/app/profile/jm.y/viz/CropsinMalaysia/Dashboard1).

<div class="row">
<div class='tableauPlaceholder' id='viz1742892873276' style='position: relative'>
<noscript>
    <a href='#'><img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Cr&#47;CropsinMalaysia&#47;Dashboard1&#47;1_rss.png' style='border: none' /></a>
</noscript>
<object class='tableauViz'  style='display:none;'>
    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
    <param name='embed_code_version' value='3' />
    <param name='site_root' value='' />
    <param name='name' value='CropsinMalaysia&#47;Dashboard1' />
    <param name='tabs' value='no' />
    <param name='toolbar' value='yes' />
    <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Cr&#47;CropsinMalaysia&#47;Dashboard1&#47;1.png' />
    <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' />
    <param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' />
    <param name='display_count' value='yes' /><param name='language' value='en-US' />
</object>
</div>
<script type='text/javascript'>
    var divElement = document.getElementById('viz1742892873276');
    var vizElement = divElement.getElementsByTagName('object')[0];
    if ( divElement.offsetWidth > 800 ){ vizElement.style.minWidth='420px';vizElement.style.maxWidth='1920px';vizElement.style.width='100%';vizElement.style.minHeight='587px';vizElement.style.maxHeight='1107px';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';}
    else if ( divElement.offsetWidth > 500 ) { vizElement.style.minWidth='420px';vizElement.style.maxWidth='1920px';vizElement.style.width='100%';vizElement.style.minHeight='587px';vizElement.style.maxHeight='1107px';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';}
    else { vizElement.style.width='100%';vizElement.style.height='600px';}
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>
</div>