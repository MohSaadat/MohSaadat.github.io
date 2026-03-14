---
title: ""
permalink: /research/
---

<style>
  /* Keep sidebar; expand research content by ~60% to the right on desktop. */
  @media (min-width: 57.8125em) {
    #main .page {
      padding-right: 0;
    }

    #main .page .page__content {
      width: 120%;
      max-width: none;
    }
  }

  .research-entry {
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e6e6e6;
  }

  .research-title {
    margin: 0 0 0.8rem 0;
    font-size: 1.65rem;
    font-weight: 700;
    line-height: 1.25;
  }

  .research-content {
    font-size: 1rem;
    line-height: 1.7;
  }

  .research-content p {
    margin: 0 0 0.9rem 0;
    text-align: justify;
  }

  .research-teaser {
    float: left;
    width: 100%;
    max-width: 100%;
    margin: 0 1rem 0.8rem 0;
    border: 1px solid #dddddd;
  }

  .research-teaser--full {
    width: 100%;
  }

  .research-teaser--half {
    width: 50%;
  }

  .research-teaser--three-quarters {
    width: 75%;
  }

  .research-teaser--six-tenths {
    width: 60%;
  }

  .research-publications {
    clear: both;
    margin-top: 0.5rem;
    padding-top: 0.35rem;
    border-top: 1px solid #d8d8d8;
    font-size: 1rem;
  }

  .research-publications a {
    margin-right: 0.75rem;
  }

  @media (max-width: 43.75em) {
    .research-teaser {
      float: none;
      display: block;
      width: 100%;
      max-width: 100%;
      margin: 0 0 0.75rem 0;
    }
  }
</style>

<p style="text-align: justify;">
  My research is focused on ubiquitous wireless sensing and imaging, and digital health perception using multimodal
  data (vision and audio). I combine signal processing, deep learning, and classical ML to build robust, data-driven
  systems that bridge advances in AI/ML with intelligent perception applications. I also have experience in
  inter-disciplinary and collaborative research.
</p>

<div class="research-entry">
  <div class="research-title"><strong>Vision and Audio Based Post-stroke Recovery Assessment</strong></div>
  <div class="research-content">
    <img class="research-teaser research-teaser--half" src="{{ '/images/research_images/vision_audio_stroke.png' | relative_url }}" alt="Research teaser figure">
    <p>
	  We collaborate with a team of neurologists to bring post-stroke recovery assessment to a multimodal (vision & audio)
	  system. A synchronized multi-sensors pipeline was developed, and we captured standard stroke assessment trials
	  -- facilitated by our collaborators from the neurology team -- from stroke survivors and healthy subjects.
	  We then explored advances in signal processing, computer vision, audio processing, and Large Language Models (LLM)
	  to emulate stroke assessment by human expert from camera and microphone data.
	  The long-term objective is to support frequent, objective, and repeatable assessments without requiring specialized
	  hardware setup. This allows an automated stroke assessment pipeline to be deployed in mobile health clinics or even
      in a home environment	to cater to stroke survivors with extreme mobility impediments or living in remote areas
	  without accessible care.
    </p>
  </div>
  <div class="research-publications">
    Publications:
    NeuroMotion (Under review in TNSRE) |
	NeuroConv (To be submitted in TNSRE) |
	<a href="{{ '/files/Stroke_ISC25.pdf' | relative_url }}" target="_blank" rel="noopener">Stroke_ISC25</a>
  </div>
</div>

<div class="research-entry">
  <div class="research-title"><strong>Human Activity Sensing Using Wireless Signals</strong></div>
  <div class="research-content">
    <img class="research-teaser research-teaser--six-tenths" src="{{ '/images/research_images/MilliNetS_teaser.png' | relative_url }}" alt="Research teaser figure">
    <p>
	  In this project, we investigate indoor human activity sensing from mmWave radio signals. MmWave is a core technology
	  in 5G-and-beyond networking systems. Besides high throughput and low latency networking, mmWave band also allows much
	  finer-grained sensing of human movement and pose. Such sensing is of extreme interest to researchers exploring contactless,
	  indoor tracking of human activity for health rehabilitation and security. Wireless signals do not require proper visibility
	  conditions which makes it suitable for continuous indoor monitoring. Moreover, radio reflections do not capture clear images
	  of the human body or the indoor scene. This makes such a system more privacy-aware than camera-based ones.
	  There are broadly two challenges.
	  Firstly, existing networking infrastructure is not designed for concurrent networking and activity sensing.
	  Secondly, wireless signals, especially high frequency mmWave signals, suffer from high information loss due to specular
	  reflections as well as variable reflectivities of different surfaces (causing reflections from moderately reflecting surface
	  to be overshadowed by ones from strong reflectors).
    </p>
  </div>
  <div class="research-publications">
    Publications:
	MilliNetS (Under review at Elsevier HCC) |
    <a href="{{ '/files/mNetS_CHASE24.pdf' | relative_url }}" target="_blank" rel="noopener">mNetS_CHASE24</a> |
    <a href="{{ '/files/MilliNetS_CHASE24.pdf' | relative_url }}" target="_blank" rel="noopener">mNetS_CHASE24_2</a> |
	<a href="{{ '/files/mmGym_MobiSys22.pdf' | relative_url }}" target="_blank" rel="noopener">mmGym_MobiSys22</a>
	<a href="https://www.dropbox.com/scl/fo/hu3bjqp8gdxukzf8xh2yt/AJPVV_QGN_avG7DSbDyXJeQ?rlkey=d28ivqqzo2p4kth9aphmi72ga&st=jn8rgn34&dl=0" target="_blank" rel="noopener">Demo: realtime activity recognition</a>
  </div>
</div>

<div class="research-entry">
  <div class="research-title"><strong>Imaging hidden objects with handheld millimeter-wave devices</strong></div>
  <div class="research-content">
    <img class="research-teaser research-teaser--three-quarters" src="{{ '/images/research_images/SquiggleMilli_teaser.png' | relative_url }}" alt="Research teaser figure">
    <p>
      We tackle the problem of bringing imaging of hidden structures (e.g., objects under clothing or in low visibility) to handheld mmWave
	  devices, rather than relying on specialized infrastructure. Today, this capability largely exists in bulky airport security scanners,
	  which use millimeter-wave radio to probe through visual obstructions. Making this portable is hard for two key reasons: (1) freehand
	  scanning motion is non-uniform and produces sparse, irregular measurements, and (2) mmWave reflections are highly specular, causing
	  significant information loss and poor spatial detail in reconstructions. We address these challenges by combining motion compensation
	  with compressed sensing to robustly reconstruct shapes from human, freehand scanning trajectories; using a cGAN-based super-resolution
	  model to recover missing high-frequency details and sharpen the reconstructed images; and applying unsupervised clustering for background
	  cancellation and separation of multiple objects in the scene. Finally, because real paired training data are difficult to collect at
	  scale, we generate sufficient supervision using ray-tracing-based simulation to create synthetic datasets that enable effective learning
	  and generalization.
    </p>
  </div>
  <div class="research-publications">
    Publications:
    <a href="{{ '/files/SquiggleMilli_IMWUT21.pdf' | relative_url }}" target="_blank" rel="noopener">SquiggleMilli_IMWUT21</a> |
    <a href="{{ '/files/ZigZagCam_HotMobile21.pdf' | relative_url }}" target="_blank" rel="noopener">ZigZagCam_HotMobile21</a> |
	<a href="{{ '/files/MilliCam_ICCCN20.pdf' | relative_url }}" target="_blank" rel="noopener">MilliCam_ICCCN20</a>
  </div>
</div>

<div class="research-entry">
  <div class="research-title"><strong>Temperature behavior and overheating mitigation of millimeter-wave devices</strong></div>
  <div class="research-content">
    <img class="research-teaser research-teaser--six-tenths" src="{{ '/images/research_images/rog_temperature_scheduler_concept.png' | relative_url }}" alt="Research teaser figure">
    <p>
      This work investigates a growing practical issue in millimeter-wave (mmWave) networking: while mmWave enables multi-Gbps, ultra-low-latency
      connectivity, operating at very high frequencies and wide bandwidths makes devices consume more energy, dissipate more power, and heat up
      quickly—often enough to hurt performance and user comfort. We first conduct a detailed thermal characterization of mmWave devices and find
      that heating happens rapidly: after just 10 seconds of data transfer at 1.9 Gbps, the antenna temperature can reach 68°C, which reduces
      throughput by 21%, increases throughput variability by 6×, and requires about 130 seconds to cool back down. Motivated by these measurement
      insights, we propose Aquilo, a temperature-aware multi-antenna network scheduler that actively manages transmissions to balance performance
      and thermal safety. Experiments on a real testbed in both static and mobile scenarios show that Aquilo keeps devices substantially
      cooler—achieving a median peak temperature within 0.5–2°C of the thermal optimum—while sacrificing less than 10% throughput.
    </p>
  </div>
  <div class="research-publications">
    Publications:
    <a href="{{ '/files/Aquilo_HCC24.pdf' | relative_url }}" target="_blank" rel="noopener">Aquilo_HCC24</a> |
    <a href="{{ '/files/Aquilo_ICNP20.pdf' | relative_url }}" target="_blank" rel="noopener">Aquilo_ICNP20</a> |
	<a href="{{ '/files/Aquilo_MobiCom20.pdf' | relative_url }}" target="_blank" rel="noopener">Aquilo_MobiCom20</a>
  </div>
</div>

<!--
<div class="research-entry">
  <div class="research-title"><strong>Passive Speech Biomarkers for Neuromotor Function Scoring</strong></div>
  <div class="research-content">
    <img class="research-teaser" src="{{ '/images/research_images/vision_audio_stroke.svg' | relative_url }}" alt="Research teaser figure">
    <p>
      We are examining passive audio recordings to derive speech biomarkers linked to neuromotor health. The central
      challenge is to isolate clinically relevant cues from noisy and naturally variable conversational speech.
    </p>
    <p>
      The pipeline includes denoising, phonetic segmentation, temporal stability analysis, and uncertainty-aware scoring.
      This direction is designed to complement in-person evaluations with quantitative and scalable measurements collected
      from everyday interactions.
    </p>
  </div>
  <div class="research-publications">
    Publications:
    <a href="{{ site['MyCV'] | relative_url }}" target="_blank" rel="noopener">Paper1</a>
    <a href="{{ site['MyCV'] | relative_url }}" target="_blank" rel="noopener">Paper2</a>
  </div>
</div>

<div class="research-entry">
  <div class="research-title"><strong>Cross-modal Health Monitoring with Edge-native Intelligence</strong></div>
  <div class="research-content">
    <img class="research-teaser" src="{{ '/images/research_images/vision_audio_stroke.svg' | relative_url }}" alt="Research teaser figure">
    <p>
      This research theme studies how multi-modal sensing streams can be fused at the edge to reduce latency, improve
      privacy, and lower communication overhead. The architecture supports adaptive model selection depending on available
      sensing quality and compute budget.
    </p>
    <p>
      We are evaluating robust deployment strategies that continue to work under missing modalities, imperfect calibration,
      and dynamic user behavior. The expected outcome is a practical foundation for continuous and unobtrusive health
      tracking in real-world environments.
    </p>
  </div>
  <div class="research-publications">
    Publications:
    <a href="{{ site['MyCV'] | relative_url }}" target="_blank" rel="noopener">Paper1</a>
    <a href="{{ site['MyCV'] | relative_url }}" target="_blank" rel="noopener">Paper2</a>
  </div>
</div>
-->
