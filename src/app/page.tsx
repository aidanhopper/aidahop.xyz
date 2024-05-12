import Section from './components/section'

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
            I&apos;m <b>Aidan Hopper</b>, a design-minded full-stack software engineer
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
        <Section name={"BACKGROUND" as string}>
          I&apos;m currently studying Computer Science at at 
          &nbsp;
          <a className="font-bold hover:text-blue-400 duration-100" href="https://wsu.edu" target="_blank">
            Washington State University 
          </a>
          &nbsp;
          while working as an Application Engineering Intern
          at 
          &nbsp;
          <a className="font-bold hover:text-blue-400 duration-100" href="https://selinc.com" target="_blank">
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
        </Section>
        <Section name={"SKILLS" as string}>
          <div className="flex">
            <div className="flex-auto">
              <b>LANGUAGES</b> <br/>
              C/C++ <br/>
              JavaScript <br/>
              TypeScript <br/>
              Python <br/>
              Bash <br/>
              HTML <br/>
              CSS <br/>
            </div>
            <div className="flex-auto">
              <b>FRAMEWORKS</b> <br/>
              React <br/>
              NextJS <br/>
              Node <br/>
            </div>
            <div className="flex-auto">
              <b>TOOLS</b> <br/>
              Git <br/>
              SSH <br/>
              Virsh <br/>
              Devtools <br/>
            </div>
            <div className="flex-auto">
              <b>TECHNOLOGIES</b> <br/>
              React <br/>
              NextJS <br/>
              Node <br/>
              Libvirt <br/>
            </div>
          </div>
        </Section>
        <Section name={"EXPERIENCE" as string}>
          <div className="flex flex-col">
            <div className="flex flex-auto">
            <div className="flex-auto">
                <b>Schweitzer Engineerng Laboratories</b> <br/>
                Application Engineering Intern 
              </div>
              <div className="flex-auto text-right font-mono text-sm">
                Aug 2023 - Present 
              </div>
            </div>
            <div className="flex flex-auto my-7">
              <div className="flex-auto">
                <b>Washington State University</b> <br/>
                Student 
              </div>
              <div className="flex-auto text-right font-mono text-sm">
                Aug 2022 - Present 
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default Home;
