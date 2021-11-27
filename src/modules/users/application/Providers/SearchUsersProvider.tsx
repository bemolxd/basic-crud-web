import { Dispatch, SetStateAction } from "react";

import { createContext, useContextSelector } from "use-context-selector";

import { IChildrenProp } from "types";

interface SearchContext {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

const context = createContext<SearchContext | null>(null);

interface ISearchProviderProps extends IChildrenProp, SearchContext {}

export const SearchUsersProvider = ({
  query,
  setQuery,
  children,
}: ISearchProviderProps) => (
  <context.Provider value={{ query, setQuery }}>{children}</context.Provider>
);

export const useSearchUsersConsumer = <Selected extends {}>(
  selector: (state: SearchContext) => Selected,
  fallbackValue?: Selected
) => {
  return useContextSelector(context, (state) => {
    if (!state) {
      if (!!fallbackValue) {
        return fallbackValue;
      }
      throw Error(
        "useSearchUsersConsumer must be used within SearchUsersProvider"
      );
    }
    return selector(state);
  });
};
