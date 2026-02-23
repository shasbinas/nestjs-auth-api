import { Controller, Post, Body, UseInterceptors, UploadedFile, HttpCode, HttpStatus, UsePipes } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JoiValidationPipe } from './joi-validation.pipe';
import { registerSchema, loginSchema } from './auth.schemas';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @UseInterceptors(FileInterceptor('avatar'))
  async register(
    @Body(new JoiValidationPipe(registerSchema)) userData: RegisterDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.authService.register(userData, file);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new JoiValidationPipe(loginSchema))
  async login(@Body() loginData: LoginDto) {
    return this.authService.login(loginData);
  }
}
