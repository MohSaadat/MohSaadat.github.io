---
title: ""
permalink: /research/
---

<style>
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
    width: 320px;
    max-width: 45%;
    margin: 0 1rem 0.8rem 0;
    border: 1px solid #dddddd;
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

  @media (max-width: 700px) {
    .research-teaser {
      float: none;
      display: block;
      width: 100%;
      max-width: 100%;
      margin: 0 0 0.75rem 0;
    }
  }
</style>

<div class="research-entry">
  <div class="research-title"><strong>Vision and Audio Based Post-stroke Recovery Assessment</strong></div>
  <div class="research-content">
    <img class="research-teaser" src="{{ '/images/research_images/teaser.svg' | relative_url }}" alt="Research teaser figure">
    <p>
      This project investigates how visual motion cues and speech characteristics can be fused to estimate recovery status
      after a stroke episode. We are building a pipeline that captures face dynamics, arm motion, and audio articulatory
      traits with minimal burden on patients and clinicians.
    </p>
    <p>
      The current prototype combines robust feature extraction with lightweight modeling so that inference can run in a
      practical home environment. The long-term objective is to support frequent, objective, and repeatable assessments
      without requiring specialized hardware setup.
    </p>
  </div>
  <div class="research-publications">
    Publications:
    <a href="{{ '/files/msaadat_resume.pdf' | relative_url }}" target="_blank" rel="noopener">Paper1</a>
    <a href="{{ '/files/msaadat_resume.pdf' | relative_url }}" target="_blank" rel="noopener">Paper2</a>
  </div>
</div>

<div class="research-entry">
  <div class="research-title"><strong>Contactless Millimeter-wave Sensing for Daily Mobility Tracking</strong></div>
  <div class="research-content">
    <img class="research-teaser" src="{{ '/images/research_images/teaser.svg' | relative_url }}" alt="Research teaser figure">
    <p>
      This work focuses on contactless monitoring of mobility patterns in indoor settings using commodity millimeter-wave
      devices. We explore signal representations that remain stable under day-to-day variations while preserving
      fine-grained motion signatures.
    </p>
    <p>
      By pairing signal processing with compact machine learning models, the framework aims to produce reliable movement
      indicators that can be used for longitudinal health analytics. The effort emphasizes generalization across rooms,
      users, and device placement constraints.
    </p>
  </div>
  <div class="research-publications">
    Publications:
    <a href="{{ '/files/msaadat_resume.pdf' | relative_url }}" target="_blank" rel="noopener">Paper1</a>
    <a href="{{ '/files/msaadat_resume.pdf' | relative_url }}" target="_blank" rel="noopener">Paper2</a>
  </div>
</div>

<div class="research-entry">
  <div class="research-title"><strong>Passive Speech Biomarkers for Neuromotor Function Scoring</strong></div>
  <div class="research-content">
    <img class="research-teaser" src="{{ '/images/research_images/teaser.svg' | relative_url }}" alt="Research teaser figure">
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
    <a href="{{ '/files/msaadat_resume.pdf' | relative_url }}" target="_blank" rel="noopener">Paper1</a>
    <a href="{{ '/files/msaadat_resume.pdf' | relative_url }}" target="_blank" rel="noopener">Paper2</a>
  </div>
</div>

<div class="research-entry">
  <div class="research-title"><strong>Cross-modal Health Monitoring with Edge-native Intelligence</strong></div>
  <div class="research-content">
    <img class="research-teaser" src="{{ '/images/research_images/teaser.svg' | relative_url }}" alt="Research teaser figure">
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
    <a href="{{ '/files/msaadat_resume.pdf' | relative_url }}" target="_blank" rel="noopener">Paper1</a>
    <a href="{{ '/files/msaadat_resume.pdf' | relative_url }}" target="_blank" rel="noopener">Paper2</a>
  </div>
</div>
