import Section from './components/section'
import Project from './components/project'
import ScrollToTopButton from './components/scrolltotopbutton'

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
            I&apos;m <b>Aidan Hopper</b>, a design-minded student
            focused on learning new things and building cool projects.
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
        <ScrollToTopButton icon="asdf">
        </ScrollToTopButton>
        <Section name="BACKGROUND">
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
        <Section name="SKILLS">
          <div className="flex">
            <div className="flex-auto">
              <b>LANGUAGES</b> <br/>
              C/C++ <br/>
              JavaScript <br/>
              TypeScript <br/>
              Python <br/>
              Bash <br/>
              HTML <br/>
              Tailwind <br/>
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
              Virtualization <br/>
            </div>
          </div>
        </Section>
        <Section name="EXPERIENCE">
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
            <div className="flex flex-auto mt-7">
              <div className="flex-auto">
                <b>Robosub</b> <br/>
                Leader of Robosub Club at WSU
              </div>
              <div className="flex-auto text-right font-mono text-sm">
                Aug 2024 - Present 
              </div>
            </div>
            <div className="flex flex-auto mt-7">
              <div className="flex-auto">
                <b>Washington State University</b> <br/>
                Computer Science Student 
              </div>
              <div className="flex-auto text-right font-mono text-sm">
                Aug 2022 - Present 
              </div>
            </div>
            <a className="flex flex-auto mt-20 font-bold text-xl group inline-block"
               href="resume.pdf" target="_blank">
              Check out my resume &nbsp; 
              <span className="text-blue-400 group-hover:translate-x-2
                               ease-out duration-100 inline-block">
                &#x2192;
              </span>
            </a>
          </div>
        </Section>
        <Section name="PROJECTS">
          <Project name={"Nixconf" as string}
                   link={"https://github.com/aidanhopper/nixconf" as string}
                   tags={"Linux,Nix,Bash" as string}>
            Stores my configurations for all my machines in a single git repository
            built with NixOS and the Nix language.
          </Project>
          <Project name={"aidanhopper.dev" as string}
                   link={"https://github.com/aidanhopper/aidanhopper.dev" as string}
                   tags={"HTML,Tailwind,React,NextJS" as string}
                   className="mt-10">
            My personal portfiolio website. Designed to be easy to iterate on.
          </Project>
          <Project name={"3D Software Renderer" as string}
                   link={"https://github.com/aidanhopper/3drasteriser" as string}
                   tags={"C,Linear Algebra,SDL2" as string}
                   className="mt-10">
            A 3D software renderer built from scratch in C. I wrote every drawing 
            algorithm myself with SDL2 handling drawing a pixel to the screen. Used
            matrices and homogenous coordinates to take a point in 3D space, translate it to
            camera space, convert the point to 2D space with a perspective divide, 
            and then drawing the point on screen.
          </Project>
        </Section>
      </div>
      <div className="flex m-auto mx-20 mb-10 mt-[150px]">
        <div className="flex-auto text-base group font-bold">
          Built by Aidan Hopper 2024 &nbsp; 
          <span className="">
            &#128640;
          </span>
        </div>
        <div className="text-right flex-auto text-base group text-blue-400 font-bold">
          <a href="https://github.com/aidanhopper" 
             target="_blank" 
             className="m-4 hover:border-b-2 duration-75 border-blue-400">
            github
          </a>
          <a href="https://linkedin.com/in/aidanhopper" 
             target="_blank" 
             className="m-4 hover:border-b-2 duration-75 border-blue-400">
            linkedin
          </a>
          <a href="https://instagram.com/snekisgood" 
             target="_blank" 
             className="m-4 hover:border-b-2 duration-75 border-blue-400">
            instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
