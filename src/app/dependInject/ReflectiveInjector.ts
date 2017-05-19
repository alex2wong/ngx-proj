import { ReflectiveInjector, Inject } from '@angular/core';

class Person {
    // @Inject装饰器做的工作就是在Injector 中找到对应的类型构造函数
    constructor(@Inject(Address) address, @Inject(Id) id) {
        // ...
    }
}
const injector = ReflectiveInjector.resolveAndCreate([
    // 定义映射关系，例如Person，用哪个函数来创建实例。
    {
        provide: "Person", useClass: Person
    },
    {
        provide: "Address", useFactory: () => {
            // if (env.testing)
            //     return new Address('辽宁', '沈阳', '和平区', 'xx街xx号');
            // return new Address('北京', '北京', '朝阳区', 'xx街xx号');
        }
    },
    { provide: "Id", useFactory: (type) => {
        // if(type === ID_TYPES.PASSPORT)
        //     return Id.getInstance(ID_TYPES.PASSPORT, someparam);
        // if(type === ID_TYPES.IDCARD)
        //     return Id.getInstance(ID_TYPES.IDCARD);
        // return Id.getDefaultInstance();
    } 
  }
]);
// 依赖注入其实是类型注入，为了让其他API的开发者不用知道依赖类型的具体细节。
// Provider .是个什么概念？例如在需要用DataService 等数据共享模块的时候，
// 为何要给实例化DataService的组件类注入，并且添加到Provider 中？
// 重要的问题是： Provider是一种单例模式（Singleton），子组件会往父组件去找依赖，
// 所以父组件的实例可以在多个子组件之间共享，并且访问的是同一个实例。

class Address {}
class Id {}

// 总结一句：实际上是为了减少API模块之间的耦合和依赖，依赖实例在Injector内
// 统一创建. 其实是一种设计模式。
