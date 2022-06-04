"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.RateLimit = (options) => common_1.SetMetadata('rateLimit', options);
