
import { urlFor } from "../sanity/image";

export const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className="portable-image">
        <img
          src={urlFor(value).width(1200).url()}
          alt={value.alt || ""}
          loading="lazy"
        />
      </figure>
    ),
  },

  block: {
    h2: ({ children }) => <h2>{children}</h2>,

    h3: ({ children }) => <h3>{children}</h3>,

    h4: ({ children }) => <h4>{children}</h4>,

    normal: ({ children }) => <p>{children}</p>,

    blockquote: ({ children }) => (
      <blockquote>{children}</blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => <ul>{children}</ul>,

    number: ({ children }) => <ol>{children}</ol>,
  },

  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};