<script lang="ts">
  import ConversionField from '$lib/components/conversion-field.svelte';
  import TryItOut from '$lib/components/try-it-out.svelte';
</script>

<div class="landing">
  <div class="top-screen">
    <div class="blob" />
    <header>
      <h1>Convert <span>anything</span>, <span>anytime</span>, <span>anywhere</span>.</h1>
      <p>
        Switcheroo is a free friend allowing you to seamlessly convert various units and
        measurements. Customize your dashboard to keep your most frequently used conversions at your
        fingertips!
      </p>
      <div class="cta">
        <a href="/signup">
          <span>Get started now!</span>
        </a>
        <small>Ad free, no email required!</small>
      </div>
    </header>
    <TryItOut />
  </div>

  <section>
    <h2>Key Features:</h2>
    <ul>
      <li>Wide range of conversions</li>
      <li>Personalized dashboard</li>
      <li>Mobile friendly and downloadable (PWA)</li>
      <li>No ads, I promise</li>
      <li>Free to use, for now</li>
      <li>customizable conversions, that's the hard part, wait, that part can't be free. oh.</li>
      <li>...and more to come!</li>
    </ul>

    <h2>Get Started Now!</h2>
    <p>
      Sign up for a free account (no email required) to save your dashboard and access your
      conversions from any device.
    </p>
  </section>

  <section>
    <h2>Switcheroo Anywhere, Anytime</h2>
    <p>
      Take Switcheroo with you on the go! Our app is designed to be mobile-friendly, ensuring a
      seamless experience on your smartphone or tablet.
    </p>
    <div>
      <!-- <img src="download-icon.png" alt="Download Icon" /> -->
      <p>
        Download Switcheroo as a Progressive Web App (PWA) for instant access without the need for
        app stores.
      </p>
      <button>Download Now</button>
    </div>
  </section>
</div>

<style>
  .landing {
    width: 100%;
    padding-inline: var(--size-4);
    padding-block: var(--size-4);
    display: flex;
    flex-direction: column;
    gap: var(--size-8);
  }

  .top-screen {
    position: relative;

    display: flex;
    flex-direction: column;
  }
  .blob {
    filter: blur(150px);
    z-index: -1;
    height: 50dvh;
    width: 50dvw;
    right: 0%;
    top: 50%;
    background-image: var(--gradient-25);
    position: absolute;
    border-radius: var(--radius-blob-1);
  }
  header {
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: var(--size-6);
    & h1 {
      font-size: var(--font-size-7);
      & span {
        text-decoration: underline;
        text-decoration-color: var(--brand);
        text-underline-offset: var(--size-1);
      }
    }
    & p {
      font-size: var(--font-size-3);
      color: var(--text-2);
    }
  }

  .cta {
    display: flex;
    flex-direction: column;
    gap: var(--size-3);
    & a {
      color: var(--gray-0);
      font-size: var(--font-size-3);
      display: grid;
      place-items: center;
      height: var(--size-8);
      background-color: var(--brand);
      box-shadow: var(--shadow-2);
      border-radius: var(--radius-2);
      text-decoration: none;
      font-weight: 500;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  small {
    font-size: var(--font-size-2);
  }

  @media (min-width: 640px) {
    .top-screen {
      flex-direction: row;
    }
    .blob {
      filter: blur(150px);
      z-index: -1;
      height: 30dvh;
      width: 60dvw;
      right: 10%;
      top: 25%;
      background-image: var(--blob);
      position: absolute;
      border-radius: var(--radius-blob-1);
    }

    header {
      flex-grow: 2;
      height: 70dvh;
      padding-inline-start: var(--size-9);
    }
    header > h1 {
      font-size: var(--font-size-8);
    }
    .cta {
      max-width: var(--size-15);
    }
  }
</style>
