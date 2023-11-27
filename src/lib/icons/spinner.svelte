<div class="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<style>
  .spinner {
    display: inline-block;
    position: relative;
    height: var(--font-size-3);
    width: var(--font-size-3);
  }
  .spinner div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: var(--font-size-3);
    height: var(--font-size-3);
    border: 2px solid var(--btn-color);
    border-radius: 50%;
    animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--btn-color) transparent transparent transparent;
    filter: invert(1);
  }
  .spinner div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .spinner div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .spinner div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
