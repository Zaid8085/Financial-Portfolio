export const Logos = ({ type, bg }: { type: string; bg?: string }) => {
  if (type === "headerLogo") {
    return (
      <div className="flex items-center justify-start ml-10 space-x-2">
        <img
          src="/financialIcon.png"
          alt="Logo"
          width={10}
          height={10}
          className="bg-transparent rounded-full w-[70px] h-[50px]"
        />
        <h1 className={bg === "dark" ? "logo-text-dark" : "logo-text-light"}>
          {bg !== "dark" ? "Financial Portfolio" : ""}
        </h1>
      </div>
    );
  }

  if (type === "iconLogo") {
    return (
      <>
        <img
          src="/financialIcon.png"
          alt="Logo"
          width={10}
          height={10}
          className="bg-transparent rounded-full w-[200px] h-[150px] lg:w-[250px] lg:h-[200px]"
        />
      </>
    );
  }

  if (type === "loginScreenImg") {
    return (
      <>
        <img
          src="/financial.jpg"
          alt="Financial Portfolio"
          width={600}
          height={450}
          className="rounded-lg transition-all hover:rotate-2 hover:scale-105"
        />
      </>
    );
  }
};
