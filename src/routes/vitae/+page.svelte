<script>
import DecoratorLine from '$lib/DecoratorLine.svelte';
import CornerOrnamentContainer from '$lib/CornerOrnamentContainer.svelte';
import Education from '$lib/Education.svelte';
import Experience from '$lib/Experience.svelte';
import Skills from '$lib/Skills.svelte';

import {skills} from '$lib/data/skills.ts'
import {experience} from '$lib/data/experience.ts'
import {education} from '$lib/data/education.ts'
</script>

<div class="relative w-full">
  <div class="pointer-events-none absolute inset-0">
    <CornerOrnamentContainer />
  </div>

  <div class="relative z-10 min-h-screen py-24 px-6 md:px-12">
    <div class="max-w-5xl lg:w-4xl mx-auto">
      <div class="text-center mb-24">
        <p class="font-mono text-md tracking-[0.35em] uppercase text-primary mb-5">Curriculum</p>
        <h1
          class="text-[clamp(4rem,9vw,9rem)] leading-[0.9] text-foreground mb-8"
          style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontStyle: "italic" }}
        >
          Vitae
        </h1>
        <div class="my-8 flex justify-center">
          <DecoratorLine />
        </div>
        <p class="text-primay-foreground mb-10 font-lora text-xs tracking-[0.22em] uppercase md:text-xs">
          A record of my study, practice, and work — arranged in reverse order of time.
        </p>

        <div class="mt-4">
          <a
            href="#"
            class="backdrop-blur-xs group font-mono-bold inline-flex items-center gap-3 border border-primary/40 px-18 py-3.5 text-sm tracking-[0.22em] text-primary uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Download PDF
          </a>
        </div>
      </div>

      <div class="space-y-10">
        <Education EDUCATION={education} />

        <div class="flex justify-center">
          <DecoratorLine class="max-w-xs opacity-40" />
        </div>

        <Experience EXPERIENCE={experience} />

        <div class="flex justify-center">
          <DecoratorLine class="max-w-xs opacity-40" />
        </div>

        <Skills groups={skills} />
      </div>
    </div>
  </div>
</div>
