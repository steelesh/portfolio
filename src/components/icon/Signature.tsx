import React, { useEffect, useState } from 'react'

export const Signature = () => {
    const [shouldAnimate, setShouldAnimate] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setShouldAnimate(window.location.pathname === '/')
        }
    }, [])

    return (
        <svg
            className="signature"
            viewBox="0 0 231 156"
            fill="none"
            stroke="var(--primary-8)"
            xmlns="http://www.w3.org/2000/svg"
            width="2.5rem"
            height="2.5rem"
        >
            <style>
                {`
          @media (prefers-reduced-motion) {
            .signature path {
              animation: none !important;
              stroke-dasharray: initial !important;
            }
          }
          
          .signature {
            transition: stroke 0.3s ease-in-out;
            transition: scale 0.15s ease-in-out;
          }
          
          .signature:hover {
            stroke: var(--primary-10);
            scale: 1.1;
          }

          .signature path {
            stroke-width: 4;
            stroke-linecap: round;
            transform-origin: center;
          }

          .animate-path {
            stroke-dasharray: 1494.15;
            stroke-dashoffset: 1494.15;
            animation: draw 3s ease-in-out forwards;
          }

          @keyframes draw {
            0% {
              stroke-dashoffset: 1494.15;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
        `}
            </style>
            <path
                d="M2 154C2.2319 152.84 3.65012 151.85 4.41667 151.083C8.36285 147.137 12.4322 143.295 15.7778 138.806C31.1652 118.159 39.0007 91.985 43.9444 67.0833C46.5976 53.7193 48.8271 40.4155 49.6944 26.8056C50.1542 19.5909 51.574 10.8684 49.1944 3.83334C47.6069 -0.860251 45.9579 3.54683 45.25 5.91667C43.1172 13.0571 42.6636 20.7392 42.3056 28.1389C41.0733 53.6048 39.8526 79.2015 39.3056 104.694C39.0792 115.241 39.6805 125.725 40.2222 136.25C40.4739 141.14 40.8178 146.173 40.25 151.056C40.1622 151.81 39.7988 154.249 38.5 152.806C35.6515 149.641 34.9055 142.454 34.0278 138.556C31.7728 128.541 29.9962 118.477 27.5278 108.5C25.338 99.6498 23.4539 90.7062 22.0556 81.6945C21.5491 78.4304 21.0542 75.1419 21 71.8333C20.9657 69.7439 21.825 76.2354 21.9444 76.6667C26.5591 93.3308 34.4798 109.643 43 124.611C46.2007 130.234 49.2705 135.938 52.2778 141.667C53.9179 144.791 55.3516 148.516 57.6111 151.278C58.4959 152.359 60.0531 153.792 61.3889 154.278C63.772 155.144 63.8542 150.326 64 149.111C64.6329 143.837 64.565 138.508 65.1111 133.222C65.8538 126.033 66.6509 118.841 66.8889 111.611C67.0695 106.124 66.8717 100.528 66.3889 95.0556C66.3866 95.0298 66.2164 92.0211 65.5 92.6111C63.5801 94.1922 64.8858 100.444 65.1111 102.333C65.9187 109.105 67.7066 115.644 70 122.056C71.9271 127.443 74.0757 133.678 77.5 138.333C79.9591 141.677 82.3285 140 84.3333 137.222C90.6033 128.536 93.4839 116.174 94.1667 105.639C94.2055 105.04 94.9052 96.494 92.1944 98C88.5571 100.021 88.0668 107.793 87.8889 111.25C87.609 116.688 90.0318 147.369 101.833 138.472C107.37 134.299 109.972 127.556 111.944 121.167C114.073 114.273 115.706 106.904 115.194 99.6389C114.916 95.6851 113.111 96.9521 111.528 99.7222C107.997 105.902 107.919 114.895 108.444 121.778C109.24 132.195 119.332 151.736 132.444 142.917C143.024 135.801 148.682 121.728 153 110.333C159.249 93.843 163.89 76.7178 167.639 59.5C170.087 48.2538 172.064 37.0471 171.917 25.5C171.902 24.3123 171.873 10.8404 168.167 12.3056C163.643 14.0941 161.859 25.5494 161 29.2778C157.43 44.7682 155.91 60.7449 154 76.5C152.14 91.8488 149.683 107.391 149.722 122.889C149.732 126.726 149.541 139.022 155.944 139.111C162.554 139.203 168.449 130.293 171.389 125.556C177.471 115.754 182.314 104.762 186.278 93.9445C187.254 91.2801 188.21 88.5447 188.861 85.7778C189.053 84.9642 189.369 82.825 188.667 83.2778C187.138 84.2629 185.909 87.1693 185.194 88.6111C183.16 92.7174 181.695 97.0497 180.611 101.5C177.627 113.746 172.268 145.226 193.778 142.056C203.555 140.614 212.272 133.352 219.167 126.778C224.442 121.748 229.308 115.834 229.444 108.167C229.57 101.123 223.415 98.726 217.389 98.1111C201.455 96.4852 184.754 98.4675 168.944 100.111C121.326 105.062 73.9097 111.048 26 112.5"
                strokeLinejoin="round"
                className={shouldAnimate ? 'animate-path' : ''}
            ></path>
        </svg>
    )
}
