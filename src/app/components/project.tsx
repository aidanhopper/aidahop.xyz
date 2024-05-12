import React from 'react';

type Props = {
  name: string,
  link: string,
  tags: string,
  className: string,
}


const Project = (props: React.PropsWithChildren<Props>) => {

  const tags = props.tags.split(",");

  const Tags = (tags: string[]) => {
    return tags.map((tag) => {
      return (
        <span key={tag} className="p-[3px] font-serif font-bold mr-2 rounded border border-blue-400 text-xs text-blue-400">
          {tag}
        </span>
      );
    });
  }

  return (
    <div className={props.className}>
      <a href={props.link} className="font-bold group" target="_blank">
        {props.name} &nbsp; 
        <span className="text-blue-400 group-hover:translate-x-2 ease-out duration-100 inline-block">
          &#x2192;
        </span>
      </a>
      <div className="mt-3">
        {props.children}
      </div>
      <div className="mt-3">
        {Tags(tags)}
      </div>
    </div>
  );
}

export default Project;
