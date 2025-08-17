import { useTheme } from "styled-components";

export default function HeaderLogo() {
  const theme = useTheme();
  return (
    <>
      {theme.name === "light" ? (
        <div className="header__logo">
          <a href="" target="_self">
            <img src="/images/logo.png" alt="logo" />
          </a>
        </div>
      ) : (
        <div className="header__logo">
          <a href="" target="_self">
            <img src="/images/logo_dark.png"  alt="logo" />
          </a>
        </div>
      )}
    </>
  );
}
