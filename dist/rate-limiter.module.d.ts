import { DynamicModule } from '@nestjs/common';
import { RateLimiterModuleOptions, RateLimiterModuleAsyncOptions } from './rate-limiter.interface';
export declare class RateLimiterModule {
    static register(options?: RateLimiterModuleOptions): DynamicModule;
    static registerAsync(options: RateLimiterModuleAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
