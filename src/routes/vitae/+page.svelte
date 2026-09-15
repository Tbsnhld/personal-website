<script>
import DecoratorLine from '$lib/DecoratorLine.svelte';
import Flower from '$lib/Flower.svelte';
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
    <Flower class="absolute inset-0 m-auto h-full w-full" />
    <CornerOrnamentContainer />
  </div>

  <div class="relative z-10 min-h-screen py-24 px-6 md:px-12">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-24">
        <p class="font-mono text-[10px] tracking-[0.35em] uppercase text-primary mb-5">Curriculum Vitae</p>
        <h1
          class="text-[clamp(3.5rem,9vw,7rem)] leading-[0.9] text-foreground mb-8"
          style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontStyle: "italic" }}
        >
          Vitae
        </h1>
        <div class="flex justify-center">
          <DecoratorLine class="max-w-sm" />
        </div>
        <p class="mt-6 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          A record of study, practice, and work — arranged in reverse order of time.
        </p>
        <div class="mt-8">
          <a
            href="#"
            class="inline-flex items-center gap-2.5 border border-primary/45 px-7 py-3 text-[11px] font-mono tracking-[0.2em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Download PDF
          </a>
        </div>
      </div>

      <div class="space-y-24">
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
