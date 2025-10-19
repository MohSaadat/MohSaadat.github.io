---
layout: archive
title: ""
permalink: /publications/
author_profile: true
---

## Publications
<span class="pub-badge">CHASE'24</span> 
<strong>Moh Sabbir Saadat</strong>, Sanjib Sur. 2024. 
<a href="../files/mNetS_CHASE24.pdf" target="_blank">"Enabling Coexistence of Indoor Millimeter-Wave Networking and Human Activity Sensing"</a>, 
in the IEEE/ACM International Conference on Connected Health: Applications, Systems, and Engineering Technologies, Wilmington, DE, USA.

<span class="pub-badge">CHASE'24</span> 
<strong>Moh Sabbir Saadat</strong>, Sanjib Sur. 2024. 
<a href="../files/MilliNetS_CHASE24.pdf" target="_blank">"Human Activity Sensing from Low-rate Samples under Integrated Networking"</a>, 
in the IEEE/ACM International Conference on Connected Health: Applications, Systems, and Engineering Technologies, Wilmington, DE, USA.

<span class="pub-badge">HCC'24</span> 
<strong>Moh Sabbir Saadat</strong>, Sanjib Sur, Srihari Nelakuditi. 2024. 
<a href="../files/Aquilo_HCC24.pdf" target="_blank">"Aquilo: Temperature-Aware Scheduler for Millimeter-Wave Devices and Networks"</a>, 
in the Elsevier Journal of High Confidence Computing.

<span class="pub-badge">MobiSys'22</span> 
Edward M Sitar IV, <strong>Moh Sabbir Saadat</strong>, Sanjib Sur. 2022. 
<a href="../files/mmGym_MobiSys22.pdf" target="_blank">"A Millimeter-Wave Wireless Sensing Approach for At-Home Exercise Recognition"</a>, 
in the ACM International Conference on Mobile Systems, Applications, and Services, Portland, OR, USA.

<span class="pub-badge">IMWUT/UbiComp'21</span> 
Hem Regmi, <strong>Moh Sabbir Saadat</strong>, Sanjib Sur, Srihari Nelakuditi. 2021. 
<a href="../files/SquiggleMilli_IMWUT21.pdf" target="_blank">"SquiggleMilli: Approximating SAR imaging on Mobile Millimeter-Wave Devices"</a>, 
in the Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technology.

<span class="pub-badge">HotMobile'21</span> 
Hem Regmi<sup>*</sup>, <strong>Moh Sabbir Saadat</strong><sup>*</sup>, Sanjib Sur, Srihari Nelakuditi. 2021. 
<a href="../files/ZigZagCam_HotMobile21.pdf" target="_blank">"ZigZagCam: Pushing the Limits of Hand-held Millimeter-Wave Imaging"</a>, 
in the International Workshop on Mobile Computing Systems and Applications. Virtual.

<span class="pub-badge">ICNP'20</span> 
<strong>Moh Sabbir Saadat</strong>, Sanjib Sur, Srihari Nelakuditi. 2020. 
<a href="../files/Aquilo_ICNP20.pdf" target="_blank">"A Case for Temperature-Aware Scheduler for Millimeter-Wave Devices and Networks"</a>, 
in the IEEE International Conference on Network Protocols, Madrid, Spain.

<span class="pub-badge">MobiCom'20</span> 
<strong>Moh Sabbir Saadat</strong>, Sanjib Sur, Srihari Nelakuditi. 2020. 
<a href="../files/Aquilo_MobiCom20.pdf" target="_blank">"Bringing Temperature-Awareness to Millimeter-Wave Networks"</a>, 
in the Annual International Conference on Mobile Computing and Networking, London, UK.

<span class="pub-badge">ICCCN'20</span> 
<strong>Moh Sabbir Saadat</strong>, Sanjib Sur, Srihari Nelakuditi, Parmesh Ramanathan. 2020. 
<a href="../files/MilliCam_ICCCN20.pdf" target="_blank">"Millicam: Hand-held Millimeter-Wave Imaging"</a>, 
in the International Conference on Computer Communications and Networks, Honolulu, Hawaii, USA.

<sup>*</sup> <em>Indicates co-primary authors</em>

## Patent
<span class="pub-badge">Granted</span> 
Sanjib Sur, <strong>Moh Sabbir Saadat</strong>, Srihari Nelakuditi. Filed in May 2021. 
US Utility Patent Application 17/327,881, Heat Dissipation for Millimeter-Wave Devices with Antenna Switching.


{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
