st=>start: Start
e=>end: End
cond1=>condition: new绑定
op1=>operation: this绑定新创建的对象，
				var bar = new foo()
				
cond2=>condition: 显示绑定
op2=>operation: this绑定指定的对象，
				var bar = foo.call(obj2)
				
cond3=>condition: 隐式绑定
op3=>operation: this绑定上下文对象，
				var bar = obj1.foo()
				
op4=>operation: 默认绑定
op5=>operation: 函数体严格模式下绑定到undefined，
				否则绑定到全局对象，
				var bar = foo()

st->cond1
cond1(yes)->op1->e
cond1(no)->cond2
cond2(yes)->op2->e
cond2(no)->cond3
cond3(yes)->op3->e
cond3(no)->op4->op5->e