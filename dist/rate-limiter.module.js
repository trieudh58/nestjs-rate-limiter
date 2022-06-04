"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var RateLimiterModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const default_options_1 = require("./default-options");
const rate_limiter_constants_1 = require("./rate-limiter.constants");
let RateLimiterModule = RateLimiterModule_1 = class RateLimiterModule {
    static register(options = default_options_1.defaultRateLimiterOptions) {
        return {
            module: RateLimiterModule_1,
            providers: [{ provide: rate_limiter_constants_1.RATE_LIMITER_OPTIONS, useValue: options }],
        };
    }
    static registerAsync(options) {
        return {
            module: RateLimiterModule_1,
            imports: options.imports,
            providers: [...this.createAsyncProviders(options), ...(options.extraProviders || [])],
        };
    }
    static createAsyncProviders(options) {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
            },
        ];
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                provide: rate_limiter_constants_1.RATE_LIMITER_OPTIONS,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            provide: rate_limiter_constants_1.RATE_LIMITER_OPTIONS,
            useFactory: (optionsFactory) => __awaiter(this, void 0, void 0, function* () { return optionsFactory.createRateLimiterOptions(); }),
            inject: [options.useExisting || options.useClass],
        };
    }
};
RateLimiterModule = RateLimiterModule_1 = __decorate([
    common_1.Module({
        exports: [rate_limiter_constants_1.RATE_LIMITER_OPTIONS],
        providers: [{ provide: rate_limiter_constants_1.RATE_LIMITER_OPTIONS, useValue: default_options_1.defaultRateLimiterOptions }],
    })
], RateLimiterModule);
exports.RateLimiterModule = RateLimiterModule;
