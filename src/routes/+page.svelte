<script lang="ts">
  import { TryItOut } from '$lib/components';
</script>

<div class="landing">
  <div class="top-screen">
    <div class="blob" />
    <header>
      <h1>Convert <span>anything</span>, <span>anytime</span>, <span>anywhere</span>.</h1>
      <p>
        Switcheroo is your trusted ally for effortless unit and measurement conversions, all for
        free. Customize your dashboard to keep your favorite conversions at your fingertips!
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
    height: 50svh;
    width: 50vw;
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

  @media (min-width: 50rem) {
    .top-screen {
      flex-direction: row;
    }
    .blob {
      filter: blur(150px);
      z-index: -1;
      height: 30svh;
      width: 60vw;
      right: 10%;
      top: 25%;
      background-image: var(--blob);
      position: absolute;
      border-radius: var(--radius-blob-1);
    }

    header {
      flex-grow: 2;
      height: 70svh;
      padding-inline-start: var(--size-fluid-6);
    }
    header > h1 {
      font-size: var(--font-size-8);
    }
    .cta {
      max-width: var(--size-15);
    }
  }
</style>
