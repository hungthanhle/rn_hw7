import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class ScopesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredScopes = this.reflector.get<string[]>('scopes', context.getHandler());
    if (!requiredScopes) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    return requiredScopes.some((scope) => user.scope.includes(scope));
  }
}
