import { useTheme } from "styled-components";

export default function Loader() {
  const theme = useTheme();

  return (
    <>
      {theme.isDark ? (
        <svg
          width="220"
          height="130"
          viewBox="0 0 220 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="220" height="130" rx="10" fill="#20202C" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 15C17.4772 15 13 19.4772 13 25C13 30.5228 17.4772 35 23 35H85C90.5229 35 95 30.5228 95 25C95 19.4772 90.5229 15 85 15H23ZM126 50H13V63H126V50ZM185 23H203V27H185V23ZM71 98H13V111H71V98Z"
            fill="url(#paint0_linear_36_710)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_36_710"
              x1="13"
              y1="69"
              x2="203"
              y2="69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#475B77" />
              <stop offset="0.458333" stopColor="#94A6BE" />
              <stop offset="0.973958" stopColor="#475B77" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width="220"
          height="130"
          viewBox="0 0 220 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="220" height="130" rx="10" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 15C17.4772 15 13 19.4772 13 25C13 30.5228 17.4772 35 23 35H85C90.5229 35 95 30.5228 95 25C95 19.4772 90.5229 15 85 15H23ZM126 50H13V63H126V50ZM185 23H203V27H185V23ZM71 98H13V111H71V98Z"
            fill="url(#paint0_linear_36_265)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_36_265"
              x1="13"
              y1="69"
              x2="203"
              y2="69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C1CDDC" />
              <stop offset="0.458333" stopColor="#E9EEF7" />
              <stop offset="0.973958" stopColor="#C1CDDC" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </>
  );
}
