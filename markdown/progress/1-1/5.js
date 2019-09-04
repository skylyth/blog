GlobalExectionContext = {

    ThisBinding: <Global Object>,
  
    LexicalEnvironment: {  
      EnvironmentRecord: {  
        Type: "Object",  
        // 标识符绑定在这里  
        a: < uninitialized >,  
        b: < uninitialized >,  
        multiply: < func >  
      }  
      outer: <null>  
    },
  
    VariableEnvironment: {  
      EnvironmentRecord: {  
        Type: "Object",  
        // 标识符绑定在这里  
        c: undefined,  
      }  
      outer: <null>  
    }  
  }
  
  FunctionExectionContext = {  
     
    ThisBinding: <Global Object>,
  
    LexicalEnvironment: {  
      EnvironmentRecord: {  
        Type: "Declarative",  
        // 标识符绑定在这里  
        Arguments: {0: 20, 1: 30, length: 2},  
      },  
      outer: <GlobalLexicalEnvironment>  
    },
  
    VariableEnvironment: {  
      EnvironmentRecord: {  
        Type: "Declarative",  
        // 标识符绑定在这里  
        g: undefined  
      },  
      outer: <GlobalLexicalEnvironment>  
    }  
  }