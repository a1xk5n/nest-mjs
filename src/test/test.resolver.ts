import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import type Upload from 'graphql-upload/Upload';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';

import { HelloDtoResponse } from './test.dto.js';

@Resolver()
export class TestResolver {
  @Query(() => HelloDtoResponse)
  getHello(): HelloDtoResponse {
    return {
      title: 'test',
    };
  }

  @Mutation(() => Boolean)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: Upload,
  ): Promise<boolean> {
    return true;
  }
}
