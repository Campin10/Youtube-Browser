
import { ApiResponseProperty } from '@nestjs/swagger';

export class SuccessResponseDto {
    @ApiResponseProperty()
    success: boolean;
    @ApiResponseProperty()
    message?: string;
  }

  export class Error400Dto {
    @ApiResponseProperty({ example: ['id should not be empty'] })
    message: string[];
  }
  
  export class Error400ResponseDto {
    @ApiResponseProperty()
    error: Error400Dto;
    @ApiResponseProperty()
    payload: any;
  }

  export class DeleteResponseDto {
    @ApiResponseProperty()
    id: string;
  }