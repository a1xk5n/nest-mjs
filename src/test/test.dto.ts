import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HelloDtoResponse {
  @Field()
  title: string;
}
