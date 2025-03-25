import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'wallet-provider-icon',
  styleUrl: 'wallet-provider-icon.scss',
  shadow: true,
})
export class WalletProviderIcon {
  @Prop() class?: string;

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
        <mask id="mask0_7913_1658" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="41">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 12.7774C40 12.3026 40.0002 11.8277 39.9973 11.3528C39.9949 10.9527 39.9903 10.5528 39.9794 10.1529C39.9559 9.28144 39.9045 8.40246 39.7495 7.54067C39.5923 6.66645 39.3356 5.85281 38.9311 5.0585C38.5335 4.27777 38.014 3.56336 37.3942 2.94399C36.7745 2.32462 36.0599 1.8055 35.2789 1.40807C34.4838 1.00346 33.6693 0.746861 32.7941 0.589726C31.9322 0.434969 31.053 0.383659 30.1815 0.360115C29.7813 0.34929 29.3812 0.344727 28.9809 0.342251C28.5058 0.339339 28.0307 0.339581 27.5555 0.339581L22.0387 0.319824H17.9125L12.4933 0.339581C12.0172 0.339581 11.5411 0.339339 11.0651 0.342251C10.664 0.344727 10.2631 0.34929 9.86221 0.360115C8.98867 0.383659 8.10746 0.435018 7.24354 0.589969C6.36719 0.747056 5.55146 1.00356 4.75526 1.40788C3.97259 1.80535 3.25643 2.32453 2.63547 2.94399C2.0146 3.56331 1.49416 4.27758 1.09577 5.05816C0.69014 5.85286 0.432958 6.66699 0.275386 7.54169C0.120242 8.40314 0.0688344 9.28183 0.0451938 10.1529C0.0344172 10.5528 0.0297571 10.9528 0.0273299 11.3528C0.0244173 11.8277 0 12.4177 0 12.8926L0.00014563 18.2367L0 22.4071L0.02466 27.8648C0.02466 28.3404 0.0244658 28.8159 0.0273299 29.2914C0.0297571 29.692 0.0344172 30.0925 0.0452424 30.4929C0.0688344 31.3655 0.120339 32.2458 0.275629 33.1087C0.433152 33.9841 0.690286 34.7989 1.09557 35.5943C1.49402 36.3761 2.01455 37.0914 2.63547 37.7117C3.25638 38.3319 3.97235 38.8517 4.75487 39.2497C5.55156 39.6549 6.36767 39.9118 7.24456 40.0691C8.1081 40.2241 8.98901 40.2756 9.86221 40.2991C10.2631 40.3099 10.664 40.3145 11.0651 40.317C11.5412 40.3199 12.0172 40.3197 12.4933 40.3197L17.9615 40.3198H22.0979L27.5555 40.3196C28.0307 40.3196 28.5058 40.3199 28.9809 40.317C29.3812 40.3145 29.7813 40.3099 30.1815 40.2991C31.0533 40.2755 31.9328 40.224 32.7951 40.069C33.6698 39.9116 34.4839 39.6548 35.2786 39.2499C36.0597 38.8519 36.7745 38.332 37.3942 37.7117C38.0139 37.0915 38.5333 36.3763 38.931 35.5946C39.3357 34.7989 39.5924 33.9837 39.7497 33.1077C39.9046 32.2451 39.9559 31.3652 39.9795 30.4929C39.9903 30.0924 39.9949 29.6919 39.9973 29.2914C40.0002 28.8159 40 28.3404 40 27.8648C40 27.8648 39.9997 22.5035 39.9997 22.4071V18.2324C39.9997 18.1612 40 12.7774 40 12.7774Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_7913_1658)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 12.7774C40 12.3026 40.0002 11.8277 39.9973 11.3528C39.9949 10.9527 39.9903 10.5528 39.9794 10.1529C39.9559 9.28144 39.9045 8.40246 39.7495 7.54067C39.5923 6.66645 39.3356 5.85281 38.9311 5.0585C38.5335 4.27777 38.014 3.56336 37.3942 2.94399C36.7745 2.32462 36.0599 1.8055 35.2789 1.40807C34.4838 1.00346 33.6693 0.746861 32.7941 0.589726C31.9322 0.434969 31.053 0.383659 30.1815 0.360115C29.7813 0.34929 29.3812 0.344727 28.9809 0.342251C28.5058 0.339339 28.0307 0.339581 27.5555 0.339581L22.0387 0.319824H17.9125L12.4933 0.339581C12.0172 0.339581 11.5411 0.339339 11.0651 0.342251C10.664 0.344727 10.2631 0.34929 9.86221 0.360115C8.98867 0.383659 8.10746 0.435018 7.24354 0.589969C6.36719 0.747056 5.55146 1.00356 4.75526 1.40788C3.97259 1.80535 3.25643 2.32453 2.63547 2.94399C2.0146 3.56331 1.49416 4.27758 1.09577 5.05816C0.69014 5.85286 0.432958 6.66699 0.275386 7.54169C0.120242 8.40314 0.0688344 9.28183 0.0451938 10.1529C0.0344172 10.5528 0.0297571 10.9528 0.0273299 11.3528C0.0244173 11.8277 0 12.4177 0 12.8926L0.00014563 18.2367L0 22.4071L0.02466 27.8648C0.02466 28.3404 0.0244658 28.8159 0.0273299 29.2914C0.0297571 29.692 0.0344172 30.0925 0.0452424 30.4929C0.0688344 31.3655 0.120339 32.2458 0.275629 33.1087C0.433152 33.9841 0.690286 34.7989 1.09557 35.5943C1.49402 36.3761 2.01455 37.0914 2.63547 37.7117C3.25638 38.3319 3.97235 38.8517 4.75487 39.2497C5.55156 39.6549 6.36767 39.9118 7.24456 40.0691C8.1081 40.2241 8.98901 40.2756 9.86221 40.2991C10.2631 40.3099 10.664 40.3145 11.0651 40.317C11.5412 40.3199 12.0172 40.3197 12.4933 40.3197L17.9615 40.3198H22.0979L27.5555 40.3196C28.0307 40.3196 28.5058 40.3199 28.9809 40.317C29.3812 40.3145 29.7813 40.3099 30.1815 40.2991C31.0533 40.2755 31.9328 40.224 32.7951 40.069C33.6698 39.9116 34.4839 39.6548 35.2786 39.2499C36.0597 38.8519 36.7745 38.332 37.3942 37.7117C38.0139 37.0915 38.5333 36.3763 38.931 35.5946C39.3357 34.7989 39.5924 33.9837 39.7497 33.1077C39.9046 32.2451 39.9559 31.3652 39.9795 30.4929C39.9903 30.0924 39.9949 29.6919 39.9973 29.2914C40.0002 28.8159 40 28.3404 40 27.8648C40 27.8648 39.9997 22.5035 39.9997 22.4071V18.2324C39.9997 18.1612 40 12.7774 40 12.7774Z"
            fill="#143736"
          />
          <rect
            opacity="0.4"
            x="0.169903"
            y="6.65477"
            width="39.6602"
            height="39.6602"
            rx="8.76214"
            fill="url(#paint0_linear_7913_1658)"
            stroke="url(#paint1_linear_7913_1658)"
            stroke-width="0.339806"
          />
          <rect
            x="0.169903"
            y="12.8198"
            width="39.6602"
            height="39.6602"
            rx="8.76214"
            fill="url(#paint2_linear_7913_1658)"
            stroke="url(#paint3_linear_7913_1658)"
            stroke-width="0.339806"
          />
          <g filter="url(#filter0_dddd_7913_1658)">
            <path
              d="M13.1383 22.5535L18.8349 19.498L17.8771 17.6499L12.6609 19.7681C12.5265 19.8227 12.3776 19.8227 12.2433 19.7681L7.02558 17.6499L6.06787 19.498L11.7645 22.5535L6.06787 25.6076L7.02558 27.4557L12.2419 25.3375C12.3762 25.2829 12.5251 25.2829 12.6594 25.3375L17.8757 27.4557L18.8334 25.6076L13.1368 22.5521L13.1383 22.5535Z"
              fill="#000F0E"
            />
          </g>
        </g>
        <defs>
          <filter id="filter0_dddd_7913_1658" x="-5.00009" y="8.71786" width="34.903" height="31.9416" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="0.970874" />
            <feGaussianBlur stdDeviation="1.26214" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.968627 0 0 0 0 0.866667 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7913_1658" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2.13592" />
            <feGaussianBlur stdDeviation="5.53398" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.968627 0 0 0 0 0.866667 0 0 0 0.3 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_7913_1658" result="effect2_dropShadow_7913_1658" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="0.291262" />
            <feGaussianBlur stdDeviation="0.533981" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_7913_1658" result="effect3_dropShadow_7913_1658" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="0.194175" />
            <feGaussianBlur stdDeviation="0.0970874" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_7913_1658" result="effect4_dropShadow_7913_1658" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_7913_1658" result="shape" />
          </filter>
          <linearGradient id="paint0_linear_7913_1658" x1="20.2306" y1="15.5045" x2="20.2306" y2="35.9947" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00FFE0" />
            <stop offset="1" stop-color="#00FFE0" />
          </linearGradient>
          <linearGradient id="paint1_linear_7913_1658" x1="6.49826" y1="27.07" x2="42.1154" y2="23.7635" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00FFE0" />
            <stop offset="1" stop-color="#4CFFE9" />
          </linearGradient>
          <linearGradient id="paint2_linear_7913_1658" x1="20.2306" y1="21.6695" x2="20.2306" y2="42.1597" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00FFE0" />
            <stop offset="1" stop-color="#00FFE0" />
          </linearGradient>
          <linearGradient id="paint3_linear_7913_1658" x1="6.49826" y1="33.2351" x2="42.1154" y2="29.9285" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00FFE0" />
            <stop offset="1" stop-color="#4CFFE9" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
}
