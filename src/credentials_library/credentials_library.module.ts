import { Module } from '@nestjs/common';
import { CredentialsLibraryController } from './credentials_library.controller';
import { CredentialsLibraryService } from './credentials_library.service';

@Module({
  controllers: [CredentialsLibraryController],
  providers: [CredentialsLibraryService]
})
export class CredentialsLibraryModule {}
