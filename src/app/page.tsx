const Home = () => {
  return (
    <div className="bg-white text-gray-700 text-4xl leading-loose font-sans overflow-hidden">
      <div className="flex flex-col m-auto container">
        <div className="flex h-screen flex-col mx-40 w-[700px]">
          <div className="flex-auto content-end">
            Hello! &nbsp;
            <span className="hover:animate-wave origin-bottom inline-block">
              &#128075;
            </span>
          </div>
          <div className="flex-auto content-center">
            I'm <b>Aidan Hopper</b>, a design-minded full-stack software engineer
            focused on building beautiful interfaces & quality experiences.
          </div>
          <div className="flex-auto content-start text-xl">
            Get in touch &#128073; &nbsp;
            <span className="relative group p-1 ease-in-out">
              <a className="relative inline-block z-10 group-hover:text-white transition duration-100"
                href="mailto:aidanhop1@gmail.com">
                aidanhop1@gmail.com
              </a>
              <span className="absolute bg-blue-400 left-0 -bottom-1 w-full
                h-1 group-hover:h-[110%] duration-100 group-hover:transition-all"></span>
              </span>
          </div>
        </div>
        <div className="flex-auto flex flex-row m-auto mt-20 mb-20">
          <div className="flex-auto w-[40%] text-right text-lg font-bold text-blue-400">
            BACKGROUND
          </div>
          <div className="flex-auto w-[900px] px-20 text-base">
            I'm currently studying Computer Science at at 
            &nbsp;
            <a className="font-bold" href="https://wsu.edu" target="_blank">
              Washington State University 
            </a>
            &nbsp;
            while working as an Application Engineering Intern
            at 
            &nbsp;
            <a className="font-bold" href="https://selinc.com" target="_blank">
              Schweitzer Engineering Laboratories
            </a>
            &nbsp;
            building software to
            automate hardware testing.
            <br/>
            <br/>
            My favorite aspect of software engineering is solving interesting
            problems and working between the gaps of hardware and software.
            I also enjoy creating interactive frontends with fun designs.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
