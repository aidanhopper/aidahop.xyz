type Props = {
  name: string,
}

const Section = (props: PropsWithChildren<Props>) => {
  return (
    <div>
      {props.name}
      {props.children}
    </div>
  );  
}

export default Section;
