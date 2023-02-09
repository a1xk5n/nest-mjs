import { Module } from '@nestjs/common';
import { TestResolver } from './test.resolver.js';

@Module({
  providers: [TestResolver],
})
export class TestModule {}
