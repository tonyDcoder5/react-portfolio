import { HeaderNav } from "./HeaderNav";
import { Banner } from "./Banner";

export const Header = () => {
  return (
    <>
      <span>
        <a href="https://www.freepik.com/vectors/japanese-cloud">
          Japanese cloud vector created by rawpixel.com - www.freepik.com
        </a>
      </span>
      <HeaderNav />
      <Banner />
    </>
  );
};
