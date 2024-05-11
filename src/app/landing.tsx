const Landing = () => {

  const name_button_style = "font-bold hover:text-green-500 animate-bounce";

  return (
      <div className="h-screen flex flex-col">
        <div className="flex-auto"/> {/* need dummy boxes to center on screen */}
        <div className="flex-auto"/>
        <div className="drop-shadow-[3px_3px_1px_rgba(0,0,0,0.30)] flex-auto m-auto animate-slidein text-center text-9xl">
          <div className="italic m-auto">who&apos;s</div>
          <div className="m-auto">
            <span className={name_button_style}>a</span>
            <span className={name_button_style}>i</span>
            <span className={name_button_style}>d</span>
            <span className={name_button_style}>a</span>
            <span className={name_button_style}>n</span>
            <span className={name_button_style}> </span>
            <span className={name_button_style}>?</span>
        </div>
        </div>
        <div className="m-auto flex-auto animate-bounce text-5xl">
          V
        </div>
      </div>
  );
}

export default Landing;
