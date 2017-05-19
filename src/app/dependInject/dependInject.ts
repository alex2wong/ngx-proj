// class Person {
//     constructor() {
//         // 这边需要知道这些依赖类的创建参数
//         this.address = new Address('北京', '北京', '朝阳区', 'xx街xx号');
//         this.id = Id.getInstance(ID_TYPES.IDCARD);
//     }
// }

// 为了解决这个问题，改造下Person类。。把依赖通过参数注入，不在内部实例化。
export default class Person {
  address: any;
  id: any;
  constructor(address, id) {
    this.address = address;
    this.id = id;
  }
}

// 在使用Person 类的时候才需要实例化相关类
const person = new Person(
  "",""
  // new Address('北京', '北京', '朝阳区', 'xx街xx号'),
  // Id.getInstance(ID_TYPES.IDCARD)
);
