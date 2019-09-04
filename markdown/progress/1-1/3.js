GlobalExectionContext = {  // 全局执行上下文
    LexicalEnvironment: {    	  // 词法环境
        EnvironmentRecord: {   		// 环境记录
        Type: "Object",      		   // 全局环境
        // 标识符绑定在这里 
        outer: <null>  	   		   // 对外部环境的引用
    }  
}

FunctionExectionContext = { // 函数执行上下文
    LexicalEnvironment: {  	  // 词法环境
        EnvironmentRecord: {  		// 环境记录
        Type: "Declarative",  	   // 函数环境
        // 标识符绑定在这里 			  // 对外部环境的引用
        outer: <Global or outer function environment reference>  
    }  
}