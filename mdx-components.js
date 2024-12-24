export function useMDXComponents(components) {
  return {
    ...components,
    h2 : ({ children }) => <h2 className="text-1xl">{children}</h2>,
    h1 : ({ children }) => <h1 className="text-2xl text-green-500">{children}</h1>,
    strong: ({ children }) => <strong className="text-red-500">{children}</strong>,
    em: ({ children }) => <em className="text-blue-500">{children}</em>
  }
}