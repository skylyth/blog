const React = {
    Children: {
      map,
      forEach,
      count,
      toArray,
      only,
    },
  
    createRef,
    Component,
    PureComponent,
  
    createContext,
    forwardRef,
    lazy,
    memo,
  
    useCallback,
    useContext,
    useEffect,
    useImperativeHandle,
    useDebugValue,
    useLayoutEffect,
    useMemo,
    useReducer,
    useRef,
    useState,
  
    Fragment: REACT_FRAGMENT_TYPE,
    Profiler: REACT_PROFILER_TYPE,
    StrictMode: REACT_STRICT_MODE_TYPE,
    Suspense: REACT_SUSPENSE_TYPE,
    unstable_SuspenseList: REACT_SUSPENSE_LIST_TYPE,
  
    createElement: __DEV__ ? createElementWithValidation : createElement,
    cloneElement: __DEV__ ? cloneElementWithValidation : cloneElement,
    createFactory: __DEV__ ? createFactoryWithValidation : createFactory,
    isValidElement: isValidElement,
  
    version: ReactVersion,
  
    unstable_withSuspenseConfig: withSuspenseConfig,
  
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals,
  };