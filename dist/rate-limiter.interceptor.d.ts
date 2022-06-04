import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { RateLimiterModuleOptions } from './rate-limiter.interface';
export declare class RateLimiterInterceptor implements NestInterceptor {
    private readonly options;
    private readonly reflector;
    private rateLimiters;
    constructor(options: RateLimiterModuleOptions, reflector: Reflector);
    getRateLimiter(keyPrefix: string, options?: RateLimiterModuleOptions): Promise<RateLimiterMemory>;
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
}
