import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 220px;
  height: 130px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const LoaderBlock = styled.div`
  padding: 15px 13px 19px;
`;

export default function Loader() {
  return (
    <LoaderContainer>
      <LoaderBlock>
        <svg
          width="190"
          height="96"
          viewBox="0 0 190 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20H72C77.5229 20 82 15.5228 82 10C82 4.47715 77.5229 0 72 0H10ZM113 35H0V48H113V35ZM172 8H190V12H172V8ZM58 83H0V96H58V83Z"
            fill="url(#paint0_linear_36_295)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_36_295"
              x1="4.69569e-07"
              y1="54"
              x2="190"
              y2="54"
            >
              <stop offset="0%" stopColor="#E9EEF7">
                <animate
                  attributeName="stop-color"
                  values="#E9EEF7; #C1CDDC; #E9EEF7"
                  dur="1s"
                  repeatCount="indefinite"
                ></animate>
              </stop>

              <stop offset="100%" stopColor="#C1CDDC">
                <animate
                  attributeName="stop-color"
                  values="#C1CDDC; #E9EEF7; #C1CDDC"
                  dur="1s"
                  repeatCount="indefinite"
                ></animate>
              </stop>
            </linearGradient>
          </defs>
        </svg>
      </LoaderBlock>
    </LoaderContainer>
  );
}
