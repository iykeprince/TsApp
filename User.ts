import { UserEntity } from "./entity/user.entity";
import { Model } from './models/Model'
import { Attributes } from './models/Attributes';
 import { ApiSync } from "./models/ApiSync";
import { Eventing } from './models/Eventing'
const rootUrl = "https://jsonplaceholder.typicode.com/users";
export class User extends Model<UserEntity> {

  static buildUser(attr: UserEntity): User{
    return new User(
      new Attributes<UserEntity>(attr),
      new ApiSync<UserEntity>(rootUrl),
      new Eventing(),
    );
  }
}