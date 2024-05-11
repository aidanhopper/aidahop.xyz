const About = () => {
  return (
      <div className="bg-blue-100">
        <div className="h-screen container m-auto flex">
          <div className="flex flex-col flex-auto m-auto w-[400px] p-10 justify-center">
            <div className="-skew-y-3 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.35)] mb-10 flex-auto font-extrabold  text-6xl">
              about me &nbsp; :O
            </div>
            <div className="animate-slidein ms-10 flex-auto text-xl text-3xl text-green-600">
              Im a 21 year old student studying computer science based in Washington.
              I make horrible websites :)

              <br/>
              <br/>
              Contact me at <b>aidanhop1@gmail.com</b>.
            </div>
          </div>
          <div className="flex flex-col flex-auto m-auto p-10 justify-centertext-7xl">
            
          </div>
        </div>
      </div>
  ); 
}

export default About;
