<section>
  <div>
    <span>Wide range of conversions</span>
    <span>|</span>
    <span>Personalized dashboard</span>
    <span>|</span>
    <span>Mobile friendly and downloadable (PWA)</span>
    <span>|</span>
    <span>No ads, I promise</span>
    <span>|</span>
    <span>Free to use, for now</span>
    <span>|</span>
    <span>...and more to come!</span>
  </div>
</section>

<style>
  section {
    width: 100vw;
    position: block;
    overflow: hidden;
  }
  div {
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
    animation: animate 20s linear infinite;
  }
  span {
    display: inline-block;
    font-size: var(--font-size-6);
    text-transform: uppercase;
  }

  @media (min-width: 640px) {
    section {
      position: absolute;
      bottom: 0;
    }
  }

  @keyframes animate {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }
</style>
