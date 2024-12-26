export function useMDXComponents(components) {
  return {
    ...components,
    h1 : ({ children }) => <h1 className="text-4xl text-green-500">{children}</h1>,
    h2 : ({ children }) => <h2 className="text-3xl">{children}</h2>,
    strong: ({ children }) => <strong className="text-red-500">{children}</strong>,
    em: ({ children }) => <em className="text-blue-500">{children}</em>,
    p: ({ children }) => <p className="text-black">{children}</p>,
    li: ({ children }) => <li className="text-black">{children}</li>,
    a: ({ children, href }) => <a href={href} className="text-blue-400 underline">{children}</a>,
    
  }
}