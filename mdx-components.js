export function useMDXComponents(components) {
  return {
    ...components,
    h2 : ({ children }) => <h2 className="text-1xl">{children}</h2>,
    h1 : ({ children }) => <h1 className="text-2xl">{children}</h1>
  }
}